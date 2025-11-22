/**
 * A simple greeting function
 * @param {string} name - The name to greet
 * @returns {string} A greeting message
 */
function greet(name) {
  if (!name) {
    return 'Hello, World!';
  }
  return `Hello, ${name}!`;
}

/**
 * Add two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of the two numbers
 */
function add(a, b) {
  return a + b;
}

/**
 * Capitalize the first letter of a string
 * @param {string} str - The string to capitalize
 * @returns {string} The capitalized string
 */
function capitalize(str) {
  if (!str || typeof str !== 'string') {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = {
  greet,
  add,
  capitalize
};
