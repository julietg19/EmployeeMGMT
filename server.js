//import prompt from inquirer
const { prompt } = require("inquirer");

//import db

const db = require("./db");

//import require

require("console.table");

init();

//init function

function init() {
  loadPrompts();
}

//load prompts function

async function loadPrompts() {
  const { choice } = await prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: ["View all Employees", "View all Roles", "View all Departments"],
    },

    //here
  ]);

  //switch statement

  switch (choice) {
    case "View all Employees":
      return viewAllEmployees();
      break;
    case "View all Roles":
      return viewAllRoles();
      break;
    case "View all Departments":
      return viewAllDepartments();
      break;

    default:
      return quit;
  }
}


async function viewAllEmployees() {
  const employees = await db.findAllEmployees();
  console.table(employees);
}

async function viewAllRoles() {
  const employees = await db.findAllRoles();
  console.table(employees);
}

async function viewAllDepartments() {
  const employees = await db.findAllDepartments();
  console.table(employees);
}
