//DECLARACION DE VARIABLES 

let resultFinal = '0';
let resultParcial = '0';

// OBTENIENDO ELEMENTOS DEL DOM 
const resultadoArea = document.querySelector("#resultadoArea"); // AREA DE OPERACIONES
const resultadoFinal = document.getElementById("resultadoFinal"); // AREA DE RESULTADO 

//FUNCIONES
function buttonsNum(value) {
    if (resultParcial == '0') {
        resultParcial = '';
        resultParcial += value;
    } else if (resultParcial !== '0') {
        resultParcial += value;
    }
    resultadoArea.innerHTML = resultParcial;
    console.log(resultParcial);
}
function buttonsCLEAR(value) {
    if (value == 'CE') {
        resultFinal = '';
        resultParcial = '0';
        resultadoFinal.innerHTML = resultFinal;
    } else if (value === 'DEL') {
        if (resultParcial.length == 1) {
            resultParcial = '0';
        } else {
            const deleteAnLetter = resultParcial.substring(0, resultParcial.length - 1);
            resultParcial = deleteAnLetter;
        }
    }
    resultadoArea.innerHTML = resultParcial;
    console.log(resultParcial);
}
function button_result() {
    try {
        resultFinal = eval(resultParcial);
        resultadoFinal.innerHTML = parseFloat(resultFinal);
        console.log(resultFinal);
    } catch (error) {
        resultadoFinal.innerHTML = 'Syntax Error';
    }
}
function buttonsOperadores(operador) {
    if ((operador === '(') && (resultParcial == '0')) {
        resultParcial = '';
    } else if ((operador === '-') && (resultParcial == '0')) {
        resultParcial = '';
    } else if (operador === ')' && resultParcial === '0') {
        return resultParcial;
    } else {
    }
    resultParcial += operador;
    resultadoArea.innerHTML = resultParcial;
    console.log(resultParcial);
}

// USANDO LOS BOTONES SOLO POR SU ID, SIN OBTENERLOS PREVIAMENTE
// EVENTOS DE LOS BOTONES
button_0.onclick = () => buttonsNum('0');
button_1.onclick = () => buttonsNum('1');
button_2.onclick = () => buttonsNum('2');
button_3.onclick = () => buttonsNum('3');
button_4.onclick = () => buttonsNum('4');
button_5.onclick = () => buttonsNum('5');
button_6.onclick = () => buttonsNum('6');
button_7.onclick = () => buttonsNum('7');
button_8.onclick = () => buttonsNum('8');
button_9.onclick = () => buttonsNum('9');
button_igual.onclick = () => button_result();
button_CE.onclick = () => buttonsCLEAR('CE');
button_DEL.onclick = () => buttonsCLEAR('DEL');
button_coma.onclick = () => buttonsOperadores(',');
button_suma.onclick = () => buttonsOperadores('+');
button_resta.onclick = () => buttonsOperadores('-');
button_X.onclick = () => buttonsOperadores('*');
button_division.onclick = () => buttonsOperadores('/');
button_parentesis1.onclick = () => buttonsOperadores('(');
button_parentesis2.onclick = () => buttonsOperadores(')');






