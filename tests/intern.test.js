const Intern = require("../lib/intern");

test("set school with constructor", () => {
  const testValue = "NYU";
  const e = new Intern("Test", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Test", 1, "test@test.com", "NYU");
  expect(e.getRole()).toBe(testValue);
});

test("get school with getSchool()", () => {
  const testValue = "NYU";
  const e = new Intern("Test", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});