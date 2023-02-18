import { createAndRenderInputs } from "./render&createinputs.js";

// Creating container and button:
// //Container 

// //Button
const button = document.querySelector('.btn__main');
button.id = 'no-repeat';

// Function to create a random number based on a max-min number


// Function to create and render inputs with placeholder, id and value based on verbs arrays


createAndRenderInputs();


// Event to validate if the input value is the same as the verb which is the input id
// //Initialize variable with all the imputs correct on default

let correctInputs = 60;
// //Varibale which we use to validate if we have to repeat the test if all the verbs are correct
let isAllCorrect = false;

const doingTest = () => {
  const inputs = document.querySelectorAll('input');
  const inputsArray = Object.entries(inputs);
  inputs.forEach(item => {
    if (item.value === item.id) {
      // console.log(`correcto - ${item.value}`);
      item.className = 'correctValue';
      // correctInputs++;
    }else {
      // console.log(`incorrecto - ${item.value}`);
      item.value = item.id;
      item.className = 'incorrectValue';
      correctInputs--;
    };
    console.log(inputsArray[0][1].className);
  });

  if (correctInputs === 60) {
    button.textContent = 'Again';
    button.id = 'repeat';
  }
  console.log(button.id);

  correctInputs = 60;

  console.log(event);
}
console.log('MIAAAAA')
// button.addEventListener('click', (event) => doingTest());
// console.log(button)
if (button.id = 'no-repeat'){
  button.addEventListener('click', (event) => doingTest());
  console.log('no id')
}else if(button.id === 'repeat'){
  button.addEventListener('click', (event) => {
    window.location.reload();
  });
  console.log('imhere')
}
// button.addEventListener('click', (event) => {
//   const inputs = document.querySelectorAll('input');
//   const inputsArray = Object.entries(inputs);
//   inputs.forEach(item => {
//     if (item.value === item.id) {
//       // console.log(`correcto - ${item.value}`);
//       item.className = 'correctValue';
//       // correctInputs++;
//     }else {
//       // console.log(`incorrecto - ${item.value}`);
//       item.value = item.id;
//       item.className = 'incorrectValue';
//       correctInputs--;
//     };
//     console.log(inputsArray[0][1].className);
//   });

//   if (correctInputs === 60) {
//     button.textContent = 'Again';
//     button.id = 'repeat';
//   }
//   console.log(button.id);

//   correctInputs = 60;

//   console.log(event);
  
// });

