var inquirer = require('inquirer');
var fs = require("fs");

var generateMarkdown = require("./utils/generateMarkdown")

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
    },
    {
        type: "list",
        name: "license",
        message: "Choose the license type",
        choices: [
            "MIT",
            "Apache_2.0",
            "MPL_2.0"
        ]
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
   
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!

    console.log(answers);


    const template = generateMarkdown(answers)


    fs.writeFile("./README.md", template, function() {
        console.log("README has been generated!")
    })



  })