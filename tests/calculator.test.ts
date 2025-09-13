const { add, subtract, multiply, isEven } = require("../src/calculator");

test("add 2 + 3 to equal 5", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtract 5 - 3 to equal 2", () => {
  expect(subtract(5, 3)).toBe(2);
});

test("check if 20 is even", () => {
  expect(isEven(20)).toBe(true);
});

test("check if 7 is even", () => {
  expect(isEven(7)).toBe(false);
});
