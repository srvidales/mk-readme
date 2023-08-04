// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs= require('fs');

// TODO: Create an array of questions for user input
const questions = ['What is the title?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
        }
        console.log('Saved.');
    });
}

// TODO: Create a function to initialize app
function init() {
    let data = '';
    generateMarkdown(data);
    writeToFile('README.md', data);
}

// Function call to initialize app
init();
