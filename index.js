// Write your solution in this file!
// Step 1: Initialize the employee object
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // Step 2: Create the functions
  
  // Function to update an employee object without mutating it
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee, // Create a new object with all existing properties
      [key]: value // Add or update the specified key-value pair
    };
  }
  
  // Function to update an employee object destructively
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Mutate the original object
    return employee; // Return the modified object (usually not needed)
  }
  
  // Function to delete a property from an employee object without mutating it
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }; // Create a new object
    delete newEmployee[key]; // Delete the specified key-value pair from the new object
    return newEmployee; // Return the modified object
  }
  
  // Function to delete a property from an employee object destructively
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Mutate the original object
    return employee; // Return the modified object (usually not needed)
  }
  
  // Example usage:
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Smith");
  console.log(updatedEmployee);
  
  const deletedEmployee = deleteFromEmployeeByKey(employee, "streetAddress");
  console.log(deletedEmployee);
  