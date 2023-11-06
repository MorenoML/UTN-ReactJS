// Función de devolución de llamada: muestraResultado
function muestraResultado(resultado) {
	document.getElementById("suma").innerHTML = resultado
}

// Haciendo uso de la función callback
function suma(a, b, callback) {
	let c = a + b
	callback(c)
}

// Llamo a la función suma con 2 valores y una función callback, que debe esperar el resultado de la suma para poder mostrarlo.
suma(25, 100, muestraResultado)
