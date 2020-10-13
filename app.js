const personaje = require("./library");

personaje.obtPersonaje("Rick Sanchez","Alive").then(resultado => {
    console.log("ID: "+resultado.results[0].id);
    console.log("Nombre: "+resultado.results[0].name);
    console.log("Estado: "+resultado.results[0].status);
    console.log("Especie: "+resultado.results[0].species);
    console.log("Genero: " +resultado.results[0].gender);
});
