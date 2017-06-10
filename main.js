var buttons = document.querySelectorAll(".button");
console.log([buttons]);

var operators = document.querySelectorAll(".operator");
console.log([operators]);

var inputResult = document.querySelector("#input-result");


var inputVal = [];

for (var i = 0; i<buttons.length; i++){

  buttons[i].addEventListener('click', function(event){

  console.log('You just clicked', event.target.value);

  inputVal.push(event.target.value);

  inputResult.innerHTML=inputResult.innerHTML+event.target.value;

  console.log([inputVal]);
});
}
var calculate = document.querySelector('#calculate');
var calculateNOW = function(){
  if (event.target.value === "=") {
    eval(inputVal);
    inputResult.innerHTML="";
  }
}
// for (var i = 0; i<operators.length; i++){
//
//   operators[i].addEventListener('click', function(event){
//
//   console.log('You just clicked', event.target.value);
//
//   // inputVal.push(event.target.value);
//
//   console.log([inputVal]);
// });
// }
