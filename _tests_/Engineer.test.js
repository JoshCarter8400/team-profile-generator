const { TestScheduler } = require("jest");
const Engineer = require("../lib/Engineer.js");

const engineer = new Engineer("Josh", 2, "jc84");

test("creates an engineer", () => {
  expect(engineer.getRole()).toEqual(expect.any(String));
});

test("gets name of engineer", () => {
  expect(engineer.getName()).toEqual("Josh");
});

test("check to see if ID is equal to 2", () => {
  expect(engineer.getId()).toEqual(2);
});

test("check to see if all input is valid", () => {
  expect(engineer.getId()).toEqual(2);
  expect(engineer.getName()).toEqual("Josh");
  expect(engineer.getEmail()).toEqual("jc84");
});
