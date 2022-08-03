// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

function renderLicenseBadge(license) {
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
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache License 2.0") {
    return `[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "Creative Commons") {
    return `[Creative Commons License](http://creativecommons.org/publicdomain/zero/1.0/)`;
  } else if (license === "GNU GPL v3") {
    return `[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "ISC License") {
    return `[ISC License](https://opensource.org/licenses/ISC)`;
  } else if (license === "MIT License") {
    return `[MIT License](https://opensource.org/licenses/MIT)`;
  } else if (license === "Mozilla Public License 2.0") {
    return `[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "WTFPL License") {
    return `[WTFPL License](http://www.wtfpl.net/about/)`;
  } else if (license === "No License") {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  This project is licensed with ${renderLicenseLink(license)}.

  ${renderLicenseBadge(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(questions) {
  return `# ${questions.projTitle}

  ## Description

  ${questions.description}

  ## Table of Contents
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
  
  ${renderLicenseSection(questions.license)}

  ## Questions
  If there are any additional question please contact: [${
    questions.email
  }](mailto:${questions.email})

  Or visit the github repository at: https://github.com/${questions.gitUser}`;
}

module.exports = generateMarkdown;
