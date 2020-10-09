const { writeFile } = require("./src/page-template.js");

const createSite = require("./src/page-template.js");

const inquirer = require("inquirer");

const employeePrompt = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "ID",
      message: "Please enter your ID number",
      validate: (infoInput) => {
        if (infoInput) {
          return true;
        } else {
          console.log("Please Enter your ID number:");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email address.",
      validate: (infoInput) => {
        if (infoInput) {
          return true;
        } else {
          console.log("Please enter your email address");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "office",
      message: "If you're a manager please enter your office number.",
    },
    {
      type: "input",
      name: "github",
      message: "If you're an engineer please enter your GitHub username.",
    },
    {
      type: "input",
      name: "school",
      message: "If you're an intern please enter your school.",
    },
  ]);
};

employeePrompt().then((answers) => {
  console.log(answers);

  var template = createSite;
  writeFile("./dist/index.html", template);
});

// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, function (err) {
//     if (err) {
//       return console.log(err);
//     }
//     return console.log("success");
//   });
// }
