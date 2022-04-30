// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const generateMarkdown = (data) =>
  `#${questions.projTitle}

    ## Description

    ##Table of Contents
     - [Installation Insturctions](#installation)
     - [Usage](#usage)
     - [Contributing](#contributing)
     - [Tests](#tests)
     - [License](#license)
     - [Questions](#questions)

    ## Installation
    My project can be installed using the following terminal prompt:
    >${questions.installation}

    ## Usage

    ## Contributing

    ## Tests

    ## License

    ## Questions

    `;

// TODO: Create an array of questions for user input
inquirer
  .prompt(questions)
  .then((answers) => {})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

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

const fs = require("fs");

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("README.md", generateMarkdown(answers), (error, data) =>
    error ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
