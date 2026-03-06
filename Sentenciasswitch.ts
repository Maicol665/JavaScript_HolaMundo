let dia = 3;

switch (dia) {
  case 1:
    console.log("Lunes");
    break;

  case 2:
    console.log("Martes");
    break;

  case 3:
    console.log("Miércoles");
    break;

  default:
    console.log("Día desconocido");
}

// Sentencias switch opción predeterminada 

let color = "rojo";

switch (color) {
  case "rojo":
    console.log("El color es rojo");
    break;

  case "azul": 
    console.log("El color es azul");
    break;

  default:
    console.log("Color no reconocido");
}

// Sentencias switch múltiples casos
let diaS = 6;

switch (dia) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Es un día laboral");
    break;

  case 6:
  case 7:
    console.log("Es fin de semana");
    break;

  default:
    console.log("Día no válido");
}

