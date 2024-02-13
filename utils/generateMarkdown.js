// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![badge](https://img.shields.io/badge/LICENSE-${license}-blue)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == "MIT") {
    return "https://opensource.org/license/mit/"
  } else if (license == "Apache_2.0") {
    return "https://opensource.org/license/apache-2-0/"
  } else if (license == "MPL_2.0") {
    return "https://opensource.org/license/mpl-2-0/"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
## License
- ${license}
- Link: ${renderLicenseLink(license)}   

  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.title}
${renderLicenseBadge(answers.license)}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Licesnse](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

${renderLicenseSection(answers.license)}

## Contributing
${answers.contributions}

## Tests
${answers.tests}

## Questions
- Github username: ${answers.github}
- Email address: ${answers.email}
      `;
}

module.exports = generateMarkdown;
