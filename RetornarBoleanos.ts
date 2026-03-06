function esMayorDeEdad(edad: number): boolean {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(esMayorDeEdad(20)); // true
console.log(esMayorDeEdad(15)); // false