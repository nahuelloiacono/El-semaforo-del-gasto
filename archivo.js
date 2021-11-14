// Voy a hacer un simulador de tienda de vinos para el proyecto final.

// Nombre y apellido

function solicitarNombreYApellido() {
  let entradaNombre = prompt("Ingresar nombre");
  let salidaNombre = "El nombre ingresado es " + entradaNombre;
  alert(salidaNombre);
  let entradaApellido = prompt("Ingresar apellido");
  let salidaApellido = "El apellido ingresado es " + entradaApellido;
  alert(salidaApellido);
  let nombreYApellido =
    "Tu nombre es " + entradaNombre + " " + entradaApellido + ".";
  console.log(nombreYApellido);
}

solicitarNombreYApellido();

// Edad

function solicitarEdad() {
  let entradaEdad = parseInt(prompt("Ingresá tu edad"));
  let salidaEdad = "Tu edad es " + entradaEdad;
  alert(salidaEdad);
  let edad = "Tu edad es " + entradaEdad + ".";
  console.log(edad);
  if (entradaEdad < 18) {
    console.log(
      "No podés tomar alcohol. Comprale vinos a algún conocido/a, amigo/a o familiar mayor de edad."
    );
  } else if (entradaEdad >= 18) {
    console.log(
      "Comprá los vinos que quieras, pero no tomés al manejar por favor."
    );
  }
}

solicitarEdad();

// Tipos de vino y variedades

let tipoDeVino = prompt(
  "¿Qué tipo de vino te gusta más: tinto, blanco o rosado?"
);

switch (tipoDeVino) {
  case "Tinto":
    console.log("¡El vino tinto es el mejor acompañante de la carne!");
    break;
  case "Blanco":
    console.log(
      "¡El vino blanco es el mejor acompañante de pescados y mariscos!"
    );
    break;
  case "Rosado":
    console.log("¡El vino rosado es el mejor acompañante de vegetales!");
    break;
}

let cepaDeVino = prompt("¿Cuál es tu cepa favorita?");

switch (cepaDeVino) {
  case "Bonarda":
    console.log(
      "Los vinos bonarda tienen una vista rojo rubí intenso con tonos violáceos."
    );
    break;
  case "Cabernet Franc":
    console.log(
      "Los vinos cabernet franc son de color rojo profundo con tonos violáceos."
    );
    break;
  case "Cabernet Sauvignon":
    console.log(
      "Los vinos cabernet sauvignon tienen un color intenso, taninos vigorosos y un delicioso aroma penetrante."
    );
    break;
  case "Malbec":
    console.log(
      "Los vinos malbec son cálidos, suaves y con taninos dulces muy agradables."
    );
    break;
  case "Merlot":
    console.log(
      "Los vinos merlot son de intensidad colorante, con grado alcohólico elevado y con ligeros aromas afrutados y especiados."
    );
    break;
  case "Petit Verdot":
    console.log(
      "Los vinos petit verdot son de un rojo a violeta, intenso y brillante."
    );
    break;
  case "Pinot Noir":
    console.log(
      "Los vinos pinot noir se caracterizan por su estructura taninosa baja, de cuerpo medio que despierta sensaciones refinadas y sutiles en boca."
    );
    break;
  case "Syrah":
    console.log("Los vinos syrah suelen tener mucho sabor y buen cuerpo.");
    break;
  case "Tannat":
    console.log(
      "Los vinos tannat se caracterizan por su estructura firme y tánica, con aromas a frambuesa, y la capacidad de envejecer bien."
    );
    break;
}

// Vinos

function Vino(nombre, cepa, precio) {
  this.nombre = nombre;
  this.cepa = cepa;
  this.precio = parseFloat(precio);
}

const vino1 = new Vino("Vino DV Catena", "Blend", "1500");
const vino2 = new Vino("Vino Luigi Bosca", "Cabernet Sauvignon", "1200");
const vino3 = new Vino("Vino Rutini", "Malbec", "1250");

// Precio por unidad

console.log(
  "El precio por unidad del " +
    vino1["nombre"] +
    " " +
    vino1["cepa"] +
    " es de $" +
    vino1["precio"] +
    "."
);

console.log(
  "El precio por unidad del " +
    vino2["nombre"] +
    " " +
    vino2["cepa"] +
    " es de $" +
    vino2["precio"] +
    "."
);

console.log(
  "El precio por unidad del " +
    vino3["nombre"] +
    " " +
    vino3["cepa"] +
    " es de $" +
    vino3["precio"] +
    "."
);

// Precio de los tres vinos en total

let precioPorTresVinos = parseFloat(
  vino1["precio"] + vino2["precio"] + vino3["precio"]
);

console.log(
  "Si compras un vino de cada uno, el precio total de $" +
    precioPorTresVinos +
    "."
);

// Envío gratis +$3.500

if (precioPorTresVinos < 3500) {
  console.log("El envío sale $500 en compras inferiores a $3500.");
} else if (precioPorTresVinos >= 3500) {
  console.log("El envío es gratis en compras superiores a $3500.");
}

// Array de Productos

const productos = [
  "Vino DV Catena Blend",
  "Vino Luigi Bosca Cabernet Sauvignon",
  "Vino Rutini Malbec",
];

const productosConPrecio = [
  { id: 1, producto: "Vino DV Catena Blend", precio: 1500 },
  { id: 2, producto: "Vino Luigi Bosca Cabernet Sauvignon", precio: 1200 },
  { id: 3, producto: "Vino Rutini Malbec", precio: 1250 },
];

// ¿Hay Rutini Malbec?

const buscarRutiniMalbec = productos.find(
  (elemento) => elemento == "Vino Rutini Malbec"
);
console.log(buscarRutiniMalbec);

// ¿Hay vinos de menos de $1.000?

const vinosPrecioBarato = productosConPrecio.filter(
  (producto) => producto.precio <= 1000
);
console.log(vinosPrecioBarato);

// ¿Hay vinos de más de $1.000?

const vinosPrecioCaro = productosConPrecio.filter(
  (producto) => producto.precio >= 1001
);
console.log(vinosPrecioCaro);
