// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {type: 'input', name:'title', message:'What is the title?'},
    {type: 'input', name:'description', message:'What is an appropriate description?'},
    {type: 'input', name:'installation', message:'What are the installation instructions?'},
    {type: 'input', name:'usage', message:'What is the usage information?'},
    {type: 'input', name:'license', message:'What is license?'},
    {type: 'input', name:'contributing', message:'Who is contributing?'},
    {type: 'input', name:'tests', message:'What are the tests?'},
    {type: 'input', name:'questions', message:'What are the questions?'},
];

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
