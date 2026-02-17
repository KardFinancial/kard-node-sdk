import { readFileSync } from "fs";
import { normalizeEmail, generateHEM } from "../../../src/hem";

interface TestVector {
    name: string;
    input: string;
    normalized: string;
    sha256_hex: string;
    uid2_validated?: boolean;
}

const vectors: TestVector[] = JSON.parse(
    readFileSync(new URL("./test_vectors.json", import.meta.url), "utf8"),
);

describe("HEM", () => {
    describe("normalizeEmail", () => {
        for (const v of vectors) {
            it(`normalizes: ${v.name}`, () => {
                expect(normalizeEmail(v.input)).toBe(v.normalized);
            });
        }
    });

    describe("normalizeEmail validation", () => {
        it.each(["", " ", "@", "user", "user@", "@domain.com", "a@b@c.com"])(
            "rejects invalid email: %j",
            (input) => {
                expect(() => normalizeEmail(input)).toThrow(TypeError);
            },
        );
    });

    describe("generateHEM", () => {
        for (const v of vectors) {
            it(`generates correct SHA-256 hex: ${v.name}`, () => {
                expect(generateHEM(v.input)).toBe(v.sha256_hex);
            });
        }
    });
});
