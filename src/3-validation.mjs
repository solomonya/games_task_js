/**
 * Validates that the discount applied does not exceed the price of the game.
 * - Directly compares the discount amount to the game's price to ensure the final price is non-negative.
 * @param {number} price - The price of the game.
 * @param {number} discount - The discount to be applied.
 * @returns {boolean} True if the discount does not exceed the price, false otherwise.
 */
export function validateDiscount(price, discount) {
  // Implementation needed
}

/**
 * Validates that the game name is not duplicated in the given list of games.
 * - Checks if the game's name appears more than once in the list.
 * - Assumes the list of games does not change during the operation, to avoid rechecking the entire list.
 * @param {string} name - The name of the game to check.
 * @param {Array} games - The list of all games.
 * @returns {boolean} True if the name is unique, false if it is duplicated.
 */
export function validateUniqueName(name, games) {
  // Implementation needed
}

/**
 * Validates a game object against multiple conditions and returns any validation failures.
 * @param {Object} game - The game object to validate.
 * @param {Array} games - Array of all game objects for uniqueness check.
 * @param {Object} discounts - Object mapping discountTypes to discount values or conditions.
 * @returns {Object} - Returns original game object if valid, and with validation failures reason
 */
export function validateGame(game, games, discounts) {
  // Implementation will be added here.
}
