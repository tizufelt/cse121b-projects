/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let me = "Tim Zufelt";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").innerHTML = me;

// Step 3: declare and instantiate a variable to hold the current year
const today = new Date();
const year = today.getFullYear();


// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").innerHTML = year;

// Step 5: declare and instantiate a variable to hold the name of your picture
let imgTitle = "living my best self!"

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("img").setAttribute('src', 'images/IMG_0158.jpeg');



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let favFood = ["Pizza", " Lasagna", " and BBQ"]; 

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector("#food").innerHTML = favFood;

// Step 3: declare and instantiate a variable to hold another favorite food

let moreFood = " Spaghetti";

// Step 4: add the variable holding another favorite food to the favorite food array
favFood.push(moreFood);

// Step 5: repeat Step 2
document.querySelector("#food").innerHTML = favFood;

// Step 6: remove the first element in the favorite foods array
favFood.shift();

// Step 7: repeat Step 2
document.querySelector("#food").innerHTML = favFood;

// Step 8: remove the last element in the favorite foods array
favFood.pop();

// Step 7: repeat Step 2
document.querySelector("#food").innerHTML = favFood;


