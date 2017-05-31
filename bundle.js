/*
 * Creating namespace for employeeDetail with interface and function
 */
var employeeDetail;
(function (employeeDetail) {
    function employeeFunction(emp) {
        console.log("Employee Id is " + emp.empID + ",Employee name is " + emp.empName + ",\n            Employee Dept is " + emp.empDept);
    }
    employeeDetail.employeeFunction = employeeFunction;
    ;
})(employeeDetail || (employeeDetail = {}));
/*
 * Calling interface and function from namespace.ts
 */
/// <reference path="namespaces.ts"/>
var empInfo = { empID: 101, empName: "Riya", empDept: "Financial" };
employeeDetail.employeeFunction(empInfo);
