// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const licenseLinks = [
  [
    "MIT",

    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  ],
  [
    "GPLv2",

    "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
  ],
  [
    "Apache 2.0",
    "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  ],
  [
    "MPL 2.0",
    "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  ],
];
// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  for (const [key, value] of licenseLinks) {
    console.log(`${key} and ${value}`);

    if (license === key) {
      return `${value}
     `;
    }
  }
  return "";
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "None") {
    return `## License
    This project is licensed with ${license}.
   `;
  }

  return "";

  //creating my markdown with template strings
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  

  ## Table of Contents
1. [License](#license)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Tests](#tests)
5. [Contributing](#contributing)
6. [Questions](#questions)

  
 

  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## Tests 
  ${data.test}

  ## Contributing 
  ${data.contributing}

  ## Questions 
  Questions?\n 
  You may reach me by email at: <${data.email}>\n
  You may also reach me on github: <https://github.com/${data.github}>
   

`;
}

module.exports = generateMarkdown;
