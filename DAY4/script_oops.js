class Department{
    constructor(deptNo,deptName,location,capacity){
        console.log("DEPARTMENT IS CREATED");
        this.deptNo = deptNo;
        this.deptName = deptName;
        this.location = location;
        this.capacity = capacity;
    }
    
    getDetails(){
       let deptDetails = {"deptno":this.deptNo,"deptname":this.deptName,
                "location":this.location,"capacity":this.capacity};
        return deptDetails;
    }
}

class Employee{
    constructor(empNo,empName,deptNo,designation,salary){
        console.log("EMPLOYEE IS CREATED"); 
        this.empName = empName;
        this.empNo = empNo;
        this.deptNo = deptNo;
        this.designation = designation;
        this.salary = salary;
    }

    // static getDepartments(){
    //     departments = new Map();

    //     d1 = {"deptNo": "101","deptName":"DS","deptLocation":"first floor","deptCapacity":"180"};
    //     d2 = {"deptNo": "102","deptName":"DAI","deptLocation":"second floor","deptCapacity":"80"};
    //     d3 = {"deptNo": "103","deptName":"CMS","deptLocation":"third floor","deptCapacity":"100"};

    //     departments.set(101,d1);
    //     departments.set(102,d2);
    //     departments.set(103,d3);

    //     return departments;
    // }

    getEmpDetails(){
        let empDetails = {"id":this.empNo,"name":this.empName,
                    "designation":this.designation,"deptno":this.deptNo,
                    "salary":this.salary};
        return empDetails;
    }
}

class Office {
    constructor(mapEmp,mapDept){
        this.mapEmp = mapEmp;
        this.mapDept = mapDept;
    }

    #credValidations(empNo,empName,deptNo,designation,salary){
        let deptCount = this.mapDept.get(deptNo);
        let empCount = 0;
        for(let emp of this.mapEmp){
            let empDetails = emp[1]["deptno"];
            if(empDetails == deptNo){
                empCount += 1;
            }
        }

        if((empName[0] === empName[0].toUpperCase()) || (empNo < 0) || (this.mapEmp.has(empNo)) || (empCount+1 >= deptCount["capacity"]) || (salary < 0)){
            console.log("USER CAN NOT BE ADDED OR VALIDATED");
            return false;
        }
        else{
            console.log("USER VALIDATED");
            return true;
        }
    }

    addDepartment(deptNo,deptName,location,capacity){
        let dept = new Department(deptNo,deptName,location,capacity);
        this.mapDept.set(deptNo,dept.getDetails());
    }

    addEmployee(empNo,empName,deptNo,designation,salary){
        let emp = new Employee(empNo,empName,deptNo,designation,salary);
        if(this.credValidations(empNo,empName,deptNo,designation,salary)){
            this.mapEmp.set(empNo,emp.getEmpDetails());
            return true;
        }
        else{
            return false;
        }
    } 
    deleteEmployee(empId){
        if(this.mapEmp.has(empId)){
            this.mapEmp.delete(empId);
        }
        else{
            alert("NO EMPLOYEE WITH THIS ID");
            return;
        }
    }

    updateEmployee(empId,mod,modVal){
        if(this.mapEmp.has(empId)){
            let emp = this.mapEmp.get(empId);
            emp[mod] = modVal;
            this.mapEmp.set(empId,emp);
        }
        else{
            alert("NO EMPLOYEE WITH THIS ID");
            return;
        }
    }

    getAllEmployee(conditionType,condition,conditionVal){
        var conditions = condition.split(",");
        var conditionValues = conditionVal.split(",");
        var response = new Array();
        if(conditionType == 3){
            for(let dept1 of this.mapDept){
                let deptDetails = dept1[1];
                if(deptDetails["deptname"] == conditions[0]){
                    for(let emp1 of this.mapEmp){
                        let empDetails = emp1[1];
                        if(empDetails["designation"] == conditionValues[0]){
                            response.push([empDetails["id"],empDetails["name"]]);
                        }
                    }
                }
            }
        }
        else if(conditionType == 1){
            for(let emp of this.mapEmp){
                let empDetails = emp[1];
                for(let i=0;i<conditions.length;i++){
                    if(empDetails[conditions[i]] == conditionValues[i]){
                        // console.log(empDetails);
                        response.push([empDetails["id"],empDetails["name"]]);
                    }
                }
            }
        }
        else if(conditionType == 0){
            for(let dept of this.mapDept){
                let deptDetails = dept[1];
                for(let i=0;i<conditions.length;i++){
                    if(deptDetails[conditions[i]] == conditionValues[i]){
                        for(let emp of this.mapEmp){
                            let empDetails = emp[1];
                            if(empDetails["deptno"] == deptDetails["deptno"]){
                                response.push([empDetails["id"],empDetails["name"]]);
                            } 
                        }
                    }
                }
            }
        }
        return response;
    }

    getMaxSalary(){
        let response = new Array();
        for(let dept of this.mapDept){
            let deptArr = new Array();
            let deptNo = dept[1]["deptno"];
            for(let emp of this.mapEmp){
                let empDetails = emp[1];
                if(empDetails["deptno"] == deptNo){
                    deptArr.push([empDetails["id"],empDetails["name"],empDetails["salary"]]);
                }
            }
            deptArr.sort(function(a,b){
                if(parseInt(a[3])< parseInt(b[3])){
                    return -1;
                }
                else{
                    return 1;
                }
            });
            response.push(deptArr);
        }
        return response;
    }
}


mapEmployee = new Map();
mapDepartment = new Map();

var e1 = new Office(mapEmployee,mapDepartment);

e1.addDepartment("101","DS","first floor","180");
e1.addDepartment("102","DAI","second floor","80");

// if(e1.credValidations("001","kshitij","101","CE","10000000")){
//     e1.addEmployee("001","kshitij","101","CE","10000000");
// }

e1.addEmployee("001","kshitij","101","CE","10000000");
e1.addEmployee("002","priyanshu","101","CE","100");
e1.addEmployee("003","farhan","102","CE","1");
e1.addEmployee("004","jay","102","DS","100");

console.log(e1.getMaxSalary());

console.log(e1.getAllEmployee(1,"name","kshitij"));
console.log(e1.getAllEmployee(1,"designation","CE"));
console.log(e1.getAllEmployee(0,"deptname","DAI"));
console.log(e1.getAllEmployee(0,"deptno","101"));
console.log(e1.getAllEmployee(3,"DS","CE"));
console.log(e1.getAllEmployee(3,"DAI","DS"));

e1.deleteEmployee("001");
console.log(e1.getAllEmployee(1,"name","kshitij"));

e1.updateEmployee("001","name","ksh");
console.log(e1.getAllEmployee(1,"name","kshitij"));
console.log(e1.getAllEmployee(1,"name","ksh"));





