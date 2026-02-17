/**
 * Patches package.json to include exports for all custom helper modules in src/helpers/.
 * Run automatically via pre-commit hook after Fern regeneration.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const HELPERS_DIR = path.join(ROOT, "src", "helpers");
const PKG_PATH = path.join(ROOT, "package.json");

const pkg = JSON.parse(fs.readFileSync(PKG_PATH, "utf8"));

// Collect all .ts helper files (exclude index.ts, .d.ts)
const helperFiles = fs.existsSync(HELPERS_DIR)
    ? fs
          .readdirSync(HELPERS_DIR)
          .filter((f) => f.endsWith(".ts") && !f.endsWith(".d.ts") && f !== "index.ts")
          .map((f) => f.replace(/\.ts$/, ""))
    : [];

// Build expected exports entries
const customExports = {};
for (const name of helperFiles) {
    customExports[`./helpers/${name}`] = {
        types: `./dist/cjs/helpers/${name}.d.ts`,
        import: {
            types: `./dist/esm/helpers/${name}.d.mts`,
            default: `./dist/esm/helpers/${name}.mjs`,
        },
        require: {
            types: `./dist/cjs/helpers/${name}.d.ts`,
            default: `./dist/cjs/helpers/${name}.js`,
        },
        default: `./dist/cjs/helpers/${name}.js`,
    };
}

// Remove stale helper exports, preserve non-helper exports
const newExports = {};
for (const [key, value] of Object.entries(pkg.exports)) {
    if (!key.startsWith("./helpers/")) {
        newExports[key] = value;
    }
}

// Add current helper exports
Object.assign(newExports, customExports);

pkg.exports = newExports;

// Build typesVersions so TypeScript/VS Code IntelliSense discovers subpath exports
const typesVersionsEntries = {};
for (const name of helperFiles) {
    typesVersionsEntries[`helpers/${name}`] = [`dist/cjs/helpers/${name}.d.ts`];
}

if (Object.keys(typesVersionsEntries).length > 0) {
    pkg.typesVersions = { "*": typesVersionsEntries };
} else {
    delete pkg.typesVersions;
}

fs.writeFileSync(PKG_PATH, JSON.stringify(pkg, null, 4) + "\n");

if (helperFiles.length > 0) {
    console.log(`Patched package.json exports: ${helperFiles.map((f) => `./helpers/${f}`).join(", ")}`);
} else {
    console.log("No helper modules found in src/helpers/");
}
