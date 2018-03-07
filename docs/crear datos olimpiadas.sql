-- Borrar la base de datos
db.dropDatabase();

-- Crear base de datos
use olimpiadasmatematicas;

-- Mostrar las colecciones
-- show collections;

-- Datos de 10 estudiantes
db.usuarios.insert({
	usu_ID: 1075228767, 
	usu_nombre: "MARÍA ALEJANDRA BRAVO VILLALBA", 
	usu_grado:"DECIMO", usu_genero:"FEMENINO", 
	usu_edad:15, 	
	usu_num_celular:3118248272,
	usu_tipo: "ESTUDIANTE"
})
db.usuarios.insert({
	usu_ID: 1127073731, 
	usu_nombre: "ANGIE LISED OLARTE", 
	usu_grado:"UNDECIMO", 
	usu_genero:"FEMENINO", 
	usu_edad:16, 
	usu_num_celular:3205808511,
	usu_tipo: "ESTUDIANTE"
})
db.usuarios.insert({
	usu_ID: 1083894810, 
	usu_nombre: "LEYDI PAOLA ARTUNDUAGA", 
	usu_grado:"DECIMO", 
	usu_genero:"FEMENINO", 
	usu_edad:16, 
	usu_num_celular:3205808511,
	usu_tipo: "ESTUDIANTE"
})
db.usuarios.insert({
	usu_ID: 1080262111, 
	usu_nombre: "JUANA GABRIELA ANACONA", 
	usu_grado:"DECIMO", 
	usu_genero:"FEMENINO", 
	usu_edad:15, 
	usu_num_celular:3143478487,
	usu_tipo: "ESTUDIANTE"
})
db.usuarios.insert({
	usu_ID: 1083895699, 
	usu_nombre: "EMANUEL GOMEZ", 
	usu_grado:"DECIMO", 
	usu_genero:"MASCULINO", 
	usu_edad:15, 
	usu_num_celular:3118423489,
	usu_tipo: "ESTUDIANTE"
})
db.usuarios.insert({
	usu_ID: 1083893864, 
	usu_nombre: "SHARIK TATIANA HERNANDEZ", 
	usu_grado:"DECIMO", 
	usu_genero:"FEMENINO", 
	usu_edad:16, 
	usu_num_celular:3204132781,
	usu_tipo: "ESTUDIANTE"
})
db.usuarios.insert({
	usu_ID: 1117510298, 
	usu_nombre: "CRISTIAN CAMILO MONROY", 
	usu_grado:"DECIMO", 
	usu_genero:"MASCULINO", 
	usu_edad:15, 
	usu_num_celular:3164254978,
	usu_tipo: "ESTUDIANTE"
})
db.usuarios.insert({
	usu_ID: 1118471717, 
	usu_nombre: "LAURA SOFIA OLAYA", 
	usu_grado:"UNDECIMO", 
	usu_genero:"FEMENINO", 
	usu_edad:17, 
	usu_num_celular:3016420631,
	usu_tipo: "ESTUDIANTE"
})
db.usuarios.insert({
	usu_ID: 1083883399, 
	usu_nombre: "JUAN CARLOS VALENCIA", 
	usu_grado:"UNDECIMO", 
	usu_genero:"MASCULINO", 
	usu_edad:16, 
	usu_num_celular:3132047984,
	usu_tipo: "ESTUDIANTE"
})
db.usuarios.insert({
	usu_ID: 1144624263, 
	usu_nombre: "OSCAR BRAVO", 
	usu_grado:"UNDECIMO", 
	usu_genero:"MASCULINO", 
	usu_edad:17, 
	usu_num_celular:3118248272,
	usu_tipo: "ESTUDIANTE"
})

-- Datos de 3 docentes
db.usuarios.insert({
	usu_ID: 1075228444,
	usu_nombre: "CLAUDIA LORENA BEDOYA", 
	usu_grado:"UNDECIMO", 
	usu_genero:"FEMENINO", 
	usu_edad: 45,
	usu_num_celular: 3118248272,
	usu_tipo: "DOCENTE"
})
db.usuarios.insert({
	usu_ID: 1080262619, 
	usu_nombre: "JOSÉ ANDRES BRAVO", 
	usu_grado:"DECIMO", 
	usu_genero:"MASCULINO", 
	usu_edad: 35,
	usu_num_celular: 3132785004,
	usu_tipo: "DOCENTE"
})
db.usuarios.insert({
	usu_ID: 1083883327, 
	usu_nombre: "JORGE VALENCIA MONTENEGRO", 
	usu_grado:"DECIMO", 
	usu_genero:"MASCULINO", 
	usu_edad: 26,
	usu_num_celular: 3118248272,
	usu_tipo: "DOCENTE"
})
-- Usuario administrador
db.usuarios.insert({
	usu_ID: 1084, 
	usu_nombre: "MAICOL FERNANDEZ", 
	usu_grado:"8-SEMESTRE", 
	usu_genero:"MASCULINO", 
	usu_edad: 26,
	usu_num_celular: 3124758716,
	usu_tipo: "ADMINISTRADOR"
})

