// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != "None") {
    return `## License
    This project is licensed with ${license}.
    `;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != "None") {
    return `## License Link
    
    `; //format it to return the actual link of the license in the readme
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection() {
  //   return `## License
  //  ${license}
  //  `;
  renderLicenseBadge(license);
  renderLicenseLink(license);
  //creating my markdown with template strings
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
1. [Tests](#Tests) 
2. [Contribution](#Contribution) 


  ## Tests
  ${data.test}

  ## Contribution
  ${data.contribution}


  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
