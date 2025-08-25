import { Employee, employees, findEmployeeByName, displayAllEmployees } from "./Employee";

// Display all employees
displayAllEmployees();

// Search for an employee
const searchName = "John";
const foundEmployee = findEmployeeByName(searchName);
console.log("\nSearch Results:");
if (foundEmployee) {
    console.log(`Found: ID: ${foundEmployee.id}, Name: ${foundEmployee.name}, Position: ${foundEmployee.position}, Salary: ${foundEmployee.salary}`);
} else {
    console.log(`No employee found with name: ${searchName}`);
}