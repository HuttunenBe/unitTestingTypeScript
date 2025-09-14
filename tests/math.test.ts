"use strict";

const { sum } = require("../src/math");

describe("Testing sum with integers", () => {
  test("sum of 2 + 3 is 5", () => {
    expect(sum(2, 3)).toBe(5);
  });

  const testValues = [
    [1, 1, 2],
    [2, 3, 5],
    [-2, -4, -6],
    [2, -4, -2],
    [-2, 4, 2],
    [0, 0, 0],
    [0, 3, 3],
    [3, 0, 3],
    [-3, 0, -3],
    [0, -3, -3],
    [123, 200, 323],
    [500, 500, 1000],
    [-500, -500, -1000],
    [500, -500, 0],
    [-500, 500, 0],
  ];

  test.each(testValues)("sum(%s,%s) = %s", (a, b, result) => {
    expect(sum(a, b)).toBe(result);
  });
});

describe("Testing sum with floats", () => {
  const testValues = [
    [10, 11.5, 21.5],
    [2.5, 3, 5.5],
    [-2.5, 3, 0.5],
    [2.4, -2.5, -0.1],
    [499.9, 500.0, 999.9],
    [-499.9, 500.0, 0.1],
  ];

  test.each(testValues)("sum(%s,%s)=%s", (a, b, result) => {
    expect(sum(a, b)).toBeCloseTo(result);
  });
});

describe("Test cases for parameter missing", () => {
  test("sum() throws an exception", () => {
    expect(() => sum()).toThrow("parameter missing");
  });

  test("sum(1) throws an exception", () => {
    expect(() => sum(1)).toThrow("parameter missing");
  });

  test("sum('a') throws an exception", () => {
    expect(() => sum("a")).toThrow("parameter missing");
  });
});

describe("Testing parameters not numbers", () => {
  const testValues: [string, any, any][] = [
    ["both numbers as strings", "1", "2"],
    ["string and number", "a", 1],
    ["two letters", "a", "b"],
  ];

  test.each(testValues)("%s throws only numbers allowed", (label, a, b) => {
    expect(() => sum(a, b)).toThrow("only numbers allowed");
  });
});

describe("Testing numbers not between -500 and 500", () => {
  const testValues = [
    [1000, 500],
    [500, 1000],
    [500, 501],
    [-500.1, 200],
    [300, -500.1],
  ];

  test.each(testValues)("sum(%s, %s) throws an exception", (a, b) => {
    expect(() => sum(a, b)).toThrow("numbers not between -500 and 500");
  });
});

test("sum of 2 + 3 is 5"),
  () => {
    expect(sum(2, 3)).toBe(5);
  };

test("sum() throw parameter missing", () => {
  expect(() => sum()).toThrow("parameter missing");
});
