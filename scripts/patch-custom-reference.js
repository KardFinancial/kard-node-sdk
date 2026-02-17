/**
 * Appends a "Custom Helper Functions" section to reference.md using JSDoc
 * extracted from all exported functions in src/helpers/*.ts.
 * Run automatically via pre-commit hook.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const HELPERS_DIR = path.join(ROOT, "src", "helpers");
const REF_PATH = path.join(ROOT, "reference.md");

const SECTION_START = "## Custom Helper Functions";

/**
 * Parse exported functions and their JSDoc from a TypeScript file.
 * Returns array of { name, params, returnType, jsdoc, signature }.
 */
function parseExportedFunctions(filePath) {
    const source = fs.readFileSync(filePath, "utf8");
    const results = [];

    // Match JSDoc + export function patterns
    const pattern = /(?:\/\*\*([\s\S]*?)\*\/\s*)?export\s+function\s+(\w+)\s*\(([^)]*)\)\s*:\s*([^\s{]+)/g;
    let match;
    while ((match = pattern.exec(source)) !== null) {
        const rawDoc = match[1] || "";
        const name = match[2];
        const params = match[3].trim();
        const returnType = match[4];

        // Clean JSDoc: remove leading * and whitespace
        const jsdoc = rawDoc
            .split("\n")
            .map((line) => line.replace(/^\s*\*\s?/, "").trim())
            .filter((line) => line.length > 0)
            .join("\n");

        results.push({
            name,
            params,
            returnType,
            jsdoc,
            signature: `${name}(${params}): ${returnType}`,
        });
    }

    return results;
}

// Collect all helper files
const helperFiles = fs.existsSync(HELPERS_DIR)
    ? fs
          .readdirSync(HELPERS_DIR)
          .filter((f) => f.endsWith(".ts") && !f.endsWith(".d.ts") && f !== "index.ts")
          .sort()
    : [];

if (helperFiles.length === 0) {
    console.log("No helper modules found in src/helpers/");
    process.exit(0);
}

// Build the custom section
const lines = [`\n${SECTION_START}`];

for (const file of helperFiles) {
    const filePath = path.join(HELPERS_DIR, file);
    const moduleName = file.replace(/\.ts$/, "");
    const functions = parseExportedFunctions(filePath);

    if (functions.length === 0) continue;

    lines.push(`### ${moduleName}`);
    lines.push(`\n**Import:** \`import { ${functions.map((f) => f.name).join(", ")} } from "@kard-financial/sdk/helpers/${moduleName}";\`\n`);

    for (const fn of functions) {
        lines.push(
            `<details><summary><code><a href="/src/helpers/${file}">${fn.signature}</a></code></summary>`,
        );
        lines.push("<dl>");
        lines.push("<dd>\n");

        if (fn.jsdoc) {
            lines.push("#### 📝 Description\n");
            lines.push("<dl>");
            lines.push("<dd>\n");
            lines.push(fn.jsdoc);
            lines.push("\n</dd>");
            lines.push("</dl>\n");
        }

        lines.push("#### 🔌 Usage\n");
        lines.push("<dl>");
        lines.push("<dd>\n");
        lines.push("```typescript");
        lines.push(`import { ${fn.name} } from "@kard-financial/sdk/helpers/${moduleName}";\n`);
        lines.push(`const result = ${fn.name}(/* ${fn.params} */);`);
        lines.push("```\n");
        lines.push("</dd>");
        lines.push("</dl>\n");

        lines.push("</dd>");
        lines.push("</dl>");
        lines.push("</details>\n");
    }
}

const customSection = lines.join("\n");

// Read existing reference.md and strip any previous custom section
let content = fs.readFileSync(REF_PATH, "utf8");
const sectionIndex = content.indexOf(SECTION_START);
if (sectionIndex !== -1) {
    content = content.slice(0, sectionIndex).trimEnd();
}

fs.writeFileSync(REF_PATH, content + "\n" + customSection + "\n");

const totalFns = helperFiles.reduce((sum, file) => {
    return sum + parseExportedFunctions(path.join(HELPERS_DIR, file)).length;
}, 0);
console.log(`Patched reference.md: ${totalFns} function(s) from ${helperFiles.length} helper module(s)`);
