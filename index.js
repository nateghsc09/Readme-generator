// packages for the app
const inquirer = require ('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./generateMarkdown');

//questions for users to add their inputs
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?',
        default: 'Untiled Project',

    },
    {
        type:'input',
        name: 'description',
        message: "Give a brief description of your project.",

    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instuctiuons for your project?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage infromation for you app?',

    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines for your project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        default: 'npm test'
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license will you use for this app?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3 Clause', 'None'],
        default: 'MIT'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
      },
];
// write to a new readme file
function writeToFile(fileName, data) {

    fs.writeFileSync(fileName, generateMarkdown(data));
}

//function to run app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
    writeToFile('generatedReadme.md', response);
    })
}

// call to initalize app
init();
