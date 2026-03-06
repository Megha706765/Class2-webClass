//&& and
// OR ||
// Not !

//(exp1)&&(exp2)
let marks = 90;
if(marks >= 33 && marks >= 80){
    console.log("pass");
    console.log("A+");
}
let marks2 = 30;
if((marks2 >= 33 && marks2 <= 80) || !false){
    console.log("pass");
}