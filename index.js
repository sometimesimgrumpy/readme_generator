const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = (data) =>
  `#${questions.projTitle}

    ## Description

    ##Table of Contents
     - [Installation Instructions](#installation)
     - [Usage](#usage)
     - [Contributing](#contributing)
     - [Tests](#tests)
     - [License](#license)
     - [Questions](#questions)

    ## Installation
    My project can be installed using the following terminal prompt:
    >${questions.installation}

    ## Usage
    >${questions.projUse}

    ## Contributing
    >${questions.contributing}

    ## Tests
    >${questions.tests}

    ## License
    >${questions.license}

    ## Questions
    If there are any additional question please contact: ${questions.email} 
    Or visit the github repository at: https://github.com/${questions.gitUser}

    `;

inquirer.prompt(questions).then(function (data) {
  console.log(data);
  writeToFile("README.md", data);
});
// .catch((error) => {
//   if (error.isTtyError) {
//     // Prompt couldn't be rendered in the current environment
//   } else {
//     // Something else went wrong
//   }
//});

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of my project?",
    name: "projTitle",
  },
  {
    type: "input",
    message: "Please describe the project:",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions for the project?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is the primary use for your project?",
    name: "projUse",
  },
  {
    type: "input",
    message: "Who is contributing to the project?",
    name: "contributing",
  },
  {
    type: "input",
    message: "What tests are included with the project?",
    name: "tests",
  },
  {
    type: "list",
    message: "What license will be included on the project?",
    name: "license",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "gitUser",
  },
  {
    type: "input",
    message: "What is your contact email?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("README.md", generateMarkdown(answers), (error, data) =>
    error ? console.error(err) : console.log("Success!")
  );
}

// Function call to initialize app
init();
