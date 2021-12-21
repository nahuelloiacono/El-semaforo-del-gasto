// Simulador de gastos de servicios e impuestos en el AMBA (CABA y GBA).

// jQuery - Document ready.

$(document).ready(function () {
  console.log("El DOM esta listo");
});

// jQuery - Datos del formulario.

let nombre = $("#nombre").value; // jQuery.
let apellido = $("#apellido").value; // jQuery.
let sueldo = $("#sueldo").value; // jQuery.
let lugarDeResidencia = $("#lugarDeResidencia").value; // jQuery.
let vivienda = $("#hogarODepto").value; // jQuery.
let transportePropio = $("#autoOMoto").value; // jQuery.

// Class - Usuario.

class Usuario {
  constructor(nombre, apellido, sueldo, lugarDeResidencia, vivienda) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.sueldo = sueldo;
    this.lugarDeResidencia = lugarDeResidencia;
    this.vivienda = vivienda;
    this.transportePropio = transportePropio;
  }
}

// Array - Usuario.

const arrayDeUsuario = [
  {
    Nombre: nombre,
    Apellido: apellido,
    Sueldo: sueldo,
    LugarDeResidencia: lugarDeResidencia,
    Vivienda: vivienda,
    Auto: transportePropio,
  },
];

// Datos de formulario.

function escribirDatosDeUsuario() {
  // Entradas

  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let sueldo = document.getElementById("sueldo").value;
  let lugarDeResidencia = document.getElementById("lugarDeResidencia").value;
  let vivienda = document.getElementById("hogarODepto").value;
  let transportePropio = document.getElementById("autoOMoto").value;

  // Funciones de validación

  pedirNombreSiFalta();
  pedirApellidoSiFalta();
  pedirSueldoSiFalta();

  // Salida en HTML (Agregar salidas respectivas con las funciones de validación de arriba con el else).

  var contenidoUsuario =
    "<p>Tu nombre y apellido es: " +
    nombre +
    " " +
    apellido +
    "." +
    "</p>" +
    "<p>Tu sueldo es de: $" +
    sueldo +
    "." +
    "</p>" +
    "<p>Vivís en: " +
    lugarDeResidencia +
    "," +
    " en una vivienda de tipo " +
    vivienda +
    "." +
    "</p>" +
    "<p>Medio de transporte propio: " +
    "" +
    transportePropio +
    "." +
    "</p>";

  $("#contenidoUsuario").html(contenidoUsuario); // jQuery.

  // Salida en consola

  console.log("Nombre ingresado: " + nombre);
  console.log("Apellido ingresado: " + apellido);
  console.log("Sueldo ingresado: " + "$" + sueldo);
  console.log("Lugar de residencia ingresado: " + lugarDeResidencia);
  console.log("Vivienda ingresada: " + vivienda);
  console.log("Transporte propio ingresado: " + transportePropio);
}

// Datos obligatorios. Nombre, apellido y sueldo (if - condicionales).

function pedirNombreSiFalta() {
  var nombreIngresado = document.getElementById("nombre").value;
  if (nombreIngresado == "") {
    $("#faltaNombre").html(
      "<p class='alert'>Ingrese su nombre por favor" + "</p>"
    ); // jQuery.
    return false;
  }
}

function pedirApellidoSiFalta() {
  var apellidoIngresado = document.getElementById("apellido").value;
  if (apellidoIngresado == "") {
    $("#faltaApellido").html(
      "<p class='alert'>Ingrese su apellido por favor" + "</p>"
    ); // jQuery.
    return false;
  }
}

function pedirSueldoSiFalta() {
  var sueldoIngresado = document.getElementById("sueldo").value;
  if (sueldoIngresado == "" || sueldoIngresado <= 0) {
    $("#faltaSueldo").html(
      "<p class='alert'>Ingrese su sueldo por favor" + "</p>"
    ); // jQuery.
    return false;
  }
}

// Agregar ABL -CABA- o Municipal e Inmobiliario -PBA- (Change - NO FUNCIONA).

let residenciaElegida = document.getElementById("lugarDeResidencia");
residenciaElegida.addEventListener("onchange", agregarImpuestos);

