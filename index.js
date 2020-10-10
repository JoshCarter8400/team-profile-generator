const fs = require("fs");

const path = require("path");

const outputDir = path.resolve(__dirname, "output");

const outPutPath = path.join(outputDir, "index.html");

const createSite = require("./src/page-template.js");

const Manager = require("./lib/Manager.js");

const Intern = require("./lib/Intern.js");

const Engineer = require("./lib/Engineer.js");

const inquirer = require("inquirer");

const teamArr = [],
  idArray = [];

const managerPrompt = () => {
  return inquirer
    .prompt([
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
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.ID,
        answers.email,
        answers.office
      );
      teamArr.push(manager);
      idArray.push(answers.ID);
      promptChoice();
    });
};

const internPrompt = () => {
  return inquirer
    .prompt([
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
        name: "school",
        message: "What is your intern's school?",
      },
    ])
    .then((officeAnswers) => {
      const intern = new Intern(
        officeAnswers.name,
        officeAnswers.ID,
        officeAnswers.email,
        officeAnswers.school
      );
      teamArr.push(intern);
      promptChoice();
    });
};

const engineerPrompt = () => {
  return inquirer
    .prompt([
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
    ])
    .then((officeAnswers) => {
      const engineer = new Engineer(
        officeAnswers.name,
        officeAnswers.ID,
        officeAnswers.email,
        officeAnswers.github
      );
      teamArr.push(engineer);
      promptChoice();
    });
};

const promptChoice = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "team",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "Complete Team"],
      },
    ])
    .then((choice) => {
      if (choice.team === "Engineer") {
        console.log("Engineer");
        return engineerPrompt();
      } else if (choice.team === "Intern") {
        console.log("Intern");
        return internPrompt();
      } else if (choice.team === "Complete Team") {
        return makeSite();
      }
    });
};
const makeSite = () => {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }
  fs.writeFileSync(outPutPath, createSite(teamArr), "utf-8");
};
managerPrompt();

// function writeFile(fileName, data) {
//   fs.writeFile(fileName, data, function (err) {
//     if (err) {
//       return console.log(err);
//     }
//     return console.log("success");
//   });
// }
