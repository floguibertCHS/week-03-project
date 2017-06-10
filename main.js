var buttons = document.querySelectorAll(".button");
console.log([buttons]);

var operators = document.querySelectorAll(".operator");
console.log([operators]);

var calculate = document.querySelectorAll(".calculate");
console.log([calculate]);

var clear = document.querySelectorAll(".clear");
console.log([clear]);

var inputResult = document.querySelector("#input-result");

var inputVal = [];

// FUNCTION = click event on operators + push button value to array & display on front-end

  for (var i = 0; i<operators.length; i++){

    operators[i].addEventListener('click', function(event){

      console.log('You just clicked', event.target.value);

        inputVal.push(event.target.value);

          inputResult.innerHTML=inputResult.innerHTML+event.target.value;

            var btnVal = this.innerHTML;

              console.log([btnVal]);
});
}

// FUNCTION = click event on buttons + push button value to array & display on front-end

  for (var i = 0; i<buttons.length; i++){

    buttons[i].addEventListener('click', function(event){

      console.log('You just clicked', event.target.value);

        // inputVal.push(event.target.value);

          inputResult.innerHTML=inputResult.innerHTML+event.target.value;

            var btnVal = this.innerHTML;

              console.log([btnVal]);
});
}

// FUNCTION = calculate when = is clicked
calculate[0].addEventListener('click',function(event){

  console.log('You just clicked', event.target.value);

    inputVal.unshift(inputResult.innerHTML);

    console.log([inputVal]);

      var resultString = inputVal[0];

      console.log(resultString);

        var result = eval(resultString);

          console.log(result);

          inputResult.innerHTML=result;
        });


// FUNCTION = clear when C is clicked

clear[0].addEventListener('click',function(event){

            console.log('You just clicked clear', event.target.value);

            inputResult.innerHTML = "";

          });

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