-- Usuarios
db.users.insert({
	user_ID: "Administrador", 
	user_password: "*12345*",
	user_rol: "ADMINISTRADOR"
})
db.users.insert({
	user_ID: "1075228444", 
	user_password: "1075228444",
	user_rol: "DOCENTE"
})
db.users.insert({
	user_ID: "1080262619", 
	user_password: "1080262619",
	user_rol: "DOCENTE"
})
db.users.insert({
	user_ID: "1083883327", 
	user_password: "1083883327",
	user_rol: "DOCENTE"
})
db.users.insert({
	user_ID: "1075228767",
	user_password: "1075228767",
	user_rol: "ESTUDIANTE"
})
db.users.insert({
	user_ID: "1127073731", 
	user_password: "1127073731",
	user_rol: "ESTUDIANTE"
})
db.users.insert({
	user_ID: "1083894810", 
	user_password: "1083894810",
	user_rol: "ESTUDIANTE"
})
db.users.insert({
	user_ID: "1080262111", 
	user_password: "1080262111",
	user_rol: "ESTUDIANTE"
})
db.users.insert({
	user_ID: "1083895699", 
	user_password: "1083895699",
	user_rol: "ESTUDIANTE"
})
db.users.insert({
	user_ID: "1083893864", 
	user_password: "1083893864",
	user_rol: "ESTUDIANTE"
})
db.users.insert({
	user_ID: "1117510298", 
	user_password: "1117510298",
	user_rol: "ESTUDIANTE"
})
db.users.insert({
	user_ID: "1118471717", 
	user_password: "1118471717",
	user_rol: "ESTUDIANTE"
})
db.users.insert({
	user_ID: "1083883399", 
	user_password: "1083883399",
	user_rol: "ESTUDIANTE"
})
db.users.insert({
	user_ID: "1144624263", 
	user_password: "1144624263",
	user_rol: "ESTUDIANTE"
})


