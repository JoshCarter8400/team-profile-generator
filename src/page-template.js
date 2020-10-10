const draftTeam = (teamArr) => {
  const managerCard = (manager) => {
    console.log(this);
    return `
   
  <div class="card" style="width: 18rem;">
    <div class="card-body bg-primary">
      <h5 class="card-title">${manager.getName()}</h5>
      <p class="card-text manager"><i class="fas fa-briefcase"></i> Manager</p>
    </div>
    <div class="list-container bg-secondary p-4">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
      <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
    </ul>
    </div>
  </div>
 `;
  };

  const engineerCard = (engineer) => {
    console.log(this);
    return `
   
  <div class="card" style="width: 18rem;">
    <div class="card-body bg-primary">
      <h5 class="card-title">${engineer.getName()}</h5>
      <p class="card-text engineer"><i class="fas fa-tools"></i> Engineer</p>
    </div>
    <div class="list-container bg-secondary p-4">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
      <li class="list-group-item">GitHub: <a href="${engineer.getGithub()}">${engineer.getGithub()}</a></li>
    </ul>
    </div>
  </div>
 `;
  };

  const internCard = (intern) => {
    console.log(this);
    return `
   
  <div class="card" style="width: 18rem;">
    <div class="card-body bg-primary">
      <h5 class="card-title">${intern.getName()}</h5>
      <p class="card-text intern"><i class="fas fa-coffee"></i> Intern</p>
    </div>
    <div class="list-container bg-secondary p-4">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
      <li class="list-group-item">Office Number: ${intern.getSchool()}</li>
    </ul>
    </div>
  </div>
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

  html.push(
    teamArr
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => internCard(intern))
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
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
    <link rel="stylesheet" href="./dist/style.css">

</head>

<body>
<div class="jumbotron bg-primary jumbotron-fluid">
  <div class="container text-center">
    <h1 class="display-4">GO TEAM!!</h1>
  </div>
</div>

<main>
 <div class="d-flex justify-content-around">
  ${draftTeam(teamArr)}
 </div>
</main>


</body>

</html>
  `;
};
