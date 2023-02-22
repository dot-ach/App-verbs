import { createAndRenderInputs } from "./render&createinputs.js";

// //Button
const button = document.querySelector('.btn__main');
button.id = 'no-repeat';

createAndRenderInputs();

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
    // console.log(inputsArray[0][1].className);
  });

  
  if (correctInputs === 60) {
    button.textContent = 'Again';
    button.id = 'repeat';
    isAllCorrect = true;
  }
  // console.log(button.id);
  correctInputs = 60;


  // console.log(event);
}

button.addEventListener('click', (event) => doingTest());
// button.addEventListener('click', (event) => {
  
// })

if(isAllCorrect){
  console.log('reeeee');
}
console.log(isAllCorrect);