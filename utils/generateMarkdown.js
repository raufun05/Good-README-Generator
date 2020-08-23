// function to generate markdown for README
function generateMarkdown(data) {
  return `# Project Title : ${data.title}

## Project Description: ${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)
* [License](#license)
* [Author] (#Author)
* [Badges](#badges)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributors
${data.contributing}

## Test
${data.tests}

## Questions
If you have any questions, contact ${data.username} on GitHub.

## Description:
![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")


## License:
click the link below
- [License](https://opensource.org/Licenses/${data.license})

## Author 
![GitHub profile pic](${data.image})

## Badges

![badmath](https://img.shields.io/github/repo-size/${data.username}/${data.repo})

`;
}

module.exports = generateMarkdown;
