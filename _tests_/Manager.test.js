const Manager = require("../lib/Manager.js");

const manager = new Manager("Tom", 2000, "bippus");

test("creates a Manager", () => {
  expect(manager.getRole()).toEqual(expect.any(String));
});

test("gets name of Manager", () => {
  expect(manager.getName()).toEqual("Tom");
});

test("check to see if ID is equal to 2", () => {
  expect(manager.getId()).toEqual(2000);
});

test("check to see if all input is valid", () => {
  expect(manager.getId()).toEqual(2000);
  expect(manager.getName()).toEqual("Tom");
  expect(manager.getEmail()).toEqual("bippus");
});
