const employees = [
    {id: 1, name: "John Doe", age: 30, department: "IT", salary: 50000 },
    {id: 2, name: "Alice Smith", age: 28, department: "HR", salary: 45000  },
    {id: 3, name: "Bob Johnson", age: 35, department: "Finance", salary: 60000 },
];

const totalEmployess =  employees.map((employee, index) =>  `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
document.getElementById("employeesDetails").innerHTML = totalEmployess;


function calculateTotalSalaries() {
    const totalSal = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSal}`);
}

function displayHREmployess() {
    const hrEmp = employees.filter(employee => employee.department === "HR");
    const hrEmpDisplay = hrEmp.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById("employeesDetails").innerHTML = hrEmpDisplay;
}

function findEmployeeById(empId) {
    const foundEmp = employees.find(employee => employee.id === empId);
    if(foundEmp) {
        document.getElementById("employeesDetails").innerHTML = `<p>${foundEmp.id}: ${foundEmp.name}:  ${foundEmp.name} - ${foundEmp.department} - $${foundEmp.salary}</p>`;
    }else {
        document.getElementById('employeesDetails').innerHTML = "No Employee has been found with this ID";
    }
} 