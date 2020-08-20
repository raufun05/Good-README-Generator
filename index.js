var inquirer = require("inquirer");
const fs = require('fs');
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "location",
      message: "What is your location?"
    },
    {
      type: "input",
      name: "linkedin",
      message: "What is your LinkedIn URL?"
    }
  ]).then(function(data) {
    console.log(data);
    const boilerHTML =
      `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
          <ul>
            <li>${data.name}</li>
            <li>${data.location}</li>
            <li>${data.linkedin}</li>
          </ul>
      </body>
      </html>`
    fs.writeFile("index.html", boilerHTML, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
  });
});
// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
