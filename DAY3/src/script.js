function displayTable1(mapShow = 0){
    if(mapShow == 0){
        var prodtable = document.getElementById('prodTable');
        var mapChoice = prodMap;
    }
    else{
        var mapChoice = prodFilterMap;
        var prodtable = document.getElementById('prodFilter');
    }
    prodtable.innerHTML = " ";
    let rowHeader = `<tr><th>ID</td><th>NAME</th><th>CATEGORY</th><th>PRICE</th><th>MANUFACTURER</th></tr>`; 
    prodtable.innerHTML += rowHeader;
    for(let product of mapChoice){
        let prodid = product[0];
        let productDetails  = product[1];
        
        let row = `<tr><td>${prodid}</td><td>${productDetails["name"]}</td><td>${productDetails["category"]}</td><td>${productDetails["price"]}</td><td>${productDetails["manufacturer"]}</td></tr>`; 
        
        prodtable.innerHTML += row;
    }
    prodtable.style.display = "block";
}
function showFilterResults(filterType,filterVal){
    if(filterVal == ""){
        // displayTable1(mapShow=1);
        document.getElementById('prodFilter').style.display = "none";
    }
    else{
        document.getElementById('prodFilter').style.display = "block";
        for(let elements of prodMap){
            let elid = elements[0]
            let eldetails = elements[1];
            if(filterType == "category"){
                if(eldetails[filterType] == filterVal){
                    console.log(elid);
                    prodFilterMap.set(elid,eldetails)
                }
            }
            else if(filterType == "prodId"){
                if(elid.indexOf(filterVal) !== -1){
                    console.log(elid);
                    prodFilterMap.set(elid,eldetails);
                } 
            }
            else{
                if(eldetails[filterType].indexOf(filterVal) !== -1){
                    console.log(elid);
                    prodFilterMap.set(elid,eldetails);
                }
                // else{
                //     prodFilterMap.delete(elid);
                // }
            }
        }
        displayTable1(mapShow=1);
    }
}

function reverseProducts(filterType){
    let arr = new Array();
    for(let elements of prodMap){
        let elid = elements[0];
        let eldetails = elements[1];
        let toRevStr = eldetails[filterType];
        eldetails[filterType] = toRevStr.split("").reverse().join("");
        arr.push([elid,eldetails]);
    }
    prodMap.clear();
    for(i=0;i<arr.length;i++){
        prodMap.set(arr[i][0],arr[i][1]);
    }
    displayTable1();
}

function sortProducts(filterType){
    let arr = new Array();
    for(let elements of prodMap){
        let elid = elements[0];
        let eldetails = elements[1];
        arr.push([elid,eldetails]);
        if(filterType == "prodId"){
            arr.sort(function(a,b){
                if(parseInt(a[0]) < parseInt(b[0])){
                    return -1;
                }
                else{
                    return 1;
                }
            });
        }
        else if(filterType == "price"){
            arr.sort(function(a,b){
                if(parseInt(a[1][filterType]) < parseInt(b[1][filterType])){
                    return -1;
                }
                else{
                    return 1;
                }
            });
        }
        else{
            arr.sort(function(a,b){
                if(a[1][filterType].toLowerCase()<b[1][filterType].toLowerCase()){
                    return -1;
                }
                else{
                    return 1;
                }
            });
        }
        // console.log(arr);
    }
    prodMap.clear();
    for(i=0;i<arr.length;i++){
        prodMap.set(arr[i][0],arr[i][1]);
    }
    displayTable1();

}

var prodMap = new Map();
var prodFilterMap = new Map();

window.onload = function(){
    document.getElementById('prodTable').style.display = "none";
    document.getElementById('prodFilter').style.display = "none";
    document.getElementById('chooseCategory').style.display = "none";
    document.getElementById('filterValue').style.display = "none";
    document.getElementById('filterTypes1').style.display = "none";
    document.getElementById('sortProd').style.display = "none";
    document.getElementById('reverseProd').style.display = "none";

    document.getElementById('saveProd').addEventListener('click',function(event){
        event.preventDefault();
        document.getElementById('sortProd').style.display = "block";
        document.getElementById('reverseProd').style.display = "block";
        console.log(prodMap);
        var p1 = new createTable();
        let prodResp = p1.getValues();
        // console.log(prodResp);
        prodMap.set(prodResp[0],prodResp[1]);
        displayTable1();
    });

    document.getElementById('sortProd').addEventListener('click',function(event){
        event.preventDefault();
        var filterType = document.getElementById('filterTypes1');
        filterType.style.display = "block";
        filterType.addEventListener('change',function(){
            sortProducts(filterType.value);
        })
    });
    document.getElementById('reverseProd').addEventListener('click',function(event){
        event.preventDefault();
        var filterType = document.getElementById('filterTypes1');
        filterType.style.display = "block";
        filterType.addEventListener('change',function(){
            reverseProducts(filterType.value);
        })
    });
    document.getElementById('filterTypes').addEventListener('change',function(event){
        // console.log(this.value);
        prodFilterMap.clear();
        if(this.value == "category"){
            var catfilter = document.getElementById('chooseCategory');
            document.getElementById('filterValue').style.display = "none";
            catfilter.style.display = "block";
            catfilter.addEventListener('change',function(){
                prodFilterMap.clear();
                showFilterResults("category",catfilter.value);
            });
             
        }
        else if(this.value == "-1"){
            document.getElementById('filterValue').style.display = "none";
            document.getElementById('chooseCategory').style.display = "none";
            
        }
        else{
            let filterType = this.value;
            var filterInputValue = document.getElementById('filterValue');
            document.getElementById('chooseCategory').style.display = "none";
            filterInputValue.style.display = "block";
            filterInputValue.addEventListener('keyup',function(){
                prodFilterMap.clear();
                showFilterResults(filterType,filterInputValue.value);
            });

        }
    });
}

var createTable = function(){
    
    this.getValues = function(){
        let prodId = document.getElementById('prodId').value;
        let prodName = document.getElementById('prodName').value;
        let prodCategory = document.getElementById('prodCategory').value;
        let prodPrice = document.getElementById('prodPrice').value;
        let prodManufacturer = document.getElementById('prodManufacturer').value;
    
        let product  = {"name": prodName,"category": prodCategory,
                        "price": prodPrice,"manufacturer": prodManufacturer};
        
        let response  = [prodId,product];
        
        return response; 
    }
}