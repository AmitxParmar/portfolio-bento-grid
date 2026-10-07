import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import os from "os";
import staticD2Cache from "@/lib/d2-cache.json";

const memoryCache = new Map<string, string>();
const staticCache = staticD2Cache as Record<string, string>;

function getD2BinaryPath(): string | null {
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

function normalizeChart(str: string): string {
  if (!str) return "";
  return str
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n");
}

export async function POST(req: Request) {
  try {
    const { chart, theme = 200 } = await req.json();

    if (!chart || typeof chart !== "string") {
      return Response.json({ error: "Missing or invalid chart string" }, { status: 400 });
    }

    const trimmed = chart.trim();
    const normalized = normalizeChart(trimmed);

    const exactKey = `${theme}:${trimmed}`;
    const normKey = `${theme}:${normalized}`;
    const plainNorm = normalized;

    const cached =
      memoryCache.get(exactKey) ||
      memoryCache.get(normKey) ||
      memoryCache.get(plainNorm) ||
      staticCache[exactKey] ||
      staticCache[normKey] ||
      staticCache[plainNorm];

    if (cached) {
      memoryCache.set(exactKey, cached);
      return Response.json({ svg: cached });
    }

    const d2Path = getD2BinaryPath();
    if (!d2Path) {
      return Response.json(
        { error: "D2 binary is not installed on this server environment." },
        { status: 501 }
      );
    }

    const rawOutput = execSync(`"${d2Path}" --theme ${Number(theme) || 200} --pad 20 --no-xml-tag -`, {
      input: chart,
      encoding: "utf-8",
      maxBuffer: 10 * 1024 * 1024,
      timeout: 10000,
    });

    const svgStart = rawOutput.indexOf("<svg");
    const svgEnd = rawOutput.lastIndexOf("</svg>");

    if (svgStart === -1 || svgEnd === -1) {
      return Response.json({ error: "D2 did not produce a valid SVG" }, { status: 500 });
    }

    let svg = rawOutput.slice(svgStart, svgEnd + 6);
    // Make outer diagram background transparent so it blends into portfolio cards
    svg = svg.replace(/<rect([^>]+)fill="#1E1E2E"([^>]+class="[^"]*fill-N7[^"]*"[^>]*)>/, '<rect$1fill="transparent"$2>');

    memoryCache.set(exactKey, svg);
    memoryCache.set(normKey, svg);

    return Response.json({ svg });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to compile D2 diagram";
    return Response.json({ error: message }, { status: 500 });
  }
}
