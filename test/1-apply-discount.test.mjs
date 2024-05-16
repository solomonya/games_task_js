import { describe, test } from "node:test";
import assert from "node:assert/strict";
import {
  applyConditionalDiscount,
  applySimpleDiscount,
} from "../src/1-apply-discount.mjs";

describe("Test applying discounts", () => {
  test("Return correct items price after aplying simple discount", () => {
    const items = [
      { price: 100, discountType: 5 },
      { price: 200, discountType: 10 },
      { price: 300, discountType: 15 },
      { price: 500, discountType: 999 },
    ];
    const discounts = [
      [5, 50],
      [10, 100],
      [15, 150],
    ];

    const result = [
      { finalPrice: 50 },
      { finalPrice: 100 },
      { finalPrice: 150 },
      { finalPrice: 500 },
    ];

    assert.deepEqual(applySimpleDiscount(discounts, items), result);
  });

  test("Return correct items price after aplying conditional discount", () => {
    const items = [
      { price: 400, discountType: 20 },
      { price: 500, discountType: 20 },
    ];

    const discounts = [[20, { value: 200, cond: 450 }]];

    const result = [{ finalPrice: 400 }, { finalPrice: 300 }];

    assert.deepEqual(applyConditionalDiscount(discounts, items), result);
  });
});
