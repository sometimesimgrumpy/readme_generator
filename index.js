const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

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
    choices: [
      "Apache License 2.0",
      "Creative Commons",
      "GNU GPL v3",
      "ISC License",
      "MIT License",
      "Mozilla Public License 2.0",
      "WTFPL License",
      "No License",
    ],
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
    default: () => {},
    // https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8
    validate: function (email) {
      valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      if (valid) {
        return true;
      } else {
        console.log(" is not a valid email. Please enture a valid email.");
        return false;
      }
    },
  },
];

// function to get license badges
//https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

// TODO: Create a function to write README file
function writeToFile(fileName, questions) {
  fs.writeFile(fileName, generateMarkdown(questions), (error) =>
    error ? console.error(error) : console.log("Success!")
  );
}

function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", data);
  });
}

// Function call to initialize app
init();
