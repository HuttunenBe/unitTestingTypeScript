import {
  mergedArray,
  joinStrings,
  sumArrays,
  concatAndUppercase,
} from "../src/arrays";

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

describe("sumArrays", () => {
  test("arrays empty", () => {
    expect(sumArrays([], [])).toBe(0);
  });

  test("first empty, second not empty", () => {
    expect(sumArrays([], [1, 2, 3])).toBe(6);
  });

  test("first not empty, second empty", () => {
    expect(sumArrays([4, 5], [])).toBe(9);
  });

  test("both arrays not empty", () => {
    expect(sumArrays([1, 2], [3, 4])).toBe(10);
  });
});

describe("concatAndUppercase", () => {
  test("arrays empty", () => {
    expect(concatAndUppercase([], [])).toEqual([]);
  });

  test("first empty, second not empty", () => {
    expect(concatAndUppercase([], ["a", "b"])).toEqual(["A", "B"]);
  });

  test("first not empty, second empty", () => {
    expect(concatAndUppercase(["c", "d"], [])).toEqual(["C", "D"]);
  });

  test("both arrays not empty", () => {
    expect(concatAndUppercase(["hello"], ["world"])).toEqual([
      "HELLO",
      "WORLD",
    ]);
  });
});
