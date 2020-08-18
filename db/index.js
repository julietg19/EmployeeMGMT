//require connection

const connection = require("./connection");

// create DB class and find all employees function

class DB {
  constructor(connection) {
    this.connection = connection;
  }
  findAllEmployees() {
    return this.connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
    );
  }
  findAllRoles() {
    return this.connection.query(
      "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
    );
  }
  findAllDepartments() {
    return this.connection.query(
      "SELECT department.name FROM employees.department"
    );
  }

  createEmployee(employee) {
    return this.connection.query("INSERT INTO employee SET ?", employee);
  }
}

module.exports = new DB(connection);

// add another choice to loadprompts choices array
//value will be the function that gets called
//add to switch statement
//return value will be the function you call
// create function in index in database that handles the query
//

//add new role
//add new employee
//add new department

//update employees role
