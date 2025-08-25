export interface Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
}

export const employees: Employee[] = [
    { id: 1, name: "John Doe", position: "Developer", salary: 50000 },
    { id: 2, name: "Jane Smith", position: "Designer", salary: 45000 },
    { id: 3, name: "Bob Wilson", position: "Manager", salary: 60000 }
];

export function findEmployeeByName(name: string): Employee | undefined {
    return employees.find(emp => 
        emp.name.toLowerCase().includes(name.toLowerCase())
    );
}

export function displayAllEmployees(): void {
    console.log("\nAll Employees:");
    employees.forEach(emp => {
        console.log(`ID: ${emp.id}, Name: ${emp.name}, Position: ${emp.position}, Salary: ${emp.salary}`);
    });
}