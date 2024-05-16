import { describe, test } from "node:test";
import assert from "node:assert/strict";

import { validateDiscount, validateUniqueName } from "../src/3-validation.mjs";

describe("Game Validation Tests", () => {
  describe("validateDiscount", () => {
    test("returns true when the discount is less than the price", () => {
      assert.strictEqual(validateDiscount(100, 20), true);
    });

    test("returns false when the discount is equal to the price", () => {
      assert.strictEqual(validateDiscount(100, 100), false);
    });

    test("returns false when the discount is greater than the price", () => {
      assert.strictEqual(validateDiscount(100, 120), false);
    });

    test("returns true when the discount is zero", () => {
      assert.strictEqual(validateDiscount(100, 0), true);
    });

    test("handles fractional discounts correctly", () => {
      assert.strictEqual(validateDiscount(100.5, 50.25), true);
    });
  });

  describe("validateUniqueName", () => {
    const games = [
      { name: "Skyrim" },
      { name: "Fallout" },
      { name: "Skyrim" },
      { name: "Witcher" },
    ];

    test("returns false when the name is duplicated in the list", () => {
      assert.strictEqual(validateUniqueName("Skyrim", games), false);
    });

    test("returns true when the name is unique in the list", () => {
      assert.strictEqual(validateUniqueName("Portal", games), true);
    });

    test("is case-sensitive, returns true for same names with different cases", () => {
      assert.strictEqual(validateUniqueName("skyrim", games), true);
    });

    test("returns true when the list is empty", () => {
      assert.strictEqual(validateUniqueName("AnyGame", []), true);
    });

    test("returns false when all names are the same and the list is populated", () => {
      const allSkyrim = [{ name: "Skyrim" }, { name: "Skyrim" }];
      assert.strictEqual(validateUniqueName("Skyrim", allSkyrim), false);
    });
  });
});
