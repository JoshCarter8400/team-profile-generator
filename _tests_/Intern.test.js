const { TestScheduler } = require("jest");
const Intern = require("../lib/Intern.js");

const intern = new Intern("Sarah", 4, "honey84");

test("creates an Intern", () => {
  expect(intern.getRole()).toEqual(expect.any(String));
});

test("gets name of Intern", () => {
  expect(intern.getName()).toEqual("Sarah");
});

test("check to see if ID is equal to 2", () => {
  expect(intern.getId()).toEqual(4);
});

test("check to see if all input is valid", () => {
  expect(intern.getId()).toEqual(4);
  expect(intern.getName()).toEqual("Sarah");
  expect(intern.getEmail()).toEqual("honey84");
});
