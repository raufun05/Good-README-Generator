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


## Badges
![License](https://img.shields.io/badge/License-${data.badge}-blue.svg "License Badge")


## License:
Please click the link below for license
- [License](https://opensource.org/Licenses/${data.license})

## Author 
![GitHub profile pic](${data.image})

## GitHub repository

![badmath](https://img.shields.io/github/repo-size/${data.username}/${data.repo})

`;
}

module.exports = generateMarkdown;
