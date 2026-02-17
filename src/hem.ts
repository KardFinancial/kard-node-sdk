import { createHash } from "crypto";

const GMAIL_DOMAINS = new Set(["gmail.com", "googlemail.com"]);

/**
 * Normalize an email address for Hashed Email (HEM) generation.
 *
 * Follows UID2/LiveRamp industry standards:
 * - Remove all whitespace
 * - Lowercase
 * - Gmail/Googlemail only: remove dots from local-part, strip '+' suffix
 * - Canonicalize googlemail.com → gmail.com
 */
export function normalizeEmail(raw: string): string {
    const email = raw.replace(/\s/g, "").toLowerCase();
    const atIndex = email.indexOf("@");
    if (atIndex < 1 || atIndex !== email.lastIndexOf("@") || atIndex === email.length - 1) {
        throw new TypeError(`Invalid email address: ${JSON.stringify(raw)}`);
    }

    const localPart = email.slice(0, atIndex);
    const domain = email.slice(atIndex + 1);

    if (GMAIL_DOMAINS.has(domain)) {
        const base = localPart.split("+")[0].replace(/\./g, "");
        return `${base}@gmail.com`;
    }

    return `${localPart}@${domain}`;
}

/**
 * Generate a Hashed Email (HEM) from a raw email address.
 * Returns the lowercase hex SHA-256 digest of the normalized, UTF-8-encoded email.
 */
export function generateHEM(raw: string): string {
    return createHash("sha256").update(normalizeEmail(raw), "utf8").digest("hex");
}
