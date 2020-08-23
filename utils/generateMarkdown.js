// function to generate markdown for README
function generateMarkdown(data) {
  return `# Project Title 
  ${data.title}

## Project Description 
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#GitHub)
* [License](#license)
* [Badges](#badges)
* [Email](#email)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Test
${data.tests}


## Badges
![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")


## License:
Please click the link below for license-
- [License](https://opensource.org/Licenses/${data.license})

## Email
${data.email}

## Profile Picture
Please click the link below-
- [Profile Picture](https://drive.google.com/file/d/1NpqgzksgSEZZMUt_JVysgiVHqTJRNVYL/view?usp=sharing/${data.question1})

## GitHub
Please click the link for github repository-
${data.question2}

`;
}

module.exports = generateMarkdown;
