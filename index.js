const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamMembers = []

function managerPrompt() {
    console.log('Adding a Team Manager:');
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "Please enter the manager's name:",
            },
            {
                type: 'input',
                name: 'managerID',
                message: "Please enter the manager's ID:",
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "Please enter the manager's Email:",
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "Please enter the manager's office number:",
            },
        ])
        .then((answers) => {
            console.log(answers)
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.officeNumber)
            teamMembers.push(manager);
            optionsMenu()
        });
};

const optionsMenu = () => {
    console.log('Menu:');
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'userMenu',
                message: 'Please select how you would like to proceed:',
                choices: ['add an Engineer', 'add an Intern', 'Finish']
            }
        ])
        .then(chosenStep => {
            switch (chosenStep.userMenu) {
                case 'add an Engineer':
                    engineerPrompt()
                case 'add an Intern':
                    internPrompt();
                case 'Finish':
                    generateSite();
            }
        })
}

function engineerPrompt() {
    console.log('Now adding an Engineer to your team:')
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "Please enter the engineer's name:",
            },
            {
                type: 'input',
                name: 'engineerID',
                message: "Please enter the engineer's ID:",
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "Please enter the engineer's Email:",
            },
            {
                type: 'input',
                name: 'engineerGitHub',
                message: "Please enter the engineer's GitHub username:"
            }
        ])
        .then((answers) => {
            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub)
            teamMembers.push(engineer);
            userMenu();
        })
}

function internPrompt() {
    console.log('Now adding an Intern to your team:')
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: "Please enter the intern's name:",
            },
            {
                type: 'input',
                name: 'internID',
                message: "Please enter the intern's ID:",
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "Please enter the intern's Email:",
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "Please enter the intern's current school:"
            }
        ])
        .then((answers) => {
            const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool)
            teamMembers.push(intern);
            userMenu();
        });
};

function generateSite() {
    console.log('Generating team info...')
    fs.writeFile(generateHTML(teamMembers))
}

managerPrompt();