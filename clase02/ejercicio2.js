// Función para mostrar el resultado
function muestraResultadoCalculo(resultado) {
	document.getElementById("resultadoCalculadora").innerHTML = `<b>Resultado Cálculo:  ${resultado} <b>`
}

// Funcón para hacer el cálculo
function calculo(a, b, o, callback) {
	switch (o) {
		case "+":
			resultado = a + b
			break
		case "-":
			resultado = a - b
			break
		case "x":
			resultado = a * b
			break
		case "/":
			resultado = a / b
			break
	}
	if (isNaN(resultado)) {
		resultado = 0
	}
	callback(resultado)
}

// Obtener referencia a botones
const operaciones = document.querySelectorAll(".operaciones")
const cuandoSeHaceClick = function (evento) {
	operacion = this.innerText
	operando1 = parseFloat(document.getElementById("operando1").value)
	operando2 = parseFloat(document.getElementById("operando2").value)
	calculo(operando1, operando2, operacion, muestraResultadoCalculo)
}

operaciones.forEach((boton) => {
	boton.addEventListener("click", cuandoSeHaceClick)
})
