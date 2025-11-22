# practice-my-node-package

A simple Node.js package created from scratch for learning and practice purposes.

## Installation

```bash
npm install practice-my-node-package
```

## Usage

```javascript
const { greet, add, capitalize } = require('practice-my-node-package');

// Greet someone
console.log(greet('World')); // Output: Hello, World!
console.log(greet());        // Output: Hello, World!

// Add two numbers
console.log(add(5, 3));      // Output: 8

// Capitalize a string
console.log(capitalize('hello')); // Output: Hello
```

## API

### `greet(name)`

Returns a greeting message.

- **Parameters:**
  - `name` (string, optional): The name to greet. Defaults to "World" if not provided.
- **Returns:** A greeting string

### `add(a, b)`

Adds two numbers together.

- **Parameters:**
  - `a` (number): First number
  - `b` (number): Second number
- **Returns:** The sum of the two numbers

### `capitalize(str)`

Capitalizes the first letter of a string.

- **Parameters:**
  - `str` (string): The string to capitalize
- **Returns:** The capitalized string, or empty string if input is invalid

## Testing

Run the test suite:

```bash
npm test
```

## License

ISC
