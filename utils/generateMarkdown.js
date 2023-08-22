const licenseData = require('./licenseData');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
/**
 * Renders license badge.
 * @param license license information object.
 * @returns {*|string} license badge link.
 */
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

/**
 * Checks to see if any license info is null.
 * @param license License information object.
 * @returns {boolean} True if any property is null, false otherwise.
 */
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

/**
 * Renders license title if any.
 * @param license License information object.
 * @returns {string} License title if it exists, empty string otherwise.
 */
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
/**
 * Renders the license section of the README.md file.
 * @param license License information object.
 * @returns {string} Rendered license section.
 */
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
/**
 * Generates markdown for entire README.md file.
 * @param data inquirer user supplied data.
 * @returns {string} entire README.md text.
 */
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
