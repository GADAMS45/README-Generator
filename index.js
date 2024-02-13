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
            type: "input",
            name: "installation",
            message: "How do you install your project?"
        },
        {
            type: "input",
            name: "usage",
            message: "How do you use your project?"
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
            name: "contributions",
            message: "Who contributed to your project?"
        },
        {
            type: "input",
            name: "tests",
            message: "How do you test your project?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your github username?"
        },

        {
            type: "input",
            name: "email",
            message: "What is your Email address?"
        },

    ])
    .then((answers) => {
        // Use user feedback for... whatever!!

        console.log(answers);


        const template = generateMarkdown(answers)


        fs.writeFile("./README.md", template, function () {
            console.log("README has been generated!")
        })



    })