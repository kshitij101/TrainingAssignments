function showResult(){
	var numbers_list = numbers.splice().reverse();
	var op_list = operations.splice().reverse();
	var result = numbers.reduce(function(arr,curr,ind){
								return arr.concat(curr,operations[ind]);},[]);
	result = result.splice(0,result.length-1)+" ";
	var calculatedResult = eval(result.replace(/,/g," "));
	document.getElementById('calculator-inp').value = "ANS: "+calculatedResult.toFixed(2);
}

function eventHandle(value){

	var btnVal = value;
	var calcInput = document.getElementById('calculator-inp');
	if(btnVal == "." || (parseInt(btnVal) > -1 && parseInt(btnVal) < 10)){
		if(btnVal == "0" && operations.pop() == "/"){
			numbers = [];
			operations = [];
			alert("DONT DIVIDE BY ZERO");
		}
		if(calcInput.value == "0"){
			calcInput.value = btnVal;
		}
		else{
			calcInput.value += btnVal;
		}
	}
	else{
		if(calcInput.value == "0"){
			alert("PLEASE ENTER A NUMBER FIRST");
		}
		else{
			if(btnVal == "all-clear"){
				calcInput.value = "0";
				numbers = [];
				operations = [];
			}
			else if(btnVal == "+" || btnVal == "-" || btnVal == "/" || btnVal == "*"){
				numbers.push(calcInput.value);
				operations.push(btnVal);
				calcInput.value = "";	
			}
			else if(btnVal == "equals"){
				numbers.push(calcInput.value);
				showResult();
			}
		}
	}
}

function addEvent(){
	var bns  = document.getElementsByTagName('button');
	for(i=0;i<bns.length;i++){
		// console.log(bns[i].value);
		bns[i].addEventListener("click",function(){
			eventHandle(this.value);
		});
	}
}

var operations = new Array();
var numbers = new Array();

window.onload = function(){
	addEvent();
}