function agregarImpuestos() {
  var residenciaSeleccionada =
    document.getElementById("lugarDeResidencia").value;
  switch (residenciaSeleccionada) {
    case "CABA":
      console.log("Agregar ABL en el HTML"); // Acá agregaría en HTML la opción ABL
      break;
    case "GBA":
      console.log("Agregar Municipal e Inmobiliario en el HTML"); // Acá agregaría en HTML la opción Municipal e Inmobiliario
      break;
  }
}

// Agregar expensas si corresponde (Change - NO FUNCIONA).

let expensasSiCorresponde = document.getElementById("hogarODepto");
expensasSiCorresponde.addEventListener(
  "onchange",
  agregarExpensasSiCorresponde
);

function agregarExpensasSiCorresponde() {
  var expensas = document.getElementById("hogarODepto").value;
  switch (expensas) {
    case "departamento":
      console.log("Agregar expensas en el HTML"); // Acá agregaría en HTML la opción expensas
      break;
    case "casa":
      console.log("No agregar expensas");
      break;
  }
}

// Agregar patente y seguro si corresponde (Change - NO FUNCIONA).

let impuestosDeAutoOMoto = document.getElementById("autoOMoto");
impuestosDeAutoOMoto.addEventListener(
  "onchange",
  agregarPatenteYSeguroSiCorresponde
);

function agregarPatenteYSeguroSiCorresponde() {
  var patenteYSeguro = document.getElementById("autoOMoto").value;
  switch (patenteYSeguro) {
    case "Si":
      console.log("Agregar patente y seguro en el HTML"); // Acá agregaría en HTML la opción patente y seguro
      break;
    case "No":
      console.log("No agregar patente ni seguro");
      break;
  }
}

// Storage y JSON.

sessionStorage.setItem("nombre", [nombre]);
sessionStorage.setItem("apellido", [apellido]);
sessionStorage.setItem("sueldo", [sueldo]);
sessionStorage.setItem("lugarDeResidencia", [lugarDeResidencia]);
sessionStorage.setItem("vivienda", [vivienda]);
sessionStorage.setItem("transportePropio", [transportePropio]);
const arrayDeUsuarioEnJson = JSON.stringify(arrayDeUsuario);
const arrayDeUsuarioEnObjetos = JSON.parse(arrayDeUsuarioEnJson);

// Datos de entradas del usuario y resultados.

// Gasto total de todos los servicios e impuestos.

let botón1 = document.getElementById("botón1");
botón1.addEventListener("click", valorTotal);

function valorTotal() {
  // Entradas

  let agua = document.getElementById("agua").value;
  let gas = document.getElementById("gas").value;
  let luz = document.getElementById("luz").value;
  let cable = document.getElementById("cable").value;
  let internet = document.getElementById("internet").value;
  let teléfonoFijo = document.getElementById("teléfonoFijo").value;
  let teléfonoMóvil = document.getElementById("teléfonoMóvil").value;
  let streaming = document.getElementById("streaming").value;
  let seguro = document.getElementById("seguro").value;
  let otros = document.getElementById("otros").value;
  let importeTotal =
    parseInt(agua) +
    parseInt(gas) +
    parseInt(luz) +
    parseInt(cable) +
    parseInt(internet) +
    parseInt(teléfonoFijo) +
    parseInt(teléfonoMóvil) +
    parseInt(streaming) +
    parseInt(seguro) +
    parseInt(otros);

  // Salida en HTML

  var títuloGastos = `<h5>Gastos de impuestos y servicios</h5>`;

  document.getElementById("títuloGastos").innerHTML = títuloGastos;

  var gastoTotal = "<p>Gasto total: $" + importeTotal + "." + "</p>";
  document.getElementById("gastoTotal").innerHTML = gastoTotal;
  porcentajeDeSueldo();

  // Salida en consola

  console.log("Importe de agua: $" + agua);
  console.log("Importe de gas: $" + gas);
  console.log("Importe de luz: $" + luz);
  console.log("Importe de cable: $" + cable);
  console.log("Importe de internet: $" + internet);
  console.log("Importe de teléfono fijo: $" + teléfonoFijo);
  console.log("Importe de teléfono móvil: $" + teléfonoMóvil);
  console.log("Importe de streaming: $" + streaming);
  console.log("Importe de seguro: $" + seguro);
  console.log("Importe de otros gastos: $" + otros);
  console.log("Gasto total: $" + importeTotal);
}

// Porcentaje del sueldo total que se gasta en impuestos y servicios

