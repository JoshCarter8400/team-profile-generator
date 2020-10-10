// const Index = require("/index.js");
const draftTeam = (teamArr) => {
  const managerCard = (manager) => {
    console.log(this);
    return `
   
      <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${manager.getName()}</h5>
      <p class="card-text manager">Manager</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}"</a></li>
      <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
    </ul>
 `;
  };

  const engineerCard = (engineer) => {
    console.log(this);
    return `
   
      <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${engineer.getName()}</h5>
      <p class="card-text manager">Manager</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}"</a></li>
      <li class="list-group-item">Office Number: ${engineer.getGithub()}</li>
    </ul>
 `;
  };

  const internCard = (intern) => {
    console.log(this);
    return `
 ${teamArr
   .filter(({ intern }) => intern)
   .map(({ name, id, email, school }) => {
     return `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text intern">Intern</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${id}</li>
    <li class="list-group-item"><a href="mailto:${email}"</a></li>
    <li class="list-group-item">School: ${school}</li>
  </ul>
</div>`;
   })
   .join("")}
  `;
  };

  const html = [];

  html.push(
    teamArr
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => managerCard(manager))
  );

  html.push(
    teamArr
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => engineerCard(engineer))
  );

  return html.join("");
};

module.exports = (teamArr) => {
  return `
  
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Builder</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="./dist/style.css">

</head>

<body>
<div class="jumbotron jumbotron-fluid">
  <div class="container bg-light justify-content-center">
    <h1 class="display-4">GO TEAM!!</h1>
  </div>
</div>

<main>
${draftTeam(teamArr)}
</main>


</body>

</html>
  `;
  // return new Promise((resolve, reject) => {
  //   fs.writeFile("./dist/index.html", answers, (err) => {
  //     if (err) {
  //       reject(err);
  //       return;
  //     }
  //     resolve({
  //       ok: true,
  //       message: "File Created!",
  //     });
  //   });
  // });
};

// const copyFile = () => {
//   return new Promise((resolve, reject) => {
//     fs.copyFile("./style.css", "./dist/style.css", (err) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve({
//         ok: true,
//         message: "File Copied!",
//       });
//     });
//   });
// };

// module.exports = { writeFile, copyFile };

// const managerCard = (manager) => {
//   console.log(this);
//   return `
// ${teamArr
//   .filter(({ manager }) => manager)
//   .map(({ name, id, email, office }) => {
//     return ` <div class="card" style="width: 18rem;">
//   <div class="card-body">
//     <h5 class="card-title">${manager.getName()}</h5>
//     <p class="card-text manager">Manager</p>
//   </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">ID: ${manager.getId()}</li>
//     <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}"</a></li>
//     <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
//   </ul>
//   `;
//   })
//   .join("")}
// `;
// };
