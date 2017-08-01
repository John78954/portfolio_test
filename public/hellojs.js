//console.log("I'm in a JS file!");
//This is a single-line comment. Everything is ignored until the newline.

// var input;
// if (input){
//   console.log(input);
// } else {
//   console.log("It's not defined.");
// }
//
// var test = false;
// var output = test ? "Passed the test" : "Failed the test"; //if statement
// console.log(output);

//If statement in JS must always be in paranthesis.
//Curly braces are needed to decide where the block starts and ends.
//There is no unless keyword in Javascript.
//Ternary
// var value = 0;
// if (value === 0) {
//   console.log("zero");
// } else if (value === 1) {
//   console.log("one");
// }  else {
//     console.log("or something else");
// }

// var value = 0;
// switch (value) {
//   case 0:
//   break;
//   case 1:
//   break;
//   default:
//   break;
// }
//
// var x = 0;
// while (x < 10) {
//   console.log(x);
//   x++;
// }

//There is no until keyword in JavaScript!
//Loops in Javascript are way more dangerous than in ruby.

//
// var a = 0;
// while (true) {
//   console.log(a);
//   if (a >= 10) {
//     break;
//   } else {
//     a++;
//   }
// }

// for (var i = 0; i <=10; i++){
//   console.log(i);
// }

// var arr = ["a", "b", "c", "d"];
//
// arr.forEach(function(item){
//   console.log(item);
// });

//Any function without a name is called an anonymous function.

// function my_func_stmt(arg) {
//   console.log("inside my function");
//   console.log(arg);
// }
//
// var my_func_exp = function(arg){
//   console.log("inside my function expression:");
//   console.log(arg);
// }
//
// console.log("ARG IS"+arg);
// var arg;
//
// my_func_stmt("Hola");
// my_func_exp("Hola");
//
// var one = function() {
// return 1;
// }
// console.log(one());
//
// //JS functions always requires an explicit return
//
// function addArgs(){
//   var sum = 0;
//   for(var i = 0; i < arguments.length; i++){
//     sum += arguments[i];
//   }
//   return sum;
//   // console.log('printing args:', arguments);
// }
// // addArgs(1,2,3,4);
// console.log(addArgs(3, 0.13, 0.01))
//
// //How do we know if a JS file is being loaded? Check network.


//function john(arg){
//alert(arg["text"]);
//}

// function times(number, block){
//   for (i = 0; i < number; i ++) {
//     block();
//   }
// }

// console.log(a_var === undefined);
// var a_var = 123;
// //console.log(func_var === undefined);
//
// function a_function() {
// console.log(func_var === undefined);
// var func_var = "func";
// }
//
// a_function();
//outside a function everything is global
function scope_func(){
var my_own_var = "hellojs1";

window.hello1 = function() {
  console.log(my_own_var);
  };
}
scope_func();


function times(how_many, block){
    for(i=0; i<=how_many; i++){
        block(i);
    }
}

function special_logger() {
    var day = new Date();
    return function(arg){
        console.log("It's "+day+" "+arg);
    }
}
