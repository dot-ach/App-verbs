
// Creating container and inputs
const container = document.querySelector('.container');

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
  if(tenseNumber === 1){
    inputInfinitive.value = item.infinitive;
  }
  
  const inputPast = document.createElement('input');
  inputPast.placeholder = 'Past';
  if(tenseNumber === 2){
    inputPast.value = item.past;
  }
  
  const inputPastParticiple = document.createElement('input');
  inputPastParticiple.placeholder = 'Past Participle';
  if(tenseNumber === 3){
    inputPastParticiple.value = item.pastParticiple;
  }
  
  const inputGeround = document.createElement('input');
  inputGeround.placeholder = 'Geround';
  if(tenseNumber === 4){
    inputGeround.value = item.geround;
  }
  
  const inputSpanish = document.createElement('input');
  inputSpanish.placeholder = 'Spanish';
  if(tenseNumber === 5){
    inputSpanish.value = item.spanish;
  }

  container.append(inputInfinitive, inputPast, inputPastParticiple, inputGeround, inputSpanish);
});

// for (let index = 0; index < 4; index++) {
//   inputsAdding();
//   console.log(index);
// }


