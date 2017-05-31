/*
 * Creating namespace for employeeDetail with interface and function
 */
namespace employeeDetail{
    export interface employee{
        empID:number;
        empName:String;
        empDept:String;
    }

    export function employeeFunction(emp:employee){
        console.log(`Employee Id is ${emp.empID},Employee name is ${emp.empName},
            Employee Dept is ${emp.empDept}`);
    };
}