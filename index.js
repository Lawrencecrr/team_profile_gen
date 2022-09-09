const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./classes/Employee.js')
const Engineer = require('./classes/Engineer.js')
const Intern = require('./classes/Intern.js')
const Manager = require('./classes/Manager.js')
const employeeArray = []

pickYourTeam();
function pickYourTeam() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Pick your team.',
        name: 'team',
        choices: ['Manager', 'Engineer', 'Intern', 'I am done']
      }
    ])
    .then((data) => {
      console.log(data)

      if (`${data.team}` === 'Manager') {
        managerTemplate();
      } else if (`${data.team}` === 'Engineer') {
        engineerTemplate();
      } else if (`${data.team}` === 'Intern') {
        internTemplate();
      } else {
        buildYourTeam();
      }
    })
};

// Manager Template
function managerTemplate() {
        inquirer
            .prompt([
        {
            type: 'input',
            message: "Enter Manager Name",
            name: "managerName"
        },
        {
            type: 'input',
            message: "Enter Manger Id",
            name: "mangerID"

        },
        {
            type: 'input',
            message: "Enter Manager email",
            name: "managerEmail"
        },
        {
            type: 'input',
            message: "Enter Manager Office Number",
            name: "managerOfiiceNumber"
        },
    ]) .then((mgrData) => {
        console.log(mgrData)
        // const {managerName, managerID, managerEmail, managerOfficNumber} = manager
        const manager = new Manager(mgrData.managerName, mgrData.managerID, mgrData.managerEmail, mgrData.managerOfficNumber)
        employeeArray.push(manager)
        console.log(employeeArray)
        pickYourTeam()
    })
}

// Engineer Template
function engineerTemplate() {
    inquirer
      .prompt([
        {
          type: 'input',
          message: 'What is engineers name?',
          name: 'engineerName'
        },
        {
          type: 'input',
          message: 'What is engineers id?',
          name: 'engineerId'
        },
        {
          type: 'input',
          message: 'What is engineers email?',
          name: 'engineerEmail'
        },
        {
          type: 'input',
          message: 'What is engineers GitHub username?',
          name: 'engineerGithub'
        },
      ])
  
      .then((data) => {
        console.log(data)
  // Creating new subclass NewEngineer
  const newEngineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub)
  employeeArray.push(newEngineer)
  console.log(employeeArray)
  // Return to team picker 
        return pickYourTeam();
      })
  };

  // Intern template function
function internTemplate() {
    inquirer
      .prompt([
        {
          type: 'input',
          message: 'What is interns name?',
          name: 'internName'
        },
        {
          type: 'input',
          message: 'What is interns id?',
          name: 'internId'
        },
        {
          type: 'input',
          message: 'What is interns email?',
          name: 'internEmail'
        },
        {
          type: 'input',
          message: 'What is interns school?',
          name: 'internSchool'
        },
      ])
  
      .then((data) => {
        console.log(data)
  // Creating new subclass NewIntern
  const newIntern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool)
  employeeArray.push(newIntern)
  console.log(employeeArray)
  // Return to team picker 
        return pickYourTeam();
      })
  }

  function buildYourTeam() {
   
      var htmlTemplate = ""
    // loop through entire array 
      for (var i = 0; i < employeeArray.length; i++) {
    
        htmlTemplate += `
        <div class="col-12 col-md-4 col-lg-4 " style = "margin-top: 10px;">
                <div class="card" style="width: 18rem;">
                    <div class="card-header">
                      <h3>Name: ${employeeArray[i].name}</h3>
                      <h4>Role: ${employeeArray[i].getRole()}</h4>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">ID: ${employeeArray[i].id}</li>
                      <li class="list-group-item">Email: <a href = "mailto: ${employeeArray[i].email}">${employeeArray[i].email}</a></li>
                      `
    
        if (employeeArray[i].getRole() === "Manager") {
          htmlTemplate += `<li class="list-group-item">OfficeNumber: ${employeeArray[i].getOfficeNumber()}</li>`
    
        } else if (employeeArray[i].getRole() === "Engineer") {
          htmlTemplate += `<li class="list-group-item">GitHub: <a href="https://github.com/${employeeArray[i].getGithub()}" target="_blank">${employeeArray[i].getGithub()}</a>
          </li>`
    
        } else {
          htmlTemplate += `<li class="list-group-item">School: ${employeeArray[i].getSchool()}</li>`
         }
        htmlTemplate += `</ul>
        </div>
    </div> `}
    // general HTML frame 
        var html = `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
            <link rel="stylesheet" href="./assets/css/style.css" />
            <title>My Team</title>
          </head>
        
          <body>
            <nav class="navbar navbar-light bg-info">
              <span class="navbar-brand mb-0 h1"><h1 style="margin-left:530px;">My Team</h1></span>
            </nav>
            <section class="container-fluid">
              <div class="row" style= "margin-left:5%;">
              ${htmlTemplate}
              </div>
            </section>
        
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script type="text/javascript" src="./assets/js/script.js"></script>
          </body>
        </html>`
    // Creating HTML file with fs module
        fs.writeFile('./dist/index.html', html, (err) =>
        err ? console.log(err) : console.log("Success!")
        )
    };
    