//import prompt from inquirer
const { prompt } = require("inquirer");

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
        {
          name: "view all employees",
          value: "view_Employees",
        },
      ],
    },
  ]);
}

//view all employees
//add employee
//view all employees by department

//switch statement

switch (choice) {
  case "view_Employees":
    return viewAllEmployees();
    break;

  default:
    return quit;
}
