import { describe, test } from "node:test";
import assert from "node:assert/strict";

// Assuming that the `sanitizeName` and `sanitizePrice` functions are exported from `sanitize.mjs`
import { sanitizeName, sanitizePrice } from "../src/2-sanitizing.mjs";

describe("Sanitization Functions", () => {
  // Tests for sanitizing game names
  describe("sanitizeName", () => {
    test("trims whitespace and converts to lower case", () => {
      const name = " death stranging   ";
      const expected = "death stranging";
      assert.strictEqual(sanitizeName(name), expected);
    });

    test("handles names without extra spaces correctly", () => {
      const name = "SHREK 2: THE GAME";
      const expected = "shrek 2: the game";
      assert.strictEqual(sanitizeName(name), expected);
    });

    test("works with empty strings", () => {
      const name = "";
      const expected = "";
      assert.strictEqual(sanitizeName(name), expected);
    });
  });

  // Tests for sanitizing prices
  describe("sanitizePrice", () => {
    test("removes currency symbols and non-numeric characters", () => {
      const price = "1000rub";
      const expected = 1000;
      assert.strictEqual(sanitizePrice(price), expected);
    });

    test("handles prices with decimal points", () => {
      const price = "20.512830102$";
      const expected = 20.512830102;
      assert.strictEqual(sanitizePrice(price), expected);
    });

    test("returns NaN for non-numeric inputs", () => {
      const price = "abc";
      assert.strictEqual(isNaN(sanitizePrice(price)), true);
    });
  });
});
