const fs = require("fs");

const writeFile = (answers) => {
  console.log(answers);
  const template = `
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Builder</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/js/bootstrap.min.js">
    <link rel="stylesheet" href="../dist/style.css">

</head>

<body>
${answers.name}
</body>

</html>
  `;
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", template, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File Created!",
      });
    });
  });
};

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile("./style.css", "./dist/style.css", (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File Copied!",
      });
    });
  });
};

module.exports = { writeFile, copyFile };
