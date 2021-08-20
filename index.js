// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project's name?",
    name: "title",
  },
  {
    type: "input",
    message: "Give a brief description of your project",
    name: "description",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license does your project use?",
    choices: ["MIT", "GPLv2", "Apache 2.0", "MPL 2.0"],
  },
  {
    type: "input",
    name: "installation",
    message: "What commands should be run for dependencies?",
    default: "npm i",
  },
  {
    type: "input",
    name: "test",
    message: "What commands should be run for tests?",
    default: "npm run test",
  },
  {
    type: "input",
    name: "contributing",
    message: "How does a user contribute to this project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How will this project be used?",
  },
];
//inquirer will return a promise object
// inquirer.prompt(questions).then((data) => {
//   console.log(data);
// });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  var markdown = generateMarkdown(data);
  fs.writeFile(fileName, markdown, (err) => {
    err ? console.log(err) : console.log("File was written!");
  });
}

// TODO: Create a function to initialize app
function init() {
  //present user with questions
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", data); //gives fileName value
  });
}

// Function call to initialize app
init();
