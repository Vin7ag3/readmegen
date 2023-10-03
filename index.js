// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
// Github name
    {
        type: "input",
        name: "userName",
        message: "What is your Github username?",
    },
// title of proj.
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
// description of proj.
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project",
    },
// installation
    {
        type: "input",
        name: "installation",
        message: "Enter an explanation on how to install the software for this program.",
    },
// usage
    {
        type: "input",
        name: "usage",
        message: "Describe the usage for this program",
    },
// license
    {
        type: "list",
        name: "license",
        message: "Please select a license for this project.",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Apache 2.0",
            "MIT",
            "None",
        ],
    },
// contributions
    {
        type: "input",
        name: "contributing",
        message: "Contributions to your project."
    },
// testing
    {
        type: "input",
        name: "test",
        message: "Enter testing instructions provided for this project.",
    },
// email
    {
        type: "input",
        name: "userEmail",
        message: "What is your Github email address?"
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log("Error writing to file", err);
        } else {
            console.log("Readme file generated");
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const readmeContent = generateMarkdown(data);
        const fileReadme = "README.md";

        writeToFile(fileReadme, readmeContent);
    });
}


// Function call to initialize app
init();
