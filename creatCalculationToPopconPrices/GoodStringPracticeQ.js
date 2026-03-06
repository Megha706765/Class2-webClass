// Question 1. : A "good string " is a string that starts with tha letter 'a' & has a length > 3. Write a Program to find  if a string is good ao not

// Question 2. : Predict the output of folowing code:
// let num =12;
// if((num % 3 === 0) && ( (num+1 == 15 ) || (num-1 == 11) )) {
//     console.log("safe");
// }else{
//     console.log("unsafe");

//-------------------------------------------------------------------------------------------------------------//

//ANSWER 1. 
let str = "apple";
if((str[0] === 'a') && (str.length > 3)){
    console.log("Good string");
}else{
    console.log("not a string");
}
 

// ANSWER 2.
let num = 12;
if((num % 3 === 0) && ((num+1 == 15) || (num -1 == 11))){
    console.log("safe");
}else{
    console.log("unsafe");
}



