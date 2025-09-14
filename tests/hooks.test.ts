beforeAll(() => {
  console.log("run before all tests");
});

afterAll(() => {
  console.log("run after all");
});

beforeEach(() => {
  console.log("run before each test");
});

afterEach(() => {
  console.log("run after each");
});

test('test placeholder', () => {
  expect(true).toBe(true);
});