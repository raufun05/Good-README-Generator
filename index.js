const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');
const util= require('util');
const { clear } = require("console");

const writeFileAsync= util.promisify(fs.writeFile);
const promptUser = () => {
return inquirer
  .prompt([
    {
      type: "input",
      name: "badge",
      message: "input badge code?"
    },
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
      default: "Generate a good README.md file "
    },
    {
      type: "input",
      name: "description",
      message: "Please provide your project description"
    },
    {
      type: "input",
      name: "installation",
      message: "What are the installation instructions?"
    },
    {
      type: "input",
      name: "usage",
      message: "Please describe usage"
    },
    {
      type: "checkbox",
      name: "license",
      message: "Choose a License",
      choices: [
        "MIT License",
        "Apache License",
        "GPL License",
        "ISC Licence"]
    },
    {
      type: "input",
      name: "contributing",
      message: "What are the rules for contributing?"
    },
    {
      type: "input",
      name: "author",
      message: "Who is the author?"
    },
    {
      type: "input",
      name: "tests",
      message: "Provide examples on how to run tests"
    },
    // {
    //   type: "input",
    //   name: "question1",
    //   message: "Enter the url of your profile picture"
    // },
    // // format: ![alt text] (url)
    // {
    //   type: "input",
    //   name: "question2",
    //   message: "Enter the email address"
    // },
    // {
    //   type: "input",
    //   name: "question3",
    //   message: "Enter the url of your github repository"
    // },
    {
      type: "input",
      name: "table",
      message: "write a table of contents separated by comas"
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