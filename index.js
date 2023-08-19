// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');
const licenseData = require('./utils/licenseData.js');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {type: 'input', name:'title', message:'What is the title?'},
    {type: 'editor', name:'description', message:'What is an appropriate description?'},
    {type: 'editor', name:'installation', message:'What are the installation instructions?'},
    {type: 'editor', name:'usage', message:'What is the usage information?'},
    {type: 'list', name:'license', message:'What is license?', choices:eval('extractChoices()')},
    {type: 'editor', name:'contributing', message:'Who is contributing?'},
    {type: 'editor', name:'tests', message:'What are the tests?'},
    {type: 'editor', name:'questions', message:'What are the questions?'},
];

function mapBadges(info, licenseIndex, licenseData, choices) {
    info.badges.map((badge, index) => {
        licenseIndex.badgeIndex = index;
        if ('title' in badge) {
            licenseData.title = badge.title;
        } else {
            licenseData.title = null;
        }
        let name = `${licenseData.brand} - ${licenseData.name}${licenseData.title ? ` - ${licenseData.title}` : ''}`;
        let choice = {name, value: licenseIndex}
        choices.push(choice);
    })
}

function mapInfo(license, licenseIndex, licenseData, choices) {
    license.info.map((info, index) => {
        licenseIndex.infoIndex = index;
        licenseData.name = info.name;
        mapBadges(info, licenseIndex, licenseData, choices);
    })
}

function mapLicense(choices) {
    licenseData.licenses.map((license, index) => {
        let licenseIndex = {license: null, info: null, badge: null}
        let licenseData = {};
        licenseIndex.licenseIndex = index;
        licenseData.brand = license.brand;
        mapInfo(license, licenseIndex, licenseData, choices);
    })
}

function extractChoices() {
    let choices = [];
    mapLicense(choices);
    return choices;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
        }
        console.log('Saved.');
    });
}

function promptUser() {

    return inquirer.prompt(questions)
        .then(function (data) {

            data.toc = `- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
`

            const markdown = generateMarkdown(data);
            writeToFile('README.md', markdown)
        });

}

// TODO: Create a function to initialize app
function init() {
    promptUser()
}

// Function call to initialize app
init();
