var express = require("express")
var bodyParser = require('body-parser') // Leer parametros enviados desde formularios

var User = require('./models/user').User // Esquema de Users
var Usuario = require("./models/usuario").Usuario // Esquema de Usuario del sistema
var Pregunta = require("./models/pregunta").Pregunta // Esquema de Pregunta
var Respuesta = require("./models/respuesta").Respuesta

// Varibales globales
var preguntas
var estudianteActual
var fechaInicioPrueba
var fechaFinalPrueba

/*		MAIN	*/

var app = express()

app.set("view engine", "pug")

app.use("/public", express.static("public"))

// Se establece el middleware para reconocer los archivos JSON
app.use(bodyParser.json())

// Con este middleware se puede leer correctamente los parametros que vienen en la URL
// mediante los llamados o enviados con el metodo POST, se debe dejar el valor en 'true'
app.use(bodyParser.urlencoded({extended: true}))

// index
app.get("/", (req, res) => {
	console.log("GET ->  /")
	res.render("index")
})

app.post("/", (req, res) => {
	console.log("POST -> /")
	let mensaje = ""
	var id_usuario = req.body.idUsuario
	User.find( {"user_ID" : req.body.idUsuario, "user_password": req.body.claveUsuario }, "user_rol", (error, docs) => {
		if( docs.length==0 ) {
			let mensaje = "El usuario o contraseña no coinciden"
			res.render("index", {mensaje})
		} else {
			if ( docs[0].user_rol=="ADMINISTRADOR" ) {
				res.render("administrador")
			} else if( docs[0].user_rol=="DOCENTE" ) {
				res.render("docente")
			} else if( docs[0].user_rol=="ESTUDIANTE" ) {

				// Consultamos el usuario "ESTUDIANTE" que contestará la prueba				
				Usuario.find({ "usu_ID": id_usuario}, "usu_ID usu_nombre usu_grado", (err, usuarioActual) => {
					estudianteActual = usuarioActual
					console.log(estudianteActual)
					res.render("estudianteBienvenido", {estudianteActual} )
				})				
			}
		}
	})	
})

// Perfil Administrador
app.get("/administrador", (req, res) => {
	console.log("GET -> administrador...")
	res.render("administrador")
})

/* =====================================================
					ESTUDIANTE	
======================================================== */
// Perfil estudiante -> Método GET
app.get("/estudiante", (req, res) => {
	fechaInicioPrueba = new Date()	
	console.log("GET -> estudiante")
	console.log(estudianteActual)
	var arreglo = []
	Pregunta.find({}, (error, docs) => {
		let totalPreguntas = docs.length		

		// Creamos arreglo con numeros igual a la cantidad de preguntas
		for(let i=0; i<totalPreguntas; i++) {
			arreglo[i] = i
		}

		// Barajamos el arreglo de tal manera que queda con valores aleatorios y sin repetir
	    let i, j, k
	    for (i = arreglo.length; i; i--) {
	        j = Math.floor(Math.random() * i)
	        k = arreglo[i-1]
	        arreglo[i-1] = arreglo[j]
	        arreglo[j] = k
	    }

	    // Obtnemos las preguntas y las agregamos en el arreglo de preguntas
	    // Cantidad 20 preguntas
	    preguntas = []
	    for(let i=0; i<20; i++) {
	    	preguntas[i] = docs[arreglo[i]]
	    }
	    // console.log("Respuestas: "+req.body.opciones)
	    res.render("estudiante", {preguntas, estudianteActual})
	})

})

// Perfil estudiante -> Método POST
app.post("/estudiante", (req, res) => {
	console.log("POST -> estudiante")

	var respuestas = []
	
	respuestas[0] = req.body.opciones1
	respuestas[1] = req.body.opciones2
	respuestas[2] = req.body.opciones3
	respuestas[3] = req.body.opciones4
	respuestas[4] = req.body.opciones5
	respuestas[5] = req.body.opciones6
	respuestas[6] = req.body.opciones7
	respuestas[7] = req.body.opciones8
	respuestas[8] = req.body.opciones9
	respuestas[9] = req.body.opciones10
	respuestas[10] = req.body.opciones11
	respuestas[11] = req.body.opciones12
	respuestas[12] = req.body.opciones13
	respuestas[13] = req.body.opciones14
	respuestas[14] = req.body.opciones15
	respuestas[15] = req.body.opciones16
	respuestas[16] = req.body.opciones17
	respuestas[17] = req.body.opciones18
	respuestas[18] = req.body.opciones19
	respuestas[19] = req.body.opciones20

	// Respuestas correctas
	let respuestasCorrectas = []
	for( let i=0; i<20; i++ ) {
		respuestasCorrectas[i] = preguntas[i].pre_respuesta
	}

	// Respuestas del estudiante
	for( let i=0; i<20; i++ ) {
		respuestas[i] = parseInt(respuestas[i])
	}	

	// Comparar las respuestas de estudiantes y las del sistema
	let contador = 0
	for( let i=0; i<20; i++ ) {
		if( respuestas[i]==preguntas[i].pre_respuesta ) {
			contador++
		}
		else {}
	}
	
	// Guardar las respuestas en la base de datos
	let fecha = new Date()
	let dia = fecha.getDate(), 		// Día
	let mes = fecha.getMonth(),      // Mes
	let anio = fecha.getFullYear(),  // Año

	fechaFinalPrueba = new Date()	
	var respuesta = new Respuesta ({
		usu_ID: estudianteActual[0].usu_ID,
		usu_nombre: estudianteActual[0].usu_nombre,
		usu_respuesta: respuestas,
		res_correcta: respuestasCorrectas,		
		puntajeObtenido: contador,
		tiempo: calcularTiempoPrueba(),
		res_dia: dia, 		// Día
		res_mes: mes,      // Mes
		res_anio: anio,  // Año
		res_tiempo_inicial: fechaInicioPrueba,
		res_tiempo_final: fechaFinalPrueba
	});

	respuesta.save().then( (est) => {
		let tiempo = calcularTiempoPrueba()
		res.render("resultadoEstudiante", {estudianteActual, respuestas, preguntas, contador, tiempo, dia, mes, anio })
	})
	
})

