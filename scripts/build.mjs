import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const serverDir = join(dist, "server");

if (existsSync(dist)) {
  rmSync(dist, { recursive: true, force: true });
}

mkdirSync(dist, { recursive: true });
mkdirSync(serverDir, { recursive: true });
mkdirSync(join(dist, ".openai"), { recursive: true });

for (const file of ["index.html", "styles.css", "app.js", "vocabulary.generated.js"]) {
  cpSync(join(root, file), join(dist, file));
}

cpSync(join(root, ".openai", "hosting.json"), join(dist, ".openai", "hosting.json"));

const html = readFileSync(join(root, "index.html"), "utf8");
const css = readFileSync(join(root, "styles.css"), "utf8");
const js = readFileSync(join(root, "app.js"), "utf8");
const vocabulary = readFileSync(join(root, "vocabulary.generated.js"), "utf8");

const server = `const files = {
  "/": { body: ${JSON.stringify(html)}, type: "text/html; charset=utf-8" },
  "/index.html": { body: ${JSON.stringify(html)}, type: "text/html; charset=utf-8" },
  "/styles.css": { body: ${JSON.stringify(css)}, type: "text/css; charset=utf-8" },
  "/app.js": { body: ${JSON.stringify(js)}, type: "application/javascript; charset=utf-8" },
  "/vocabulary.generated.js": { body: ${JSON.stringify(vocabulary)}, type: "application/javascript; charset=utf-8" }
};

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const file = files[url.pathname] || files["/"];
    return new Response(file.body, {
      headers: {
        "content-type": file.type,
        "cache-control": "public, max-age=300"
      }
    });
  }
};
`;

writeFileSync(join(serverDir, "index.js"), server);
