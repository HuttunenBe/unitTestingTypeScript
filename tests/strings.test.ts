"use strict";

import { reverseString, isPalindrome } from "../src/strings";
import { countVowels } from "../src/strings";

test("reverse a string", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("TypeScript")).toBe("tpircSepyT");
  expect(reverseString("")).toBe("");
});

test("check if string is palindrome", () => {
  expect(isPalindrome("Racecar")).toBe(true);
  expect(isPalindrome("Hello")).toBe(false);
  expect(isPalindrome("hello")).not.toBe(true);
  expect(isPalindrome("Racecar")).not.toBe(false);
});

// Tests without function file

test("string test", () => {
  console.log("string test");
});

describe("count vowels", () => {
  test("empty string", () => {
    expect(countVowels("")).toBe(0);
  });

  test("zero vowels", () => {
    expect(countVowels("bcdfg")).toBe(0);
  });

  test("vowels lowercase", () => {
    expect(countVowels("aeiou")).toBe(5);
  });

  test("vowels uppercase", () => {
    expect(countVowels("AEIOU")).toBe(5);
  });

  test("mixed letters", () => {
    expect(countVowels("Hello World")).toBe(3);
  });

  test("numbers and symbols", () => {
    expect(countVowels("H3ll0 W@rld")).toBe(1);
  });
});
