// Funcion para mostrar los valores por pantalla

function mostrarValorSeguro() {
	var tipoSeguro = document.getElementById("tipoSeguro").value
	var valor = 0

	if (tipoSeguro === "basico") {
		valor = 500
	} else if (tipoSeguro === "intermedio") {
		valor = 1000
	} else if (tipoSeguro === "premium") {
		valor = 1500
	}

	document.getElementById("valorSeguro").innerHTML = "Valor del Seguro: $" + valor
}

// funcion para resetear el form

function enviarYRestablecer() {
	var formulario = document.getElementById("form")
	formulario.submit() // Envía el formulario

	// Espera un breve momento y luego restablece el formulario
	setTimeout(function () {
		formulario.reset()
	}, 500) // 500 milisegundos (medio segundo)
}
