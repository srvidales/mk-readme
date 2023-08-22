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
    {type: 'list', name:'license', message:'What is license?', choices:eval('generateChoices()')},
    {type: 'editor', name:'contributing', message:'Who is contributing?'},
    {type: 'editor', name:'tests', message:'What are the tests?'},
    {type: 'editor', name:'questions', message:'What are the questions?'},
];

function generateChoices() {
    let choices = [];

    licenseData.licenses.forEach((license, licenseIndex) => {
        let indexes = {}
        let token = {};
        indexes.licenseIndex = licenseIndex;
        token.brand = license.brand;
        license.info.forEach((info, infoIndex) => {
            indexes.infoIndex = infoIndex;
            token.name = info.name;
            info.badges.forEach((badge, badgeIndex) => {
                indexes.badgeIndex = badgeIndex;
                if ('title' in badge) {
                    token.title = badge.title;
                    name = `${token.brand}/${token.name}/${token.title}`
                } else {
                    name = `${token.brand}/${token.name}`
                }
                const choice = { name, value: Object.assign({}, indexes)};
                choices.push(choice);
            })
        })
    })

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
