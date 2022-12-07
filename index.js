
// Creating container and inputs
const container = document.querySelector('.container');

const button = document.querySelector('.btn__main');

const inputsAdding = () => {
  const inputInfinitive = document.createElement('input');
  inputInfinitive.placeholder = 'Infinitive';

  const inputPast = document.createElement('input');
  inputPast.placeholder = 'Past';

  const inputPastParticiple = document.createElement('input');
  inputPastParticiple.placeholder = 'Past Participle';

  const inputGeround = document.createElement('input');
  inputGeround.placeholder = 'Geround';

  const inputSpanish = document.createElement('input');
  inputSpanish.placeholder = 'Spanish';

  container.append(inputInfinitive, inputPast, inputPastParticiple, inputGeround, inputSpanish);

}

const randomNumber = (max, min) => {
  const result = Math.floor((Math.random() * (max - min + 1)) + min);
  return result;
};


console.log(randomNumber(6, 1));

regularVerbs.forEach((item, counter) => {
  // console.log(counter)
  
  const tenseNumber = randomNumber(5, 1);
  
  const inputInfinitive = document.createElement('input');
  inputInfinitive.placeholder = 'Infinitive';
  inputInfinitive.id = item.infinitive;
  if(tenseNumber === 1){
    inputInfinitive.value = item.infinitive;
  }
  
  const inputPast = document.createElement('input');
  inputPast.placeholder = 'Past';
  inputPast.id = item.past;
  if(tenseNumber === 2){
    inputPast.value = item.past;
  }
  
  const inputPastParticiple = document.createElement('input');
  inputPastParticiple.placeholder = 'Past Participle';
  inputPastParticiple.id = item.pastParticiple;
  if(tenseNumber === 3){
    inputPastParticiple.value = item.pastParticiple;
  }
  
  const inputGeround = document.createElement('input');
  inputGeround.placeholder = 'Geround';
  inputGeround.id = item.geround;
  if(tenseNumber === 4){
    inputGeround.value = item.geround;
  }
  
  const inputSpanish = document.createElement('input');
  inputSpanish.placeholder = 'Spanish';
  inputSpanish.id = item.spanish;
  if(tenseNumber === 5){
    inputSpanish.value = item.spanish;
  }

  container.append(inputInfinitive, inputPast, inputPastParticiple, inputGeround, inputSpanish);
});

button.addEventListener('click', (event) => {
  // alert("Funciona pa");
  console.log(event)
  
})

// for (let index = 0; index < 4; index++) {
//   inputsAdding();
//   console.log(index);
// }


