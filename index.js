const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

const generateMarkdown = (questions) =>
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
    
    ${questions.installation}

    ## Usage
    
    ${questions.projUse}

    ## Contributing
    
    ${questions.contributing}

    ## Tests
    
    ${questions.tests}

    ## License
    
    This project is licensed with ${questions.license}.
    ${getLicenseBadge(questions.license)}

    ## Questions
    If there are any additional question please contact: ${questions.email} 
    Or visit the github repository at: https://github.com/${questions.gitUser}`;

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
  },
];

// function to get license badges
//https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

function getLicenseBadge(license) {
  if (license === "Apache License 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "Creative Commons") {
    return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
  } else if (license === "GNU GPL v3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "ISC License") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  } else if (license === "MIT License") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Mozilla Public License 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "WTFPL License") {
    return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
  } else if (license === "No License") {
    return;
  }
}

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
