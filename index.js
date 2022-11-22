// import { regularVerbs } from "./verbs";
// import { irregularVerbs } from "./verbs";

// // const tensify = require('tensify');
// const getTensify = async () => {
  //   const result = await fetch('tensify');
  //   const object = await result.json();
  //   console.log(object);x
  // }
  // console.log(tensify('do').past);
  
  console.log(regularVerbs[0].infinitive, irregularVerbs)
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


for (let index = 0; index < 4; index++) {
  inputsAdding();
  console.log(index);
}