// Listar docentes
app.get("/consultarDocentes", (req, res) => {	
	Usuario.find( {"usu_tipo": "DOCENTE"}, "usu_ID usu_nombre usu_grado usu_genero usu_edad usu_num_celular", (error, docs) => {
		let docentes = []
		for(let i=0; i<docs.length; i++ ) {
			docentes[i] = {
				ID: docs[i].usu_ID,
				nombre: docs[i].usu_nombre,
				grado: docs[i].usu_grado,
				genero: docs[i].usu_genero,
				edad: docs[i].usu_edad,
				num_celular: docs[i].usu_num_celular
			}
		}
		res.render("consultarDocentes", {docentes})	
	})	
})

// Listar estudiantes
app.get("/consultarEstudiantes", (req, res) => {
	Usuario.find( {"usu_tipo": "ESTUDIANTE"}, "usu_ID usu_nombre usu_grado usu_genero usu_edad usu_num_celular", (error, docs) => {
		let estudiantes = []
		for(let i=0; i<docs.length; i++ ) {
			estudiantes[i] = {
				ID: docs[i].usu_ID,
				nombre: docs[i].usu_nombre,
				grado: docs[i].usu_grado,
				genero: docs[i].usu_genero,
				edad: docs[i].usu_edad,
				num_celular: docs[i].usu_num_celular
			}
		}
		res.render( "consultarEstudiantes", {estudiantes} )
	})

})


app.post("/administrador", (req, res) => {
	console.log("POST -> administrador")
	let mensaje = ""
	var id_usuario = req.body.idUsuario
	User.find( {"user_ID" : req.body.idUsuario, "user_password": req.body.claveUsuario }, "user_rol", (error, docs) => {
		if( docs.length==0 ) {
			let mensaje = "El usuario o contraseña no coinciden"
			res.render("index", {mensaje})
		} else {
			if ( docs[0].user_rol=="ADMINISTRADOR" ) {
				res.render("administrador")
			} else if( docs[0].user_rol=="DOCENTE" ) {
				res.render("docente")
			} else if( docs[0].user_rol=="ESTUDIANTE" ) {
				res.render("estudiante", {id_usuario})
			}
		}
	})
});

// Perfil de docentes, puede ingresar preguntas
app.post("/docente", (req, res) => {
	// Obtener la cantidad de preguntas en el sistema
	Pregunta.find({}, (error, docs) => {
		// Objeto a guardar en la base de datos		
		var pregunta = new Pregunta({
			pre_ID: docs.length+1,
			pre_enunciado: req.body.enunciado,
			pre_opcion1: req.body.opcion1,
			pre_opcion2: req.body.opcion2,
			pre_opcion3: req.body.opcion3,
			pre_respuesta: req.body.opciones
		});

		let mensaje = ""
		pregunta.save().then( (est) => {
			mensaje = "Guardado exitosamente la pregunta!"
			res.render("docente", {mensaje})
		}, (error) => {
			mensaje = "No se pudo guardar la pregunta.... Verificar si el servidor de base de datos está inicializado."
			res.render("docente", {mensaje})
		})
	})
})

function calcularTiempoPrueba() {
	// Formato de las fecha:   MM/DD/AAAA HH:MM:SS
	let fechaI = fechaInicioPrueba.getMonth()+"/"+fechaInicioPrueba.getDate()+"/"+fechaInicioPrueba.getFullYear()+" "+
			     fechaInicioPrueba.getHours()+":"+fechaInicioPrueba.getMinutes()+":"+fechaInicioPrueba.getSeconds()

	let fechaF = fechaFinalPrueba.getMonth()+"/"+fechaFinalPrueba.getDate()+"/"+fechaFinalPrueba.getFullYear()+" "+
	             fechaFinalPrueba.getHours()+":"+fechaFinalPrueba.getMinutes()+":"+fechaFinalPrueba.getSeconds()

    let fInicio = new Date(fechaI)
    let fFinal = new Date(fechaF)

	let milisegundos = fFinal - fInicio
	let numeroSegundos = Math.floor(milisegundos/1000)
	let numeroMinutos = Math.floor(numeroSegundos/60)

	let horas = Math.floor(numeroMinutos/60)
	let minutos = Math.floor(numeroMinutos%60)
	let segundos = Math.floor(numeroSegundos%60)

	return ("Tiempo prueba: "+horas+" horas "+minutos+" minutos "+segundos+" segundos")
}

// Puerto de escucha del servidor
app.listen(8888)

