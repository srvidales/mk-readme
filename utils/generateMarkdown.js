const licenseData = require('./licenseData');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log('renderLicenseBadge')
  return licenseData.licenses[3].info[0].badges[0].badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log('renderLicenseLink')
  return licenseData.licenses[3].info[3].badges[0].text;
}

function renderLicenseTitle(license) {
  console.log('renderLicenseTitle')
  return `: ${licenseData.licenses[3].info[3].badges[0].title}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log('renderLicenseSection')
  return `[![License${renderLicenseTitle(license)}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
## Description
${data.description}

## Table of Contents
${data.toc}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}

`;
}

module.exports = generateMarkdown;