function porcentajeDeSueldo() {
  let sueldo = document.getElementById("sueldo").value;
  let agua = document.getElementById("agua").value;
  let gas = document.getElementById("gas").value;
  let luz = document.getElementById("luz").value;
  let cable = document.getElementById("cable").value;
  let internet = document.getElementById("internet").value;
  let teléfonoFijo = document.getElementById("teléfonoFijo").value;
  let teléfonoMóvil = document.getElementById("teléfonoMóvil").value;
  let streaming = document.getElementById("streaming").value;
  let seguro = document.getElementById("seguro").value;
  let otros = document.getElementById("otros").value;
  let importe =
    parseInt(agua) +
    parseInt(gas) +
    parseInt(luz) +
    parseInt(cable) +
    parseInt(internet) +
    parseInt(teléfonoFijo) +
    parseInt(teléfonoMóvil) +
    parseInt(streaming) +
    parseInt(seguro) +
    parseInt(otros);
  var porcentajeTotal = (importe / sueldo) * 100;
  var porcentajeTotalConDosDecimales = porcentajeTotal.toFixed(2);
  let porcentajeDeSueldo = `<p>Porcentaje de sueldo gastado en impuestos y servicios: ${porcentajeTotalConDosDecimales}%</p>`;
  document.getElementById("porcentajeDeSueldo").innerHTML = porcentajeDeSueldo;

  // Funciones para el semáforo.

  // Agregar Semáforo verde para porcentaje <25%.

  // Agregar Semáforo amarillo para porcentaje >=25% y <=50%.

  // Agregar Semáforo rojo para porcentaje >50%.
}

// Creación de párrafos con info (Sabías que...)

// Patente general.

let crearPárrafo = document.createElement("p");
crearPárrafo.innerHTML =
  "Para calcular la patente, se tiene en cuenta la base imponible. Si el auto es OKM se toma el 100% de la valuación fiscal, en cambio, si es un auto usado, se toma el 95% de la misma.";

let párrafoConInfo = document.getElementById("párrafoConInfo");
párrafoConInfo.appendChild(crearPárrafo);

// Patente PBA y CABA.

let crearPárrafo2 = document.createElement("p");
crearPárrafo2.innerHTML =
  "En la Provincia de Buenos Aires existen 15 escalas diferentes para el pago de la patente. Por el lado de la Ciudad de Buenos Aires, hay cuatro escalas con alícuotas diferentes según el precio: 3,2%, 4%; 4,5% y 5% anual sobre el valor fiscal del vehículo.";

let párrafoConInfo2 = document.getElementById("párrafoConInfo2");
párrafoConInfo2.appendChild(crearPárrafo2);

// ABL.

let crearPárrafo3 = document.createElement("p");
crearPárrafo3.innerHTML =
  "El ABL es un impuesto que grava a todos los inmuebles situados en la Ciudad Autónoma de Buenos Aires, y obliga al pago de un tributo de carácter anual, dividido en 12 cuotas mensuales. Está conformado por la Tasa Retributiva de los Servicios de Alumbrado Barrido y Limpieza, Mantenimiento y Conservación de Sumideros (igual para todos) y el Impuesto Inmobiliario (progresivo y con alícuotas).";

let párrafoConInfo3 = document.getElementById("párrafoConInfo3");
párrafoConInfo3.appendChild(crearPárrafo3);

// AySA.

let crearPárrafo4 = document.createElement("p");
crearPárrafo4.innerHTML =
  "AySA es la empresa concesionaria de servicios públicos de agua potable y tratamiento de desagües cloacales para la Ciudad de Buenos Aires y 26 partidos del conurbano bonaerense, llevando su servicio a más de 14 millones de personas";

let párrafoConInfo4 = document.getElementById("párrafoConInfo4");
párrafoConInfo4.appendChild(crearPárrafo4);

// Edenor.

let crearPárrafo5 = document.createElement("p");
crearPárrafo5.innerHTML =
  "Edenor tiene una concesión para distribuir electricidad en forma exclusiva en 20 localidades del noroeste del Gran Buenos Aires y en la zona norte de la Ciudad Autónoma de Buenos Aires.";

let párrafoConInfo5 = document.getElementById("párrafoConInfo5");
párrafoConInfo5.appendChild(crearPárrafo5);

// Edesur.

