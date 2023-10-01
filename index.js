// Write your solution in this file!
// creat obj
const employee = {
    name: 'sam',
    streetAddress: '11 Broadway' 
}
// remove key 
delete employee.streetAddress
// create function nondustructivly with ... spread opretor to copy the orinal obj 
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
    newObj[key] = value;
    return newObj;
}
const newEmployee1 = updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway"); // the copy of the original obj

// create function distructivly to change the orihinal one
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}
const employeeUpdate1 = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAdress", "12 Broadway");

//create function to delet nondustructivly
function deleteFromEmployeeByKey(obj, key) {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj; 
}
const newEmployee2 = deleteFromEmployeeByKey(employee, 'name');

//create function to delet dustructivly
function destructivelyDeleteFromEmployeeByKey(obj, key) {
  delete obj[key];
    return obj;
}
const employeeUpdate2 = destructivelyDeleteFromEmployeeByKey(employee, "name");

console.log(employee) //origin
console.log(newEmployee1) // copy to add
console.log(newEmployee2) // copy to remove
console.log(employee.name)
