const licenseData = require('./licenseData');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!isAnyLicensePropertyNull(license)) {
    return licenseData
      .licenses[license.licenseIndex]
      .info[license.infoIndex]
      .badges[license.badgeIndex]
      .badge;
  } else {
    return '';
  }
}

function isAnyLicensePropertyNull(license) {
  return license.licenseIndex == null || license.infoIndex == null || license.badgeIndex == null;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!isAnyLicensePropertyNull(license)) {
    return licenseData
        .licenses[license.licenseIndex]
        .info[license.infoIndex]
        .badges[license.badgeIndex]
        .text;
  } else {
    return ''
  }
}

function renderLicenseTitle(license) {
  if (!isAnyLicensePropertyNull(license)) {
    const badge = licenseData.licenses[license.licenseIndex].info[license.infoIndex].badges[license.badgeIndex];
    if ('title' in badge) {
      return `: ${badge.title}`;
    } else {
      return '';
    }
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!isAnyLicensePropertyNull(license)) {
    const markdown = `[![License${renderLicenseTitle(license)}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`;
    console.log(markdown);
    return markdown;
  } else {
    return '';
  }
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
