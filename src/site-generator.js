const generateTeam = (team) => {


    const generateManager = manager => {
        return  `<div>
        <div class="card-heading">Manager</div>
            <ul>
                <li>ID:${manager.getId()}</li>
                <li>Email: <span id="email"><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></a></span></li>
                <li>Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>`;
    }

    const generateEngineer = engineer => {
        return  `<div>
        <div class="card-heading">Engineer</div>
            <ul>
                <li>ID:${engineer.getId()}</li>
                <li>Email: <span id="email"><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></a></span></li>
                <li>GitHub Username: <a target="_blank" href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</li>
            </ul>
        </div>`;
    }

    const generateIntern = intern => {
        return  `<div>
        <div class="card-heading">Intern</div>
            <ul>
                <li>ID:${intern.getId()}</li>
                <li>Email: <span id="email"><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></a></span></li>
                <li>School: ${intern.getSchool()}</li>
            </ul>
        </div>`;
    }

//put a for loop here
    const html = [];

    let managerHTML = team.filter(employee => employee.getRole() === 'Manager') 
        .map(manager => generateManager(manager));

    html.push(managerHTML);

    let engineerHTML = team.filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join('');

    html.push(engineerHTML);

    let internHTML = team.filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join('')

    html.push(internHTML);

    return html.join('')
}


module.exports = team => {

    return `<!DOCTYPE html>
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