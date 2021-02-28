const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

test("set office number with constructor argument", () => {
  const testValue = 500;
  const e = new Manager("Test", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Test", 1, "test@test.com", 500);
  expect(e.getRole()).toBe(testValue);
});

test("get office number with getOffice()", () => {
  const testValue = 500;
  const e = new Manager("Test", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});