// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.title}
![badge](https://img.shields.io/badge/LICENSE-${answers.license}-blue)

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)

## Installation
ijnibuytfytcvubhn

## Usage
iubioubnboinbo

## License
${answers.license}

## Contributing
dojnoeno

## Tests
wpomwepomwer

## Questions
- Github username: ${answers.github}
- Email address: 
      `;
}

module.exports = generateMarkdown;
