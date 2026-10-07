import fs from "fs";
import path from "path";
import os from "os";
import { execSync } from "child_process";

const CACHE_FILE = path.join(process.cwd(), "lib", "d2-cache.json");

function getD2BinaryPath() {
  const localBin = path.join(os.homedir(), ".local", "bin", "d2");
  if (fs.existsSync(localBin)) {
    return localBin;
  }
  try {
    execSync("which d2", { stdio: "ignore" });
    return "d2";
  } catch {
    return null;
  }
}

function extractD2Charts() {
  const contentDir = path.join(process.cwd(), "content");
  if (!fs.existsSync(contentDir)) return [];

  const charts = new Set();
  const pattern1 = /d2=\{`([\s\S]*?)`\}/g;
  const pattern2 = /```d2\s*\n([\s\S]*?)\n```/g;

  function scanDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scanDir(fullPath);
      } else if (entry.name.endsWith(".mdx") || entry.name.endsWith(".md")) {
        const text = fs.readFileSync(fullPath, "utf-8");
        let m;
        while ((m = pattern1.exec(text)) !== null) {
          if (m[1]?.trim()) charts.add(m[1].trim());
        }
        while ((m = pattern2.exec(text)) !== null) {
          if (m[1]?.trim()) charts.add(m[1].trim());
        }
      }
    }
  }

  scanDir(contentDir);
  return Array.from(charts);
}

function main() {
  let existingCache = {};
  if (fs.existsSync(CACHE_FILE)) {
    try {
      existingCache = JSON.parse(fs.readFileSync(CACHE_FILE, "utf-8"));
    } catch {
      existingCache = {};
    }
  }

  const d2Path = getD2BinaryPath();
  const charts = extractD2Charts();
  console.log(`[compile-d2] Found ${charts.length} unique D2 charts across content files.`);

  if (!d2Path) {
    console.warn("[compile-d2] Warning: d2 binary not found. Using existing cached SVGs if available.");
    return;
  }

  let updatedCount = 0;
  for (const chart of charts) {
    const theme = 200;
    const cacheKey = `${theme}:${chart}`;
    if (existingCache[cacheKey]) {
      continue;
    }

    try {
      const rawOutput = execSync(`"${d2Path}" --theme ${theme} --pad 20 --no-xml-tag -`, {
        input: chart,
        encoding: "utf-8",
        maxBuffer: 10 * 1024 * 1024,
        timeout: 10000,
      });

      const svgStart = rawOutput.indexOf("<svg");
      const svgEnd = rawOutput.lastIndexOf("</svg>");
      if (svgStart !== -1 && svgEnd !== -1) {
        let svg = rawOutput.slice(svgStart, svgEnd + 6);
        svg = svg.replace(
          /<rect([^>]+)fill="#1E1E2E"([^>]+class="[^"]*fill-N7[^"]*"[^>]*)>/,
          '<rect$1fill="transparent"$2>'
        );
        existingCache[cacheKey] = svg;
        updatedCount++;
      }
    } catch (err) {
      console.error(`[compile-d2] Failed to compile chart:`, err.message);
    }
  }

  fs.mkdirSync(path.dirname(CACHE_FILE), { recursive: true });
  fs.writeFileSync(CACHE_FILE, JSON.stringify(existingCache, null, 2), "utf-8");
  console.log(`[compile-d2] Cache saved to lib/d2-cache.json (${Object.keys(existingCache).length} total, ${updatedCount} newly compiled).`);
}

main();
