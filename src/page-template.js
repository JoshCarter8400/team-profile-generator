const fs = require("fs");

const managerCard = () => {
  console.log(this);
  return `
  <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${getName()}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"></li>
    <li class="list-group-item"></li>
    <li class="list-group-item"></li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
  `;
};

const writeFile = (answers) => {
  console.log(answers);
  `
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Builder</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/js/bootstrap.min.js">
    <link rel="stylesheet" href="./dist/style.css">

</head>

<body>
<div class="jumbotron jumbotron-fluid">
  <div class="container bg-light justify-content-center">
    <h1 class="display-4">GO TEAM!!</h1>
  </div>
</div>
</body>

</html>
  `;
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", answers, (err) => {
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
