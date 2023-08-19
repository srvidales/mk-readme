const licenseData = require('./licenseData');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return licenseData
      .licenses[license.licenseIndex]
      .info[license.infoIndex]
      .badges[license.badgeIndex]
      .badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return licenseData
      .licenses[license.licenseIndex]
      .info[license.infoIndex]
      .badges[license.badgeIndex]
      .text;
}

function renderLicenseTitle(license) {
  return `: ${licenseData.licenses[license.licenseIndex].info[license.infoIndex].badges[license.badgeIndex].title}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
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
