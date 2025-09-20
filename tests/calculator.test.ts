const {
  add,
  subtract,
  multiply,
  isEven,
  absolute,
  max,
  min,
  reverseString,
  sumOfArray,
} = require("../src/calculator");

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

test("absoluteValue works correctly", () => {
  expect(absolute(-5)).toBe(5);
  expect(absolute(3)).toBe(3);
});

test("max works correctly", () => {
  expect(max(5, 10)).toBe(10);
  expect(max(7, 2)).toBe(7);
});

test("min works correctly", () => {
  expect(min(5, 10)).toBe(5);
  expect(min(7, 2)).toBe(2);
});

test("reverseString works correctly", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("TypeScript")).toBe("tpircSepyT");
});

test("sumArray works correctly", () => {
  expect(sumOfArray([1, 2, 3, 4])).toBe(10);
  expect(sumOfArray([])).toBe(0);
});

describe("Arithmetic tests", () => {
  test("test 1 + 1 = 2", () => {
    expect(1 + 1).toBe(2);
  });
});

it("test 1 + 2 = 3", () => {
  expect(1 + 2).toBe(3);
});

it("test 1 + 2 = 3", () => {
  expect(1 + 2).not.toBe(4);
});
