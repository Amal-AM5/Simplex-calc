const inputOne = document.getElementById('input-one');
const inputTwo = document.getElementById('input-two');
const resultOutput = document.getElementById('result');

const btnPlus = document.getElementById('btn-plus');
const btnSub = document.getElementById('btn-sub');
const btnPro = document.getElementById('btn-pro');
const btnDiv = document.getElementById('btn-div');
const btnMod = document.getElementById('btn-mod');
const btnClear = document.getElementById('btn-clear');


// fn sum
function operationSum() {
    const dataOne = +inputOne.value;
    const dataTwo = +inputTwo.value;

    const result = dataOne + dataTwo;
    resultOutput.setAttribute('value', `${result}`);
}

// fn sub
function operationSub() {
    const dataOne = +inputOne.value;
    const dataTwo = +inputTwo.value;

    const result = dataOne - dataTwo;
    resultOutput.setAttribute('value', `${result}`);
}

// fn pro
function operationPro() {
    const dataOne = +inputOne.value;
    const dataTwo = +inputTwo.value;

    const result = dataOne * dataTwo;
    resultOutput.setAttribute('value', `${result}`);
}

// fn div
function operationDiv() {
    const dataOne = +inputOne.value;
    const dataTwo = +inputTwo.value;

    const result = dataOne / dataTwo;
    resultOutput.setAttribute('value', `${result}`);
}

// fn div
function operationMod() {
    const dataOne = +inputOne.value;
    const dataTwo = +inputTwo.value;

    const result = dataOne % dataTwo;
    resultOutput.setAttribute('value', `${result}`);
}

// fn clear
function operationClear() {
    inputOne.value = '';
    inputTwo.value = '';
    resultOutput.value = '';
}



// Event listner
btnPlus.addEventListener('click', operationSum);
btnSub.addEventListener('click', operationSub);
btnPro.addEventListener('click', operationPro);
btnDiv.addEventListener('click', operationDiv);
btnMod.addEventListener('click', operationMod);
btnClear.addEventListener('click', operationClear);