-- https://www.geogebra.org/m/pyXvXJp7
-- Preguntas, opciones de respuestas y respuesta correcta
-- Numero de prueba: auto incremental
db.preguntas.insert({
	pre_ID: 1,
	pre_enunciado: "El máximo común divisor de 2, 3 y 4 es...",
	pre_opcion1: "1, porque es no hay otro divisor común de 2 y de 3",
	pre_opcion2: "12, porque es múltiplo de los tres números",
	pre_opcion3: "2, porque es el MCD debe ser menor o igual que 2, 3 y 4",
	pre_respuesta: 1
})
db.preguntas.insert({
	pre_ID: 2,
	pre_enunciado: "La diagonal de un cuadrado de área 1cm2 mide...",
	pre_opcion1: "1 cm",
	pre_opcion2: "1 dm",
	pre_opcion3: "raiz_cuadrada(2) cm",
	pre_respuesta: 3
})
db.preguntas.insert({
	pre_ID: 3,
	pre_enunciado: "El conjunto de números impares, {1, 3, 5, 7,...} puede considerarse como una progresión...",
	pre_opcion1: "aritmética con diferencia d=2",
	pre_opcion2: "geométrica con razón r=2.",
	pre_opcion3: "ni aritmética ni geométrica.",
	pre_respuesta: 1
})
db.preguntas.insert({
	pre_ID: 4,
	pre_enunciado: "¿Cuál es el valor aproximado del número “e”?",
	pre_opcion1: "3,141598",
	pre_opcion2: "2,718282",
	pre_opcion3: "1,142565",
	pre_respuesta: 2
})
db.preguntas.insert({
	pre_ID: 5,
	pre_enunciado: "El máximo común divisor de 180 y 225 es...",
	pre_opcion1: "12",
	pre_opcion2: "45",
	pre_opcion3: "85",
	pre_respuesta: 2
})
db.preguntas.insert({
	pre_ID: 6,
	pre_enunciado: "Factorial (9)",
	pre_opcion1: "5040",
	pre_opcion2: "40320",
	pre_opcion3: "362880",
	pre_respuesta: 3
})
db.preguntas.insert({
	pre_ID: 7,
	pre_enunciado: "En la factorización en potencias de números primos del número a aparecen las bases 2, 3 y 23. Entonces...",
	pre_opcion1: "Los únicos primos que dividen al número a son 2 y 3",
	pre_opcion2: "Los únicos primos que dividen al número a son 2, 3 y 23",
	pre_opcion3: "No podemos saber el número total de primos que dividen al número a",
	pre_respuesta: 2
})
db.preguntas.insert({
	pre_ID: 8,
	pre_enunciado: "COSENO (0)",
	pre_opcion1: "-1",
	pre_opcion2: "0",
	pre_opcion3: "1",
	pre_respuesta: 3
})
db.preguntas.insert({
	pre_ID: 9,
	pre_enunciado: "¿Cuáles son los 8 primeros elementos de la sucesión de Fibonacci?",
	pre_opcion1: "0, -1, 1, -2, 2, -3, 3, -4",
	pre_opcion2: "0, 1, 1, 2, 3, 5, 8, 13",
	pre_opcion3: "1, 3, 5, 7, 9, 11, 13, 15",
	pre_respuesta: 2
})
db.preguntas.insert({
	pre_ID: 10,
	pre_enunciado: "El mínimo común múltiplo de 3, 27 y 81 es...",
	pre_opcion1: "81",
	pre_opcion2: "243",
	pre_opcion3: "6561",
	pre_respuesta: 1
})
db.preguntas.insert({
	pre_ID: 11,
	pre_enunciado: "ln(e)",
	pre_opcion1: "e",
	pre_opcion2: "0",
	pre_opcion3: "1",
	pre_respuesta: 3
})
db.preguntas.insert({
	pre_ID: 12,
	pre_enunciado: "El máximo común divisor es 0 cuando...",
	pre_opcion1: "Uno de los dos números es primo pero el otro no.",
	pre_opcion2: "Los dos números son potencia de la misma base.",
	pre_opcion3: "Nunca.",
	pre_respuesta: 3
})
db.preguntas.insert({
	pre_ID: 13,
	pre_enunciado: "¿Cuando decimos que dos fracciones son equivalentes entre sí?",
	pre_opcion1: "Su suma es igual a la unidad",
	pre_opcion2: "El numerador de una es el denominador de la otra, y viceversa",
	pre_opcion3: "Representan la misma cantidad",
	pre_respuesta: 3
})
db.preguntas.insert({
	pre_ID: 14,
	pre_enunciado: "El mínimo común múltiplo de dos números primos es...",
	pre_opcion1: "1",
	pre_opcion2: "El producto de los dos primos.",
	pre_opcion3: "El número primo mayor.",
	pre_respuesta: 2
})
db.preguntas.insert({
	pre_ID: 15,
	pre_enunciado: "Si lanzamos al aire una moneda, entonces",
	pre_opcion1: "El espacio muestral es E = {Sacar cara}",
	pre_opcion2: "El espacio muestral es E = {Sacar cara, Sacar cruz}",
	pre_opcion3: "El espacio muestral es E = {Sacar cruz}",
	pre_respuesta: 2
})
db.preguntas.insert({
	pre_ID: 16,
	pre_enunciado: "¿En qué caso X^n es igual a la inversa del número X elevado al opuesto de n?",
	pre_opcion1: "Cuando n es negativo",
	pre_opcion2: "Cuando n es igual a 0",
	pre_opcion3: "cuando X es negativo",
	pre_respuesta: 1
})
db.preguntas.insert({
	pre_ID: 17,
	pre_enunciado: "¿Cuál de las siguientes igualdades es incorrecta?",
	pre_opcion1: "loga X^n = n * logX^a ",
	pre_opcion2: "log(X/Y) = logX - logY",
	pre_opcion3: "log X^n = n * log X",
	pre_respuesta: 1
})
db.preguntas.insert({
	pre_ID: 18,
	pre_enunciado: "El conjunto de números {2, 4, 6} es una progresión...",
	pre_opcion1: "aritmética con diferencia d=3.",
	pre_opcion2: "geométrica con razón  r=2",
	pre_opcion3: "aritmética y finita.",
	pre_respuesta: 3
})
db.preguntas.insert({
	pre_ID: 19,
	pre_enunciado: "Señala cuál de los siguientes números expresados en notación científica es menor que la unidad",
	pre_opcion1: "0,58 * 10^3",
	pre_opcion2: "26 * 10^(-2)",
	pre_opcion3: "135 * 10^(-2)",
	pre_respuesta: 2
})
db.preguntas.insert({
	pre_ID: 20,
	pre_enunciado: "De las siguientes fracciones generatrices de números decimales hay una que es incorrecta. ¿De cuál se trata?",
	pre_opcion1: "3,85555... = 382/99",
	pre_opcion2: "4,86121212... = 48.126/9.900",
	pre_opcion3: "7.648648 = 7.641/999",
	pre_respuesta: 1
})
db.preguntas.insert({
	pre_ID: 21,
	pre_enunciado: "Si el mínimo común múltiplo de dos números es el 4...",
	pre_opcion1: "Los dos números tienen que ser el 4.",
	pre_opcion2: "Uno de los números es el 2 y el otro puede ser el 1, el 2 ó el 4.",
	pre_opcion3: "Uno de los números es el 4 y el otro puede ser el 1, el 2 ó el 4",
	pre_respuesta: 3
})
db.preguntas.insert({
	pre_ID: 22,
	pre_enunciado: "Dados tres números reales (a,b y c) siendo (a<b) y (c<0), señala cuál de las siguientes relaciones es incorrecta",
	pre_opcion1: "a * c > b * c",
	pre_opcion2: "a * c < b * c",
	pre_opcion3: "a + c < b + c",
	pre_respuesta: 2
})
db.preguntas.insert({
	pre_ID: 23,
	pre_enunciado: "¿Cuándo se dice que una sucesión es alternada?",
	pre_opcion1: "Cuando no es aritmética ni geométrica.",
	pre_opcion2: "Cuando todos los términos tienen el mismo signo.",
	pre_opcion3: "Cuando el signo de cada término es distinto al signo del término que le precede.",
	pre_respuesta: 3
})
db.preguntas.insert({
	pre_ID: 24,
	pre_enunciado: "Si el máximo común divisor de dos números es impar, entonces...",
	pre_opcion1: "Los dos números son impares.",
	pre_opcion2: "No podemos deducir la paridad de los números, es decir, pueden ser pares, impares o uno par y otro impar.",
	pre_opcion3: "No pueden ser pares los dos números, es decir, o los dos son impares o uno es par y el otro es impar.",
	pre_respuesta: 3
})
db.preguntas.insert({
	pre_ID: 25,
	pre_enunciado: "Lanzamos un dado y nos interesa el número que sale...",
	pre_opcion1: "El espacio muestral es E = {1,2,3,4,5,6}",
	pre_opcion2: "El espacio muestral es E = {Sale un número par, Sale un número impar}",
	pre_opcion3: "El espacio muestral es E ={Sale cara, Sale cruz}",
	pre_respuesta: 1
})
db.preguntas.insert({
	pre_ID: 26,
	pre_enunciado: "Tenemos una urna con 40 bolas: 10 bolas rojas (R), 10 azules (A), 10 moradas (M) y 10 blancas (B). Además, para cada color, las bolas están numeradas del 1 al 10: R1, R2, R3,..., R10, A1, A2, A3,...A10, M1, M2,..., M10, B1, B2, B3,..., B10. Realizamos una extracción y nos interesa el color y el número de la bola",
	pre_opcion1: "Si la bola extraída es roja (R), es más probable que salga un número par",
	pre_opcion2: "El espacio muestral no puede determinarse (es desconocido)",
	pre_opcion3: "E = {R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, M1, M2, M3, M4, M5, M6, M7, M8, M9, M10}",
	pre_respuesta: 3
})
db.preguntas.insert({
	pre_ID: 27,
	pre_enunciado: "Si consideramos 2 como el primer número par, ¿cuánto suman los 20 primeros números pares?",
	pre_opcion1: "Suman 320",
	pre_opcion2: "Suman 246",
	pre_opcion3: "Suman 246",
	pre_respuesta: 3
})

-- Listar preguntas
db.preguntas.find({}, {_id:0});
db.preguntas.find({}, {_id:0}).pretty();


-- Ver datos de Administrador
db.usuarios.find({usu_tipo:"ADMINISTRADOR"}, {_id:0} ).pretty();

-- Listar estudiantes
db.usuarios.find({usu_tipo:"ESTUDIANTE"}, {_id:0, usu_num_celular:0});
db.usuarios.find({usu_tipo:"ESTUDIANTE"}, {_id:0, usu_num_celular:0}).pretty();

-- Listar docentes
db.usuarios.find({usu_tipo:"DOCENTE"}, {_id:0, usu_num_celular:0 });
db.usuarios.find({usu_tipo:"DOCENTE"}, {_id:0, usu_num_celular:0 }).pretty();

-- Listar users
db.users.find();