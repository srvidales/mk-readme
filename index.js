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
    addLicenseQuestion(),
    {type: 'editor', name:'contributing', message:'Who is contributing?'},
    {type: 'editor', name:'tests', message:'What are the tests?'},
    {type: 'editor', name:'questions', message:'What are the questions?'},
];

function addLicenseQuestion() {
    let choices = [];
    licenseData.licenses.map((value, index, array) => {
        let licenseIndex = {license: null, info: null, badge: null}
        let licenseData = {};
        array.map((license, index) => {
            licenseIndex.license = index;
            licenseData.brand = license.brand;
            license.info.map((info, index) => {
                licenseIndex.info = index;
                licenseData.name = info.name;
                info.badges.map((badge, index) => {
                    licenseIndex.badge = index;
                    if ('title' in badge) {
                        licenseData.title = badge.title;
                    } else {
                        licenseData.title = null;
                    }
                    let name = `${licenseData.brand} - ${licenseData.name} - ${licenseData.title}`;
                    let choice = { name, value:licenseIndex }
                    choices.push(choice);
                    console.log(name);
                    console.log(choice);
                })
            })
        })
    })
    console.log(choices);
    return choices;
    // return {type: 'list', name:'license', message:'What is license?', choices:[ {name:'a', value:'1'}, {name:'b', value:'2'}, {name:'c', value:'3'}]};
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
            console.log(markdown);
            writeToFile('README.md', markdown)
        });

}

// TODO: Create a function to initialize app
function init() {
    promptUser()
}

// Function call to initialize app
init();
