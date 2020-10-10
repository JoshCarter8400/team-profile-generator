const { TestScheduler } = require("jest");

const Employee = require("../lib/Employee.js");

const employee = new Employee("lumberyard", 3, "eastside");

test("creates an Employee", () => {
  expect(employee.getRole()).toEqual(expect.any(String));
});

test("gets name of Employee", () => {
  expect(employee.getName()).toEqual("lumberyard");
});

test("check to see if ID is equal to 3", () => {
  expect(employee.getId()).toEqual(3);
});

test("check to see if all input is valid", () => {
  expect(employee.getId()).toEqual(3);
  expect(employee.getName()).toEqual("lumberyard");
  expect(employee.getEmail()).toEqual("eastside");
});
