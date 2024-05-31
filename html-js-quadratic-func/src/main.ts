import './style.css'

const aInput = document.getElementById('a') as HTMLInputElement;
const bInput = document.getElementById('b') as HTMLInputElement;
const cInput = document.getElementById('c') as HTMLInputElement;

const msgSpan = document.getElementById('msg') as HTMLSpanElement;

const deltaElement = document.getElementById('delta') as HTMLInputElement
const x0Element = document.getElementById('x0') as HTMLInputElement
const x1Element = document.getElementById('x1') as HTMLInputElement
const x2Element = document.getElementById('x2') as HTMLInputElement

let a = 0;
let b = 0;
let c = 0;

let delta = 0;
let x0 = 0;
let x1 = 0;
let x2 = 0;
let isX0 = false;

aInput.onchange = () => {
  a = aInput.valueAsNumber;
  onParamChange();
};

bInput.onchange = () => {
  b = bInput.valueAsNumber;
  onParamChange();
};

cInput.onchange = () => {
  c = cInput.valueAsNumber;
  onParamChange();
};

function onParamChange() {
  delta = (b ** 2) - 4 * a * c;
  deltaElement.valueAsNumber = delta;

  x0 = x1 = x2 = 0;
  isX0 = false;
  x0Element.value = x1Element.value = x2Element.value = ''
  msgSpan.textContent = ''

  if(delta == 0) {
    x0 = -b / 2 * a;
    isX0 = true;
    x0Element.valueAsNumber = x0
  } else if(delta > 0) {
    x1 = (-b - Math.sqrt(delta)) / 2 * a;
    x2 = (-b + Math.sqrt(delta)) / 2 * a;
    x1Element.valueAsNumber = x1
    x2Element.valueAsNumber = x2

  } else {
    msgSpan.textContent = 'Brak rozwiązań'
  }
}
