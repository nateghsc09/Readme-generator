# Readme-generator

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


## Description

The purpose of this application is to use the Inquirer package with Node to create a user-generated readme file based on the user's input in the terminal.

The prompt asks the user the following questions:
* What is the name of your app?
* Give a brief description of your app.
* What are the installation instuctiuons for your app?
* What is the usage infromation for you app?
* What are the contribution guidelines for your app?
* What command should be run to run tests?
* What license will you use for this app?
    * This is multiple choice.
* Enter your Github Username.
* Enter your email address.

Once the user has completed all questions, a readme will be generated entitled 
generatedReadme.md

## How To Use

Below is an overview of how to use this application:

* Install inquirer and fs through the terminal by running: npm i
* Open github on your desktop, cd into the directory, and run: node index.js
* Answers the questions that are prompted in your terminal, and see that a generatedReadme.md file has been created in your directory with your inputs.

## More Info





