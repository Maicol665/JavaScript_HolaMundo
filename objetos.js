var animal = {
    "Nombre": "Perro",
    "Edad": 5,
    "Raza": "Labrador",
    "Color": "Marrón"
};
console.log(animal);
console.log(animal.Nombre);
console.log(animal.Edad);
console.log(animal.Raza);
// notacion de corchetes
var myCuaderno = {
    "color": "Azul",
    "categoria": "Matemáticas",
    "numeroDeHojas": 100,
    "tamaño": "A4"
};
console.log(myCuaderno["color"]); // se usa para cuando el nombre de la propiedad es una variable o tiene caracteres especiales
// cambiando el valor de una propiedad
var mochila = {
    "color": "Rojo",
    "tanaño": "Grande",
    "contenido": ["Libros", "Cuadernos", "Lápices"]
};
console.log(mochila.color); // rojo
mochila.color = "Azul"; // cambiando el valor de la propiedad color
console.log(mochila.color); // azul
// agregar nueva propiedad a un objeto
var curso = {
    titulo: "Programación en JavaScript",
    idioma: "Español",
    duracion: "4 semanas"
};
curso.vistas = 1000;
console.log(curso.vistas);
//eliminar una propiedad de un objeto
delete curso.vistas;
console.log(curso);
function BuscarElementoQuimico(simbolo) {
    var simbolosQuimicos = {
        H: "Hidrógeno",
        O: "Oxígeno",
        C: "Carbono"
    };
    return simbolosQuimicos[simbolo] || "Elemento no encontrado";
}
console.log(BuscarElementoQuimico("H")); // Hidrógeno
console.log(BuscarElementoQuimico("X")); // Elemento no encontrado
//verificar objetos
var myLibro = {
    "titulo": "El Principito",
    "autor": "Antoine de Saint-Exupéry",
    "año": 1943
};
myLibro.hasOwnProperty("autor"); // true
myLibro.hasOwnProperty("editorial"); // false
