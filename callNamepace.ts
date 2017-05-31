/*
 * Calling interface and function from namespace.ts
 */

/// <reference path="namespaces.ts"/>

let empInfo:employeeDetail.employee={empID:101,empName:"Riya",empDept:"Financial"};
employeeDetail.employeeFunction(empInfo);