import { mergedArray } from "../src/arrays";
import { joinStrings } from "../src/arrays";

describe("mergeArrays", () => {
  // grouping related tests together
  test("arrays empty", () => {
    expect(mergedArray([], [])).toEqual([]);
  });

  test("first array empty, second not empty", () => {
    expect(mergedArray([], [1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("first array not empty, second empty", () => {
    expect(mergedArray([4, 5], [])).toEqual([4, 5]);
  });

  test("both arrays not empty", () => {
    expect(mergedArray([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });
});

describe("joinStrings", () => {
  test("arrays empty", () => {
    expect(joinStrings([], [])).toEqual([]);
  });

  test("first array empty, second not empty", () => {
    expect(joinStrings([], ["a", "b"])).toEqual(["a", "b"]);
  });

  test("first array not empty, second empty", () => {
    expect(joinStrings(["c", "d"], [])).toEqual(["c", "d"]);
  });

  test("both arrays not empty", () => {
    expect(joinStrings(["hello"], ["tests"])).toEqual(["hello", "tests"]);
  });
});
