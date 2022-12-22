// Creating container and button:
// //Container 
const container = document.querySelector('.container');
// //Button
const button = document.querySelector('.btn__main');

// Function to create a random number based on a max-min number
const randomNumber = (max, min) => {
  const result = Math.floor((Math.random() * (max - min + 1)) + min);
  return result;
};

// Function to create and render inputs with placeholder, id and value based on verbs arrays
regularVerbs.forEach((item, counter) => {

  const tenseNumber = randomNumber(6, 1);

  const inputInfinitive = document.createElement('input');
  inputInfinitive.placeholder = 'Infinitive';
  inputInfinitive.id = item.infinitive;
  if (tenseNumber === 1) {
    inputInfinitive.value = item.infinitive;
  };

  const inputTrdPerson = document.createElement('input');
  inputTrdPerson.placeholder = 'Third Person';
  inputTrdPerson.id = item.trdPerson;
  if (tenseNumber === 2) {
    inputTrdPerson.value = item.trdPerson;
  };

  const inputPast = document.createElement('input');
  inputPast.placeholder = 'Past';
  inputPast.id = item.past;
  if (tenseNumber === 3) {
    inputPast.value = item.past;
  };

  const inputPastParticiple = document.createElement('input');
  inputPastParticiple.placeholder = 'Past Participle';
  inputPastParticiple.id = item.pastParticiple;
  if (tenseNumber === 4) {
    inputPastParticiple.value = item.pastParticiple;
  };

  const inputGeround = document.createElement('input');
  inputGeround.placeholder = 'Geround';
  inputGeround.id = item.geround;
  if (tenseNumber === 5) {
    inputGeround.value = item.geround;
  };

  const inputSpanish = document.createElement('input');
  inputSpanish.placeholder = 'Spanish';
  inputSpanish.id = item.spanish;
  if (tenseNumber === 6) {
    inputSpanish.value = item.spanish;
  };

  container.append(inputInfinitive, inputTrdPerson, inputPast, inputPastParticiple, inputGeround, inputSpanish);
});

// Event to validate if the input value is the same as the verb which is the input id

button.addEventListener('click', (event) => {
  const inputs = document.querySelectorAll('input');
  const inputsArray = Object.entries(inputs);
  inputs.forEach(item => {
    if (item.value === item.id) {
      // console.log(`correcto - ${item.value}`);
      item.className = 'correctValue';
    } else {
      // console.log(`incorrecto - ${item.value}`);
      item.value = item.id;
      item.className = 'incorrectValue';
    };
  console.log(inputsArray[0][1].className);
  });
});


