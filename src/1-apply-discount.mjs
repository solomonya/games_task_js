/*
    Need to implement function that return new array with applyed discount for items
    There is two types of discounts:
    - simple ([type: number, value: number])
    - conditional ([type, { condition: number, value: number }])


    examples of discounts [[5, 50], [10, { value: 100, condition: 200 }]]

    if discountType in item not exist return same price
*/

/*
    args: discounts: number[][], items: { discountType: number; price: number }[]
    return_type: { finalPrice: number }[]
*/
export const applySimpleDiscount = (discounts, items) => {
  // TODO
};

/*
    args: discounts: Array<[number, { value: number, condition: number }]>, items: { discountType: number, price: number }[]
    return_type: { finalPrice: number }[]
*/
export const applyConditionalDiscount = (discounts, items) => {
  // TODO
};
