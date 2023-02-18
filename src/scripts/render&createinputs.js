import {regularVerbs, irregularVerbs} from "./verbs.js"
import {randomNumber} from "./randomNumber.js"

const container = document.querySelector('.container');
const createAndRenderInputs = () => {
  irregularVerbs.forEach((item, counter) => {

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

}

export { createAndRenderInputs };