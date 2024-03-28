//3. Run this script, & check whether alert message would be displayed or
//not. Record the outputs.**

var a = 4;
if (++a === 5) {
alert("given condition for variable a is true");
}
//output: given condition for variable b is true


 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

//output : given condition for variable b is true

 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

//output : condition 2 is true

//output : condition 4 is true



var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

//output : The cost equals

 if (true){

alert("True");
}
if (false){
alert("False");
}
//output : true

 if("car" < "cat") {

alert("car is smaller than cat");
}

//output :  car is smaller than cat


