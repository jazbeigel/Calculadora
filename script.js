let currentInput = ''; // DONDE GUARDO EL NUMERO DEL MOMENTO 
let previousInput = ''; // DONDE GUARDO EL NUM DE ANTES
let operator = ''; // DONDE GUARDO LA OPERCION DE AHORA (+,-,%,-)

// MUESTRO EN EL DISPLAY LO QUE ESTOY ESCRIBIENDO
function addNumber(num) {
    currentInput += num; // AGREGO LOS NUMEROS QUE ESTE AGREGANDO DE LOS DE ABAJO CON LOS addEventListener 
    document.getElementById('display').value = currentInput; // MUESTRO EN DISPLAY
}

// CUANDO CLICKEA LO TOMA YLO MUESTRA EN EL DISPLAY
document.getElementById('numero1').addEventListener('click', () => addNumber('1'));
document.getElementById('numero2').addEventListener('click', () => addNumber('2'));
document.getElementById('numero3').addEventListener('click', () => addNumber('3'));
document.getElementById('numero4').addEventListener('click', () => addNumber('4'));
document.getElementById('numero5').addEventListener('click', () => addNumber('5'));
document.getElementById('numero6').addEventListener('click', () => addNumber('6'));
document.getElementById('numero7').addEventListener('click', () => addNumber('7'));
document.getElementById('numero8').addEventListener('click', () => addNumber('8'));
document.getElementById('numero9').addEventListener('click', () => addNumber('9'));
document.getElementById('numero0').addEventListener('click', () => addNumber('0'));

function sumo() {
    previousInput = currentInput; 
    currentInput = ''; 
    operator = '+'; 
}

function resto() {
    previousInput = currentInput;
    currentInput = '';
    operator = '-';
}

function multiplico() {
    previousInput = currentInput;
    currentInput = '';
    operator = '*';
}

function divido() {
    previousInput = currentInput;
    currentInput = '';
    operator = '/';
}


function calculoResultado() {
    let result = 0;
    const num1 = parseFloat(previousInput); // PARSEFLOAT PORQUE SON NUMEROS DECIMALES, SINO SERIA PARSEINT QUE ES PARA ENTEROS
    const num2 = parseFloat(currentInput);
    
    
    if (operator === '+') result = num1 + num2;
    if (operator === '-') result = num1 - num2;
    if (operator === '*') result = num1 * num2;
    if (operator === '/') result = num1 / num2;

    // LOS IF SON HACIENDO LAS OPERACIONES
    if (result > 0) {
    document.getElementById('displayMasCero').value = result; 
    document.getElementById('displayMenosCero').value = '';
    }
    if (result < 0){
    document.getElementById('displayMenosCero').value = result; 
    document.getElementById('displayMasCero').value = ''; 
    }
    
    currentInput = result.toString();
    previousInput = ''; 
    operator = ''; 

    // TRAE OPERATOR Y PREVIOUSEA QUE NO TENGA NUNGUN SIGNO DEVUELTA
}


function borrar() {
    currentInput = '';
    previousInput = '';
    operator = '';
    document.getElementById('display').value = '0'; 
    document.getElementById('displayMasCero').value = ''; 
    document.getElementById('displayMenosCero').value = ''; 
}
