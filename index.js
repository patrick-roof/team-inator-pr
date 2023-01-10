const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

function managerPrompt() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "what is the manager's name?",
            },
            {
                type: 'input',
                name: 'managerID',
                message: "what is the manager's ID?",
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "what is the manager's Email?",
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "what is the manager's office number?",
            },
        ])
        .then((answers) => {
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.officeNumber)
        })
}

function engineerPrompt() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "what is the engineer's name?",
            },
            {
                type: 'input',
                name: 'engineerID',
                message: "what is the engineer's ID?",
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "what is the engineer's Email?",
            },
            {
                type: 'input',
                name: 'engineerGitHub',
                message: "What is the engineer's GitHub profile?"
            }
        ])
        .then((answers) => {
            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub)
        })
}