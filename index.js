//Dependencies
const inquirer = require("inquirer");
const path = require("path");
const fs = require('fs');

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "index.html");

const render = require("./lib/htmlRendered");

const employeeTeam = [];

//Using inquirer to gather info about the team and to create objects

function createManager() {
    inquirer
        .prompt([{
            name: "name",
            type: "type",
            message: "What is the manager's name?",
            validate: async (input) => {
                if (input == "" || /\s/.test(input)) {
                    return "Please enter first or last name.";
                }
                return true;
            }
        },
        {
            name: "id",
            type: "input",
            message: "What is the manager's ID number?",
            validate: async (input) => {
                if (isNaN(input)) {
                    return "Please enter a number";
                }
                return true;
            }

        },
        {
            name: "email",
            type: "input",
            message: "What is the manager's email?",
            validate: async (input) => {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
                    return true;
                }
                return "Please enter a valid email address.";
            }
        },
        {
            name: "number",
            type: "input",
            message: "What is the manager's phone number?",
            validate: async (input) => {
                if (isNaN(input)) {
                    return "Please enter a number";
                }
                return true;
            }
        },
        ])
        .then(function (response) {
            console.log(response);
            const newManager = new Manager(
                response.name,
                response.id,
                response.email,
                response.number
            );
            employeeTeam.push(newManager);
            fs.createReadStream();
        });
}

createManager();

function createTeam() {
    inquirer
        .prompt([
            {
                name: "addMember",
                type: "list",
                message: "Would you like to add a team member",
                choices: [
                    "Yes, add a Manager",
                    "Yes, add an Engineer",
                    "Yes, add an Intern",
                    "No my team is complete",
                ],
            },
        ])
        .then(function (data) {
            switch (data.addMember) {
                case "Yes, add a Manager":
                    createManager();
                    break;
            }
        });
}
function createEngineer() {
    inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "What is the engineer's name?",
                validate: async (input) => {
                    if (input == "" || /\s/.test(input)) {
                        return "Please enter first or last name.";
                    }
                    return true;
                }
            },
            {
                name: "id",
                type: "input",
                message: "What is engineer's ID number?",
                validate: async (input) => {
                    if (isNaN(input)) {
                        return "Please enter a number";
                    }
                    return true;
                }
            },
            {
                name: "email",
                type: "input",
                message: "What is the engineer's email?",
                validate: async (input) => {
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
                        return true;
                    }
                    return "Please enter a valid email address.";
                }
            },
            {
                name: "github",
                type: "input",
                message: "What is the engineer's GitHub username?",
            },
        ])
        .then(function (response) {
            const newEngineer = new Engineer(
                response.name,
                response.id,
                response.email,
                response.github
            );
            employeeTeam.push(newEngineer);
            createTeam();
        });
}

function createIntern() {
    inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "What is the intern's name?",
                validate: async (input) => {
                    if (input == "" || /\s/.test(input)) {
                        return "Please enter first or last name.";
                    }
                    return true;
                }
            },
            {
                name: "id",
                type: "input",
                message: "What is the intern's ID number?",
                validate: async (input) => {
                    if (isNaN(input)) {
                        return "Please enter a number";
                    }
                    return true;
                }
            },
            {
                name: "email",
                type: "input",
                message: "What is the intern's email?",
                validate: async (input) => {
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
                        return true;
                    }
                    return "Please enter a valid email address.";
                }
            },
            {
                name: "school",
                type: "input",
                message: "What school did the intern go to?",
            },
        ])
        .then(function (response) {
            const newIntern = new Intern(
                response.name,
                response.id,
                response.email,
                response.school
            );
            employeeTeam.push(newIntern);
            createTeam();
        });
}

function buildTeam() {
    fs.writeFileSync(distPath, render(employeeTeam), "utf8");
}