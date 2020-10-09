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
  ]);
};

const internPrompt = (answers) => {
  if (!answers.intern) {
    answers.intern = [];
  }
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
        name: "office",
        message: "What is your intern's school?",
      },
    ])
    .then((officeAnswers) => {
      answers.intern.push(officeAnswers);
      return promptChoice(answers);
    });
};

const engineerPrompt = (answers) => {
  if (!answers.engineer) {
    answers.engineer = [];
  }
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
      answers.engineer.push(officeAnswers);
      return promptChoice(answers);
    });
};

const promptChoice = (answers) => {
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
      if (choice.team.includes("Engineer")) {
        console.log("Engineer");
        return engineerPrompt(answers);
      } else if (choice.team.includes("Intern")) {
        console.log("Intern");
        return internPrompt(answers);
      } else if (choice.team.includes("Complete Team")) {
        return writeFile(answers);
      }
    });
};

managerPrompt().then((answers) => {
  console.log(answers.team);
  promptChoice(answers);
});

// function writeFile(fileName, data) {
//   fs.writeFile(fileName, data, function (err) {
//     if (err) {
//       return console.log(err);
//     }
//     return console.log("success");
//   });
// }
