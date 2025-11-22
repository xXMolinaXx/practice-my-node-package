const { greet, add, capitalize } = require('./index');

// Simple test runner
function test(description, fn) {
  try {
    fn();
    console.log(`✓ ${description}`);
  } catch (error) {
    console.error(`✗ ${description}`);
    console.error(`  ${error.message}`);
    process.exitCode = 1;
  }
}

function assertEquals(actual, expected) {
  if (actual !== expected) {
    throw new Error(`Expected ${expected} but got ${actual}`);
  }
}

// Run tests
console.log('Running tests...\n');

test('greet() without name should return "Hello, World!"', () => {
  assertEquals(greet(), 'Hello, World!');
});

test('greet("Alice") should return "Hello, Alice!"', () => {
  assertEquals(greet('Alice'), 'Hello, Alice!');
});

test('add(2, 3) should return 5', () => {
  assertEquals(add(2, 3), 5);
});

test('add(-1, 1) should return 0', () => {
  assertEquals(add(-1, 1), 0);
});

test('capitalize("hello") should return "Hello"', () => {
  assertEquals(capitalize('hello'), 'Hello');
});

test('capitalize("") should return ""', () => {
  assertEquals(capitalize(''), '');
});

test('capitalize(null) should return ""', () => {
  assertEquals(capitalize(null), '');
});

console.log('\nAll tests completed!');
