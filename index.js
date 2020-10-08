const { writeFile, copyFile } = require("./src/generate-page.js");

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
      name: "link",
      message:
        "Please enter your office number for manager, School for Intern, or Github username for Engineer.",
      validate: (infoInput) => {
        if (infoInput) {
          return true;
        } else {
          console.log("Please answer the question above.");
          return false;
        }
      },
    },
  ]);
};
employeePrompt().then((answers) => {
  console.log(answers);

  var template = createSite(answers);
  writeToFile("./dist/index.html", template);
});

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    return console.log("success");
  });
}
