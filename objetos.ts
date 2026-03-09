let animal = {
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
let myCuaderno = {
    "color": "Azul",
    "categoria": "Matemáticas",
    "numeroDeHojas": 100,
    "tamaño": "A4"
};
console.log(myCuaderno["color"]);// se usa para cuando el nombre de la propiedad es una variable o tiene caracteres especiales

// cambiando el valor de una propiedad
let mochila = {
    "color": "Rojo",
    "tanaño": "Grande",
    "contenido": ["Libros", "Cuadernos", "Lápices"]
};
console.log(mochila.color); // rojo
mochila.color = "Azul"; // cambiando el valor de la propiedad color

console.log(mochila.color); // azul


// agregar nueva propiedad a un objeto
let curso: { titulo: string; idioma: string; duracion: string; vistas?: number } = {
    titulo: "Programación en JavaScript",
    idioma: "Español",
    duracion: "4 semanas"
};

curso.vistas = 1000; 
console.log(curso.vistas);

//eliminar una propiedad de un objeto
delete curso.vistas;
console.log(curso);



function BuscarElementoQuimico(simbolo: string): string {

    let simbolosQuimicos = {
        H: "Hidrógeno",
        O: "Oxígeno",
        C: "Carbono"
    };

    return simbolosQuimicos[simbolo] || "Elemento no encontrado";
}

    console.log(BuscarElementoQuimico("H")); // Hidrógeno
    console.log(BuscarElementoQuimico("X")); // Elemento no encontrado
    

    //verificar objetos

    let myLibro = {
        "titulo": "El Principito",
        "autor": "Antoine de Saint-Exupéry",
        "año": 1943
    };

    console.log(myLibro.hasOwnProperty("autor"));// true
    console.log(myLibro.hasOwnProperty("editorial"));// false


    // objetos complejos
let ordenesDePizzas = [
    { 
        tipo: "Pepperoni",
        tamaño: "Grande",
        precio: 15.99,
        toppings: ["Queso extra", "Aceitunas", "Champiñones"],
        paraLlevar: true
    },
    {
        tipo: "Vegetariana",
        tamaño: "Mediana",
        precio: 12.99,
        toppings: ["Pimientos", "Cebolla", "Tomate"],
        paraLlevar: false
    }
];

console.log(ordenesDePizzas[1].tipo); 

//objetos anidados

let miReseta = {
    "descripcion": "Receta de pasta al pesto",
    "costo": 15.99,
    "ingredientes": {
        "masa": {
            "harina": "200g",
            "sal": "1 cucharadita",
            "agua": "100ml"
        },
        "cobertura": {
            "azucar": "50g",
            "chcocolate": "100g",
            "mantequilla": "50g"
        }
    }
};

console.log(miReseta.ingredientes.masa.harina); // 200g


// arreglos anidados en objetos
let misPlantas = [
    {
        tipo: "Suculenta",
        lista: ["Aloe Vera", "Echeveria", "Sedum"]
    },
    {
        tipo: "arboles",
        lista: ["Pino", "Roble", "Arce"]    
    }
];

let miPrimeraFlor = misPlantas[0].lista[0]; 
console.log(miPrimeraFlor);


const Miconstane = 3.14;

console.log(Miconstane); 
// Miconstane = 2.71; // Error: No se puede reasignar una constante 