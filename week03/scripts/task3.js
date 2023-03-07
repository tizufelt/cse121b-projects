/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

// Step 2: In the function, return the sum of the parameters number1 and number2

// Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML 
//form controls with IDs of addend1 and addend2. Pass them to the add function

// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

// Step 9: Test all of the mathematical functionality of the task3.html page.

//ADDITION FUNCTION SECTION
function add(number1, number2){
    const total = parseInt(number1) + parseInt(number2);
    return total;
}

function addNumbers(){
    var number1 = document.getElementById("addend1").value;
    var number2 = document.getElementById("addend2").value;
    sumNumber = add(number1, number2);
    const output = document.getElementById('sum');
    output.setAttribute('value', sumNumber);
    console.log(sumNumber);   
}

var sumButton = document.getElementById("addNumbers");
sumButton.addEventListener("click", addNumbers, false);


//SUBTRACT FUNCTION SECTION
function subtract(number1, number2){
    const total = parseInt(number1) - parseInt(number2);
    return total;
}

function subtractNumbers(){
    var number1 = document.getElementById("minuend").value;
    var number2 = document.getElementById("subtrahend").value;
    sumNumber = subtract(number1, number2);
    const output = document.getElementById("difference");
    output.setAttribute('value', sumNumber);
    console.log(sumNumber);   
}

var sumButton = document.getElementById("subtractNumbers");
sumButton.addEventListener("click", subtractNumbers, false);


//MULTIPLICATION FUNCTION SECTION
function multiply(number1, number2){
    const total = parseInt(number1) * parseInt(number2);
    return total;
}

function multiplyNumbers(){
    var number1 = document.getElementById("factor1").value;
    var number2 = document.getElementById("factor2").value;
    sumNumber = multiply(number1, number2);
    const output = document.getElementById("product");
    output.setAttribute('value', sumNumber);
    console.log(sumNumber);   
}

var sumButton = document.getElementById("multiplyNumbers");
sumButton.addEventListener("click", multiplyNumbers, false);


//DIVISION FUNCTION SECTION
function divide(number1, number2){
    const total = parseInt(number1) / parseInt(number2);
    return total;
}

function divideNumbers(){
    var number1 = document.getElementById("dividend").value;
    var number2 = document.getElementById("divisor").value;
    sumNumber = divide(number1, number2);
    const output = document.getElementById("quotient");
    output.setAttribute('value', sumNumber);
      
}

var sumButton = document.getElementById("divideNumbers");
sumButton.addEventListener("click", divideNumbers, false);


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date

var today;
var year;

// Step 2: Declare a variable to hold the current year

var today = new Date();

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

var year = today.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year

document.querySelector("#year").innerHTML = year;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

const arrays = [...Array(26).keys()];
arrays.shift();

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"

document.querySelector("#array").innerHTML = arrays;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )

const odds = arrays.filter((num) => num % 2 === 1);
document.querySelector("#odds").innerHTML = odds;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"

const evens = arrays.filter((num) => num % 2 == 0);
document.querySelector("#evens").innerHTML = evens;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"

const sum = arrays.reduce((accumulator, currenValue) => {
    return accumulator + currenValue;
}, 0);
document.querySelector("#sumOfArray").innerHTML = sum;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"

const timesTwo = arrays.map((number) => number * 2);
document.querySelector("#multiplied").innerHTML = timesTwo;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"

const shrink = timesTwo.reduce((accumulator, currenValue) => {
    return accumulator + currenValue;
}, 0);
document.querySelector("#sumOfMultiplied").innerHTML = shrink

