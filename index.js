//Dependencies
const inquirer = require("inquirer");
const path = require("path");
const fs = require('fs');

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "index.html");

const render = require("./dist/htmlRendered");

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
        
    }
])
}