const { writeFile } = require("./src/page-template.js");

const createSite = require("./src/page-template.js");

const inquirer = require("inquirer");

const managerPrompt = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the team manager's name?",
    },
    {
      type: "input",
      name: "ID",
      message: "What is the team manager's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the team manager's email?",
    },
    {
      type: "input",
      name: "office",
      message: "What is the team manager's office number?",
    },
    {
      type: "checkbox",
      name: "team",
      message: "Which type of team member would you like to add?",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ]);
};

const internPrompt = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your intern's name?",
    },
    {
      type: "input",
      name: "ID",
      message: "What is your intern's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your intern's email?",
    },
    {
      type: "input",
      name: "office",
      message: "What is your intern's school?",
    },
    {
      type: "checkbox",
      name: "team",
      message: "Which type of team member would you like to add?",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ]);
};

const engineerPrompt = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your engineer's name?",
    },
    {
      type: "input",
      name: "ID",
      message: "What is your engineer's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your engineer's email?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your engineer's GitHub username?",
    },
    {
      type: "checkbox",
      name: "team",
      message: "Which type of team member would you like to add?",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ]);
};

// employeePrompt().then((answers) => {
//   console.log(answers);

//   var template = createSite;
//   writeFile("./dist/index.html", template);
// });

// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, function (err) {
//     if (err) {
//       return console.log(err);
//     }
//     return console.log("success");
//   });
// }
