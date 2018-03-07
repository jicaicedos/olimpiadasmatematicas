var mongoose = require("mongoose")
var Schema = mongoose.Schema

mongoose.connect("mongodb://localhost/olimpiadasmatematicas")

var pregunta_schema = new Schema({
	pre_ID: {type: Number, required: true},
	pre_enunciado: {type: String, required: true},
	pre_opcion1: {type: String, required: true},
	pre_opcion2: {type: String, required: true},
	pre_opcion3: {type: String, required: true},
	pre_respuesta: {type: Number, required: true}
});

var Pregunta = mongoose.model("Pregunta", pregunta_schema)

module.exports.Pregunta = Pregunta