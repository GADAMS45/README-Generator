var inquirer = require('inquirer');
var fs = require("fs");

inquirer
  .prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of the project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of the project?"
    }
   
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!

    console.log(answers);


    const template = `
# ${answers.title}

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
oinoviernroeivn

## Contributing
dojnoeno

## Tests
wpomwepomwer

## Questions
poimjpwoim
    `


    fs.writeFile("./README.md", template, function() {
        console.log("README has been generated!")
    })



  })