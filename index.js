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



// const inputInfinitive = document.createElement('input');
// inputInfinitive.placeholder = 'Infinitive';

// const inputPast = document.createElement('input');
// inputPast.placeholder = 'Past';

// const inputPastParticiple = document.createElement('input');
// inputPastParticiple.placeholder = 'Past Participle';

// const inputGeround = document.createElement('input');
// inputGeround.placeholder = 'Geround';

// const inputSpanish = document.createElement('input');
// inputSpanish.placeholder = 'Spanish';

// Adding inputs

// const add = (infinitive, past, pastParticiple, geround, spanish) => {
//   container.append(infinitive, past, pastParticiple, geround, spanish);
// }
for (let index = 0; index < 4; index++) {
  inputsAdding();
  console.log(index);
}
