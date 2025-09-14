describe("tests", () => {
  describe("test concat function", () => {
    const concat = (a, b) => "" + a + b;

    test("concatenate two strings", () => {
      expect(concat("first", "second")).toBe("firstsecond");
    });

    test("concatenate numbers as string", () => {
      expect(concat(1, 2)).toBe("12");
    });

    test("concatenate string and number", () => {
      expect(concat("foo", 42)).toBe("foo42");
    });

    test("concatenates 'first' and 'secondx' to 'firstsecondx'", () => {
      expect(concat("first", "secondx")).toBe("firstsecondx");
    });

    test('testing if concat(1,2) returns "12"', () => {
      expect(concat(1, 2)).toBe("12");
    });
  });

  function testFunction() {
    throw Error("this is and exception"); // keep as-is
  }

  test("should throw an error with the correct message", () => {
    expect(() => testFunction()).toThrow("this is and exception"); // match exactly
  });
});