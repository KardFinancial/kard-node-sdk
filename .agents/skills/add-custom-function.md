---
name: add-custom-function
description: Add a custom function to this Fern-generated TypeScript SDK
user_invocable: true
---

# Add Custom Function to Fern SDK

You are adding a custom function to a Fern-generated TypeScript SDK. Fern regenerates most files on each run, so custom code must be protected via `.fernignore`.

## Project conventions

- **Formatting**: 4-space indentation, 120-char line width, double quotes (enforced by biome)
- **Test framework**: vitest (globals enabled, node environment)
- **Build**: dual CJS + ESM output via TypeScript
- **Package manager**: pnpm

## Steps

### 1. Create the source file

Place the implementation in `src/<feature>.ts`.

- Add input validation that throws `TypeError` for invalid inputs
- Add JSDoc comments to all exported functions
- Prefer Node.js built-in modules (this SDK currently has zero production dependencies)
- If an external dependency is required, do **not** modify `package.json` directly — Fern overwrites it. Instead, add the dependency via `generators.yml` in the Fern config:

```yaml
- name: fernapi/fern-typescript-sdk
  config:
    extraDependencies:
      lodash-es: '1.0.0'
    extraDevDependencies:
      "@types/lodash-es": '1.0.0'
```

### 2. Create the test directory

Place tests in `tests/unit/<feature>/`:
- `tests/unit/<feature>/<feature>.test.ts` — vitest test file
- `tests/unit/<feature>/test_vectors.json` — test data (if applicable)

Test file conventions:
- Import from `../../../src/<feature>` (relative to the test file)
- Load JSON test data using `readFileSync(new URL("./test_vectors.json", import.meta.url), "utf8")`
- Use `describe`/`it` blocks with parameterized tests for test vectors
- Include validation tests for invalid inputs

### 3. Update `.fernignore`

Add entries for every custom file so Fern does not overwrite them:

```
src/<feature>.ts
tests/unit/<feature>
```

### 4. Exports

Custom functions are **not** re-exported from the package's main entry point. Do not modify these Fern-managed files to add exports:

- `src/index.ts` — Fern overwrites this on regeneration
- `package.json` — Fern overwrites this on regeneration
- Any file under `src/api/`, `src/core/`, `src/errors/`, `src/auth/`

Instead, consumers import directly from the module path:

```ts
import { myFunction } from "@kard-financial/sdk/src/<feature>";
```

If the function is internal-only (used by other custom code but not exposed to consumers), do not add an `export` keyword — keep it as a local function within the file.

### 5. Verify

Run `pnpm check`, `pnpm build`, and `pnpm test` to confirm:
- Formatting and linting pass (biome)
- TypeScript compilation succeeds for both CJS and ESM
- All tests pass (existing and new)

### 6. Commit

Use conventional commits: `feat: add <feature> utility`

## Reference implementation

See the HEM (Hashed Email) feature for a complete example:
- Source: `src/hem.ts`
- Tests: `tests/unit/hem/hem.test.ts`
- Test data: `tests/unit/hem/test_vectors.json`
- Protected in: `.fernignore`
