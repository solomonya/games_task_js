import { describe, test } from "node:test";
import assert from "node:assert/strict";

import {
  validateUniqueName,
  validatePriceWithDiscount,
} from "../src/4-validation-report.mjs";

describe("Validation Functions", () => {
  const games = [{ name: "Skyrim" }, { name: "Fallout" }, { name: "Witcher" }];

  describe("validateUniqueName", () => {
    test("returns valid true if name is unique", () => {
      const result = validateUniqueName("Portal", games);
      assert.strictEqual(result.valid, true);
    });

    test("returns valid false with reason if name is duplicated", () => {
      const result = validateUniqueName("Skyrim", games);
      assert.strictEqual(result.valid, false);
      assert.strictEqual(result.reason, "duplicate name");
    });
  });

  describe("validatePriceWithDiscount", () => {
    test("returns valid true if discount does not exceed price", () => {
      const result = validatePriceWithDiscount(100, 20);
      assert.strictEqual(result.valid, true);
    });

    test("returns valid false with reason if discount exceeds price", () => {
      const result = validatePriceWithDiscount(100, 120);
      assert.strictEqual(result.valid, false);
      assert.strictEqual(result.reason, "discount exceeds price");
    });
  });
});
