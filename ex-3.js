// Exercise #3 Debugging
const employee = {
    name: "John Doe",
    age: 18,
    address: {
        street: "123 Main Street",
        city: "Cityville",
        state: "Stateville", // 1. แก้ไขจาก states เป็น state
        country: "Countryland",
        postalCode: "12345",
    },
};

console.log("Employee Name: " + employee.name); // 2. แก้ไขจาก employees เป็น employee
console.log("Employee Age: " + employee.age);
console.log("Employee Address: " + employee.address.street + ", " + employee.address.city + ", " + employee.address.state + ", " + employee.address.country + " " + employee.address.postalCode); // 3. แก้ไขจาก adress เป็น address