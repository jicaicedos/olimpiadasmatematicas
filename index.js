var express = require("express")

/*		MAIN	*/

var app = express()

app.set("view engine", "pug")

app.use("/public", express.static("public"))

// index
app.get("/", (req, res) => {
	res.render("index")
})

// Perfil estudiante
app.get("/estudiante", (req, res) => {
	res.render("estudiante")
})

app.listen(8888)

