function calcularTiempoPrueba(fechaInicio, fechaFinal) {

    let fInicio = new Date(fechaInicio)
    let fFinal = new Date(fechaFinal)

	let milisegundos = fFinal - fInicio

	let numeroSegundos = Math.floor(milisegundos/1000)

	let numeroMinutos = Math.floor(numeroSegundos/60)

	let horas = Math.floor(numeroMinutos/60)

	let minutos = Math.floor(numeroMinutos%60)

	let segundos = Math.floor(numeroSegundos%60)

	console.log("Tiempo: "+horas+":"+minutos+":"+segundos)
}

// MM/DD/AAAA
var finicio = "03/09/2018 12:07:44"
// var ffinal  = "03/09/2018 12:13:07"
var ffinal  = "03/10/2018 01:22:07"

calcularTiempoPrueba(finicio, ffinal)

