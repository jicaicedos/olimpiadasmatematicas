var express = require("express")
var bodyParser = require('body-parser') // Leer parametros enviados desde formularios

var User = require('./models/user').User // Esquema de Users
var Usuario = require("./models/usuario").Usuario // Esquema de Usuario del sistema
var Pregunta = require("./models/pregunta").Pregunta // Esquema de Pregunta


var preguntas

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
	res.render("index")
})


// Perfil Administrador
app.get("/administrador", (req, res) => {
	res.render("administrador")
})

app.get("/estudiante", (req, res) => {
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

	    // Obtnemos las preguntas y las agregamos en el arreglo de preguntas: Cantidad 20 preguntas
	    preguntas = []
	    for(let i=0; i<20; i++) {
	    	preguntas[i] = docs[arreglo[i]]
	    }
	    res.render("estudiante", {preguntas} )
	})	

		
})

// Perfil estudiante => BOTON del formulario
app.post("/estudiante", (req, res) => {
	res.render("estudiante", {preguntas})
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

// app.post("/administrador", (req, res) => {
// 	let mensaje = ""
// 	User.find( {"user_ID" : req.body.idUsuario}, "user_rol", (error, docs) => {
// 		if( docs.length==0 ) {
// 			let mensaje = "El usuario o contraseña no coinciden"
// 			res.render("index", {mensaje})
// 		} else {
// 			if ( docs[0].user_rol=="ADMINISTRADOR" ) {
// 				res.render("administrador")
// 			} else if( docs[0].user_rol=="DOCENTE" ) {
// 				res.render("docente")
// 			} else if( docs[0].user_rol=="ESTUDIANTE" ) {
// 				res.render("estudiante")
// 			}
// 		}
// 	})
// });

app.post("/administrador", (req, res) => {
	// let mensaje = ""
	// var id_usuario = req.body.idUsuario
	// User.find( {"user_ID" : req.body.idUsuario, "user_password": req.body.claveUsuario }, "user_rol", (error, docs) => {
	// 	if( docs.length==0 ) {
	// 		let mensaje = "El usuario o contraseña no coinciden"
	// 		res.render("index", {mensaje})
	// 	} else {
	// 		if ( docs[0].user_rol=="ADMINISTRADOR" ) {
	// 			res.render("administrador")
	// 		} else if( docs[0].user_rol=="DOCENTE" ) {
	// 			res.render("docente")
	// 		} else if( docs[0].user_rol=="ESTUDIANTE" ) {
	// 			res.render("estudiante", {id_usuario})
	// 		}
	// 	}
	// })
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

// Puerto de escucha del servidor
app.listen(8888)
