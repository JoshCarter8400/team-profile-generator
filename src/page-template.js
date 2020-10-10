const fs = require("fs");

const Index = require("./index.js");

const managerCard = (manager) => {
  console.log(this);
  return `
  ${teamArr
    .filter(({ manager }) => manager)
    .map(({ name, id, email, office }) => {
      return ` <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text manager">Manger</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${id}</li>
      <li class="list-group-item"><a href="mailto:${email}"</a></li>
      <li class="list-group-item">${office}</li>
    </ul>
    `;
    })
    .join("")}
 `;
};

const engineerCard = (engineer) => {
  console.log(this);
  return `
 ${teamArr
   .filter(({ engineer }) => engineer)
   .map(({ name, id, email, github }) => {
     return `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text engineer">Engineer</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${id}</li>
    <li class="list-group-item"><a href="mailto:${email}"</a></li>
    <li class="list-group-item"><a href="${github}"</li>
  </ul>
</div>`;
   })
   .join("")}
  `;
};

const internCard = (intern) => {
  console.log(this);
  return `
 ${teamArr
   .filter(({ intern }) => intern)
   .map(({ name, id, email, office }) => {
     return `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text intern">Intern</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${id}</li>
    <li class="list-group-item"><a href="mailto:${email}"</a></li>
    <li class="list-group-item">${office}</li>
  </ul>
</div>`;
   })
   .join("")}
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

<main>
</main>
${managerCard(manager)}
${engineerCard(engineer)}
${internCard(intern)}
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

module.exports = { Index, writeFile, copyFile };