let crearPárrafo6 = document.createElement("p");
crearPárrafo6.innerHTML =
  "Edesur tiene una concesión para distribuir electricidad en forma exclusiva en 12 localidades del sur del Gran Buenos Aires y en la zona sur de la Ciudad Autónoma de Buenos Aires.";

let párrafoConInfo6 = document.getElementById("párrafoConInfo6");
párrafoConInfo6.appendChild(crearPárrafo6);

// Metrogas.

let crearPárrafo7 = document.createElement("p");
crearPárrafo7.innerHTML =
  "Metrogas se encarga de brindar servicio de gas en la Ciudad de Buenos Aires y en los siguientes partidos de la provincia de Buenos Aires: Almirante Brown, Avellaneda, Berazategui, Esteban Echeverría, Ezeiza, Florencio Varela, Lanús, Lomas de Zamora, Presidente Perón, Quilmes y San Vicente.";

let párrafoConInfo7 = document.getElementById("párrafoConInfo7");
párrafoConInfo7.appendChild(crearPárrafo7);

// Naturgy.

let crearPárrafo8 = document.createElement("p");
crearPárrafo8.innerHTML =
  "Naturgy BAN S.A. se encarga de brindar servicio de gas en los siguientes partidos del Gran Buenos Aires: Belén de Escobar, Campana, General Rodríguez, General San Martín, Hurlingham, Ituzaingó, José C. Paz, La Matanza, Luján, Malvinas Argentinas, Marcos Paz, Mercedes, Merlo, Moreno, Morón, Pilar, San Fernando, San Isidro, San Miguel, Tigre, Tres de Febrero, Vicente López y Zárate.";

let párrafoConInfo8 = document.getElementById("párrafoConInfo8");
párrafoConInfo8.appendChild(crearPárrafo8);

// Creación de tips con info.

// Tip 1 (Luz).

$("#tipAgua").click(function () {
  Swal.fire({
    title: "¡No derroches agua!",
    icon: "info",
    html: "No dejes abierta la canilla mientras te lavas los dientes, no tardes más de 15 minutos en bañarte y llená la pileta de forma más espaciada.",
    showCloseButton: true,

    confirmButtonText: '<i class="fa fa-thumbs-up"></i> OK',
    confirmButtonAriaLabel: "Thumbs up, OK",
  });
});

// Tip 2 (Luz).

$("#tipLuz").click(function () {
  Swal.fire({
    title: "¡No gastes electricidad de más!",
    icon: "info",
    html: "Apagá las luces de las zonas del hogar en donde no te encuentres. Por otro lado, no prendas el aire acondicionado para calentar el ambiente, andá y ponete un abrigo.",
    showCloseButton: true,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> OK',
    confirmButtonAriaLabel: "Thumbs up, OK",
  });
});

// Tip 3 (Gas).

$("#tipGas").click(function () {
  Swal.fire({
    title: "¡No despilfarres gas!",
    icon: "info",
    html: "No prendas la hornalla para calentar el ambiente, andá y ponete un abrigo.",
    showCloseButton: true,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> OK',
    confirmButtonAriaLabel: "Thumbs up, OK",
  });
});

// Tip 4 (Tv).

$("#tipTv").click(function () {
  Swal.fire({
    title: "¡Menos horas de pantalla!",
    icon: "info",
    html: "Apaga la tele si no la estás viendo y da de baja el servicio de streaming que no uses a lo largo del mes.",
    showCloseButton: true,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> OK',
    confirmButtonAriaLabel: "Thumbs up, OK",
  });
});

// Tip 5 (Auto).

$("#tipAuto").click(function () {
  Swal.fire({
    title: "¡A bajar los gastos del auto!",
    icon: "info",
    html: "Si es muy caro el seguro contra todo riesgo, pasate a la modalidad terceros completo.",
    showCloseButton: true,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> OK',
    confirmButtonAriaLabel: "Thumbs up, OK",
  });
});

// Tip 6 (Banco).

$("#tipBanco").click(function () {
  Swal.fire({
    title: "¡Achicar gastos por un tiempo!",
    icon: "info",
    html: "Si estás gastando gran parte de tu sueldo en servicios, achica gastos por un tiempo en otras áreas, como el 'gasto hormiga' (compras en un kiosco), indumentaria, salidas y/u ocio, entre otras cosas.",
    showCloseButton: true,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> OK',
    confirmButtonAriaLabel: "Thumbs up, OK",
  });
});
