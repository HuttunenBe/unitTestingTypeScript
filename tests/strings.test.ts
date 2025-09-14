import { reverseString, isPalindrome } from "../src/strings";

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
