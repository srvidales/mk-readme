// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log('renderLicenseBadge')
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log('renderLicenseLink')
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log('renderLicenseSection')
  renderLicenseBadge();
  renderLicenseLink();
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseSection();
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
