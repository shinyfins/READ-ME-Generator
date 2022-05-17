// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;

function generateMarkdown(data) {
  return `# ${data.name}

## Table of Content
-[Description](#description)

## Description:
${data.description}

## Install
${data.install}

## Usage 
${data.usage}

## Contribution 
${data.contribution}

## Instruct
${data.instruct}

## License
${data.license}

-Questions-

## Github
-Github: [${data.github}] (https://github.com/${data.github})

## Email
${data.email}

]`;
}

module.exports = generateMarkdown;
