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

function normalizeChart(str) {
  if (!str || typeof str !== "string") return "";
  return str
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n");
}

async function extractFromCompiledProjects() {
  const generatedPath = path.join(process.cwd(), ".content-collections", "generated", "allProjects.js");
  if (!fs.existsSync(generatedPath)) return [];

  const icons = [
    "Cpu","Database","Server","Share2","Activity","MessageSquare","ExternalLink","Github",
    "Calendar","CheckCircle2","Layout","Shield","Info","ChevronRight","Box","Network",
    "FileText","Workflow","Terminal"
  ];
  icons.forEach((name) => { globalThis[name] = () => null; });

  const captured = new Set();
  const mockJsx = {
    jsx: (type, props) => {
      if (props && props.d2) captured.add(props.d2);
      if (typeof type === "function") return type(props);
      return null;
    },
    jsxs: (type, props) => {
      if (props && props.d2) captured.add(props.d2);
      if (typeof type === "function") return type(props);
      return null;
    },
    Fragment: Symbol("Fragment")
  };

  const dummy = (props) => {
    if (props && props.d2) captured.add(props.d2);
    return null;
  };

  const componentNames = [
    "ProjectArchitecture","ProjectHero","InfoGrid","InfoCard","ProjectStat","ArchitectureHeader",
    "ArchitectureImage","p","pre","ArchitectureDialog","Grid","Step","OutcomeCard","FeatureGrid",
    "FeatureCard","ChallengeCard","ApiDialog","ApiEndpoint","EventFlow","EventStep","MetricsTable",
    "MetricRow","ProjectTree","TechBadge","TechStack","Callout","Timeline","ImageGallery","GalleryItem",
    "Badge","Button","InteractiveCanvas","RoleList","RoleItem","WorkflowList","WorkflowItem","SectionHeader"
  ];
  const components = {};
  for (const name of componentNames) components[name] = dummy;

  try {
    // Dynamic import generated file
    const generatedUrl = new URL(`file://${generatedPath}`).href;
    const { default: projects } = await import(generatedUrl);
    for (const p of projects) {
      if (!p.mdx) continue;
      const mod = new Function("_jsx_runtime", p.mdx)(mockJsx);
      mod.default({ components });
    }
  } catch (err) {
    console.warn("[compile-d2] Note: could not extract directly from compiled projects:", err.message);
  }

  return Array.from(captured);
}

function extractFromRawMdx() {
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

async function main() {
  let existingCache = {};
  if (fs.existsSync(CACHE_FILE)) {
    try {
      existingCache = JSON.parse(fs.readFileSync(CACHE_FILE, "utf-8"));
    } catch {
      existingCache = {};
    }
  }

  const d2Path = getD2BinaryPath();
  const runtimeCharts = await extractFromCompiledProjects();
  const rawCharts = extractFromRawMdx();

  const allCharts = new Set([...runtimeCharts, ...rawCharts]);
  console.log(`[compile-d2] Found ${allCharts.size} charts (runtime: ${runtimeCharts.length}, raw: ${rawCharts.length}).`);

  if (!d2Path) {
    console.warn("[compile-d2] Warning: d2 binary not found. Using existing cached SVGs.");
    return;
  }

  let updatedCount = 0;
  for (const chart of allCharts) {
    const theme = 200;
    const trimmed = chart.trim();
    const normalized = normalizeChart(trimmed);

    const keyExact = `${theme}:${trimmed}`;
    const keyNorm = `${theme}:${normalized}`;
    const keyPlainNorm = normalized;

    let svg = existingCache[keyExact] || existingCache[keyNorm] || existingCache[keyPlainNorm];

    if (!svg) {
      try {
        const rawOutput = execSync(`"${d2Path}" --theme ${theme} --pad 20 --no-xml-tag -`, {
          input: trimmed,
          encoding: "utf-8",
          maxBuffer: 10 * 1024 * 1024,
          timeout: 10000,
        });

        const svgStart = rawOutput.indexOf("<svg");
        const svgEnd = rawOutput.lastIndexOf("</svg>");
        if (svgStart !== -1 && svgEnd !== -1) {
          svg = rawOutput.slice(svgStart, svgEnd + 6);
          svg = svg.replace(
            /<rect([^>]+)fill="#1E1E2E"([^>]+class="[^"]*fill-N7[^"]*"[^>]*)>/,
            '<rect$1fill="transparent"$2>'
          );
          updatedCount++;
        }
      } catch (err) {
        console.error(`[compile-d2] Failed to compile chart:`, err.message);
      }
    }

    if (svg) {
      existingCache[keyExact] = svg;
      existingCache[keyNorm] = svg;
      existingCache[keyPlainNorm] = svg;
    }
  }

  fs.mkdirSync(path.dirname(CACHE_FILE), { recursive: true });
  fs.writeFileSync(CACHE_FILE, JSON.stringify(existingCache, null, 2), "utf-8");
  console.log(`[compile-d2] Cache updated at lib/d2-cache.json (${Object.keys(existingCache).length} keys, ${updatedCount} newly compiled).`);
}

main();
