const Employee = require("../lib/employee");

test("Insantiate Employee", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("set name with constructor arguments", () => {
    const name = "Sharon";
    const e = new Employee(name);
    expect (e.name).toBe(name);
});

test("set id with constructor arguments", () => {
    const testValue = 500;
    const e = new Employee("Test", testValue);
    expect (e.id).toBe(testValue);
});

test("set email with constructor arguments", () => {
    const testValue = "test@test.com";
    const e = new Employee("Test", 1, testValue);
    expect (e.email).toBe(testValue);
});

test("can get name with getName()", () => {
    const testValue = "Sharon";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
  });
  
  test("can get id with getId()", () => {
    const testValue = 100;
    const e = new Employee("Test", testValue);
    expect(e.getId()).toBe(testValue);
  });
  
  test("can get email with getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Test", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
  });
  
  test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Sharon", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
  });
  