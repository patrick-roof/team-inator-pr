const generateTeam = (team) => {

    const html = [];

    const generateManager = manager => {
        let managerHTML = 
        `<div>
        <div class="card-heading">Manager</div>
            <ul>
                <li>ID:${manager.managerID}</li>
                <li>Email: <span id="email"><a href="mailto:${manager.managerEmail}">${manager.managerEmail}</a></a></span></li>
                <li>Office Number: ${manager.managerOfficeNumber}</li>
            </ul>
        </div>`;
        html.push(managerHTML);
    }

    const generateEngineer = engineer => {
        let engineerHTML = 
        `<div>
        <div class="card-heading">Engineer</div>
            <ul>
                <li>ID:${engineer.engineerID}</li>
                <li>Email: <span id="email"><a href="mailto:${engineer.engineerEmail}">${engineer.engineerEmail}</a></a></span></li>
                <li>GitHub Username: <a target="_blank" href="https://github.com/${engineer.engineerGitHub}">${engineer.engineerGitHub}</li>
            </ul>
        </div>`;
        html.push(engineerHTML);
    }

    const generateIntern = intern => {
        let internHTML = 
        `<div>
        <div class="card-heading">Intern</div>
            <ul>
                <li>ID:${intern.internID}</li>
                <li>Email: <span id="email"><a href="mailto:${intern.internEmail}">${intern.internEmail}</a></a></span></li>
                <li>School: ${intern.internSchool}</li>
            </ul>
        </div>`;
        html.push(internHTML);
    }
}

//put a for loop here

module.exports = team => {

    return
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./dist/style.css"/>
        <title>My Team</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
    
        <main> ${generateTeam(team)} </main>
        
    </body>
    </html>`
}