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
      choices: [
        "View all Employees",
        "View all Roles",
        "View all Departments",
        "Add an Employee",
        "Add a Role",
        "Update a Role",
      ],
    },
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
    case "Add an Employee":
      return addEmployee();
      break;
    case "Add a Role":
      return addRole();
      break;
    case "Add a Department":
      return addDepartment();
      break;
    case "Update an Employee":
      return updateEmployee();
      break;
    default:
      return quit();
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

async function addEmployee() {
  const roles = await db.findAllRoles();
  const employee = await prompt([
    { name: "first_name", message: "Please enter first name of new employee" },
    { name: "last_name", message: "Please enter last name of new employee" },
  ]);
  console.log(roles);

  const roleChoices = roles.map(({ id, title }) => ({
    name: title,
    value: id,
  }));

  const { roleId } = await prompt({
    type: "list",
    name: "roleId",
    message: "What is the employee's role?",
    choices: roleChoices,
  });
  employee.role_id = roleId;

  console.log(employee);

  await db.createEmployee(employee);
  console.log("employee added!");
  loadPrompts();
}

async function addRole() {
  const departments = await db.findAllDepartments();
  console.log(departments);
}

async function addDepartment() {}

async function updateEmployee() {}

function quit() {
  console.log("goodbye");

  process.exit();
}
