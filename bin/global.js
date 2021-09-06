#!usr/bin/env node

// problema me funciona solo con #! node (ver carpeta mensajes)

// se va ejecutar dentro de bash

//Variable que llama la funcion que exportamos
let random = require('../src/index.js')

//Ejecuto la funcion
random.randomMsg()

