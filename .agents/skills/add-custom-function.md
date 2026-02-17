---
name: add-custom-function
description: Add a custom function to this Fern-generated TypeScript SDK
user_invocable: true
---

# Add Custom Function to Fern SDK

You are adding a custom function to a Fern-generated TypeScript SDK. Fern regenerates most files on each run, so custom code must live in `src/helpers/` and be protected via `.fernignore`.

## Project conventions

- **Formatting**: 4-space indentation, 120-char line width, double quotes (enforced by biome)
- **Test framework**: vitest (globals enabled, node environment)
- **Build**: dual CJS + ESM output via TypeScript
- **Package manager**: pnpm

## Steps

### 1. Create the source file

Place the implementation in `src/helpers/<feature>.ts`.

- Add input validation that throws `TypeError` for invalid inputs
- Add JSDoc comments to all exported functions (these are used to auto-generate `reference.md`)
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
- Import from `../../../src/helpers/<feature>` (relative to the test file)
- Load JSON test data using `readFileSync(new URL("./test_vectors.json", import.meta.url), "utf8")`
- Use `describe`/`it` blocks with parameterized tests for test vectors
- Include validation tests for invalid inputs

### 3. Update `.fernignore`

The `src/helpers` directory is already protected as a whole. You only need to add an entry for new test directories:

```
tests/unit/<feature>
```

### 4. Exports and documentation (automated)

A pre-commit hook automatically handles two things:

1. **`package.json` exports** — `scripts/patch-custom-exports.js` scans `src/helpers/` and adds export entries so consumers can import via:

```ts
import { myFunction } from "@kard-financial/sdk/helpers/<feature>";
```

2. **`reference.md` docs** — `scripts/patch-custom-reference.js` parses JSDoc from all exported functions in `src/helpers/` and appends a "Custom Helper Functions" section to `reference.md`.

You do **not** need to manually update `package.json`, `reference.md`, or `src/index.ts`.

**Important:** Ensure git is configured to use the project hooks:
```sh
git config core.hooksPath .githooks
```

### 5. Do NOT modify these Fern-managed files

- `src/index.ts` — Fern overwrites this on regeneration
- Any file under `src/api/`, `src/core/`, `src/errors/`, `src/auth/`

### 6. Verify

Run `pnpm check`, `pnpm build`, and `pnpm test` to confirm:
- Formatting and linting pass (biome)
- TypeScript compilation succeeds for both CJS and ESM
- All tests pass (existing and new)

### 7. Commit

Use conventional commits: `feat: add <feature> utility`

The pre-commit hook will automatically patch `package.json` exports and `reference.md` before the commit is finalized.

## Reference implementation

See the HEM (Hashed Email) feature for a complete example:
- Source: `src/helpers/hem.ts`
- Tests: `tests/unit/hem/hem.test.ts`
- Test data: `tests/unit/hem/test_vectors.json`
