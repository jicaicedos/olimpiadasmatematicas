var express = require("express")
var bodyParser = require('body-parser') // Leer parametros enviados desde formularios
var User = require('./models/user').User // Esquema de Users
var Usuario = require("./models/usuario").Usuario 

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


// Perfil estudiante
app.get("/estudiante", (req, res) => {
	res.render("estudiante")
})

// Listar estudiantes
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



app.post("/administrador", (req, res) => {
	let mensaje = ""
	User.find( {"user_ID" : req.body.idUsuario}, "user_rol", (error, docs) => {		
		if( docs.length==0 ) {
			let mensaje = "El usuario o contraseña no coinciden"
			res.render("index", {mensaje})
		} else {
			if ( docs[0].user_rol=="ADMINISTRADOR" ) {
				res.render("administrador")
			} else if(docs[0].user_rol=="DOCENTE") {
				res.render("docente")
			} else if(docs[0].user_rol=="ESTUDIANTE") {
				res.render("estudiante")
			}
		}		
	})
});

app.listen(8888)
