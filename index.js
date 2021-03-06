const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');
const util= require('util');

const writeFileAsync= util.promisify(fs.writeFile);
const promptUser = () => {
return inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
      default: "Generate a good README.md file"
    },
    {
      type: "input",
      name: "description",
      message: "Please provide your project description-"
    },
    {
      type: "input",
      name: "installation",
      message: "What are the installation instructions?"
    },
    {
      type: "input",
      name: "usage",
      message: "Please describe usage-"
    },
    {
      type: "list",
      name: "license",
      message: "Please select a License-",
      choices: [
        "MIT",
        "Apache",
        "GPL",
        "ISC"]
    },
    {
      type: "input",
      name: "contributing",
      message: "What are the rules for contributing?"
    },
    {
      type: "input",
      name: "email",
      message: "Enter the email address-"
    },
    {
      type: "input",
      name: "tests",
      message: "Provide examples on how to run tests-"
    },
    {
      type: "input",
      name: "badge",
      message: "Input badge code please?"
    },
    {
      type: "input",
      name: "question1",
      message: "Enter the url of your profile picture-"
    },
    {
      type: "input",
      name: "question2",
      message: "Enter the url of your github repository-"
    }
  ]);
};
const init = async() => {
  try {
    const data= await promptUser();
    await writeFileAsync("README.md", generateMarkdown(data));
  }catch(error){
console.log(error)
  }
};
init();