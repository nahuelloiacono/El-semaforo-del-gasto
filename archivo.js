// Simulador de gastos de impuestos y servicios en el AMBA (CABA y GBA).

// jQuery - Document ready.

$(document).ready(function () {
  console.log("El DOM esta listo");
});

// Formulario.

// Variables de campos de formularios.

var nombre = $("#nombre").value;
var apellido = $("#apellido").value;
var sueldo = $("#sueldo").value;
var provincias = [
  "Seleccionar",
  "Ciudad de Buenos Aires",
  "Provincia de Buenos Aires",
];
var provinciaSeleccionada = $("provincias").value;
var viviendas = ["Seleccionar", "Casa", "Departamento"];
var viviendaSeleccionada = $("viviendas").value;
var transportes = ["Seleccionar", "Si", "No"];
var transporteSeleccionado = $("transportes").value;

// Cargar opciones de provincias.

function cargarProvincias(provincias) {
  var select_provincia = $("#provincia");

  for (let provincia of provincias) {
    select_provincia.append(
      "<option value='" + provincia + "'>" + provincia + "</option>"
    );
  }
}

cargarProvincias(provincias);

// Cargar opciones de viviendas.

function cargarViviendas(viviendas) {
  var select_vivienda = $("#vivienda");

  for (let vivienda of viviendas) {
    select_vivienda.append(
      "<option value='" + vivienda + "'>" + vivienda + "</option>"
    );
  }
}

cargarViviendas(viviendas);

// Cargar opciones de transporte.

function cargarTransportes(transportes) {
  var select_transporte = $("#transporte");

  for (let transporte of transportes) {
    select_transporte.append(
      "<option value='" + transporte + "'>" + transporte + "</option>"
    );
  }
}

cargarTransportes(transportes);

// Validar formulario.

let botónValidar = document.getElementById("botónValidar");
botónValidar.addEventListener("click", validarFormulario);

function validarFormulario() {
  // Función validadora (error con rojo y ok con verde).

  function camposValidos(nombre1, nombre2, estado) {
    var nombre1 = $("#" + nombre1);
    var nombre2 = $("#" + nombre2);

    if (estado == "error") {
      nombre1.removeClass("okBorde");
      nombre1.addClass("errorBorde");
      nombre2.removeClass("okTexto");
      nombre2.addClass("errorTexto");
    } else if (estado == "ok") {
      nombre1.removeClass("errorBorde");
      nombre1.addClass("okBorde");
      nombre2.removeClass("errorTexto");
      nombre2.addClass("okTexto");
    }
  }

  // Nombre.

  let nombre = $("#nombre");
  let textoNombre = $("#textoNombre");

  if (nombre.val() == "") {
    textoNombre.html("¡Ingrese su nombre por favor!");
    nombre.focus();
    camposValidos("nombre", "textoNombre", "error");
    return false; // Detengo la validación acá.
  } else {
    textoNombre.html("¡Nombre validado!");
    camposValidos("nombre", "textoNombre", "ok");
  }

  // Apellido.

  let apellido = $("#apellido");
  let textoApellido = $("#textoApellido");

  if (apellido.val() == "") {
    textoApellido.html("¡Ingrese su apellido por favor!");
    apellido.focus();
    camposValidos("apellido", "textoApellido", "error");
    return false;
  } else {
    textoApellido.html("¡Apellido validado!");
    camposValidos("apellido", "textoApellido", "ok");
  }

  // Provincias.

  let provincia = $("#provincia");
  let textoProvincia = $("#textoProvincia");

  if (provincia.val() == "Seleccionar") {
    textoProvincia.html("¡Ingrese una provincia por favor!");
    provincia.focus();
    camposValidos("provincia", "textoProvincia", "error");
    return false;
  } else if (provincia.val() == "Ciudad de Buenos Aires") {
    textoProvincia.html("¡Provincia validada!");
    camposValidos("provincia", "textoProvincia", "ok");
  } else if (provincia.val() == "Provincia de Buenos Aires") {
    textoProvincia.html("¡Provincia validada!");
    camposValidos("provincia", "textoProvincia", "ok");
  }

  // Viviendas.

  let vivienda = $("#vivienda");
  let textoVivienda = $("#textoVivienda");

  if (vivienda.val() == "Seleccionar") {
    textoVivienda.html("¡Ingrese un tipo de vivienda por favor!");
    vivienda.focus();
    camposValidos("vivienda", "textoVivienda", "error");
    return false;
  } else if (vivienda.val() == "Casa") {
    textoVivienda.html("¡Vivienda validada!");
    camposValidos("vivienda", "textoVivienda", "ok");
  } else if (vivienda.val() == "Departamento") {
    textoVivienda.html("¡Vivienda validada!");
    camposValidos("vivienda", "textoVivienda", "ok");
  }

  // Transportes.

  let transporte = $("#transporte");
  let textoTransporte = $("#textoTransporte");

  if (transporte.val() == "Seleccionar") {
    textoTransporte.html("¡Ingrese si tiene o no transporte por favor!");
    transporte.focus();
    camposValidos("transporte", "textoTransporte", "error");
    return false; // Detengo la validación acá.
  } else if (transporte.val() == "Si") {
    textoTransporte.html("¡Transporte validado!");
    camposValidos("transporte", "textoTransporte", "ok");
  }

  // Resultados y salidas del formulario.

  function salidasFormulario() {
    // LocalStorage.

    localStorage.setItem("nombre", nombre.val());
    localStorage.setItem("apellido", apellido.val());
    localStorage.setItem("provincia", provincia.val());
    localStorage.setItem("vivienda", vivienda.val());
    localStorage.setItem("transporte", transporte.val());

    // Salida y siguiente etapa.

    var nombreStorage = localStorage.getItem("nombre");
    var apellidoStorage = localStorage.getItem("apellido");
    var formularioSalida1 =
      "<div class='párrafoSalida'><p>¡Hola " +
      nombreStorage +
      " " +
      apellidoStorage +
      "!</p><p>Gracias por haber cumplido con la primera etapa del instructivo. Ahora te pido por favor que pases a la segunda parte, la de completar los gastos de impuestos y servicios. De esa forma, podrás acceder a los resultados del simulador.</p></div>";

    document.getElementById("formularioSalida1").innerHTML = formularioSalida1;
  }
  salidasFormulario();
  console.log("Formulario enviado");
}

// Calcular simulador.

let botónCalcular = document.getElementById("botónCalcular");
botónCalcular.addEventListener("click", calcularGastoTotal);

function calcularGastoTotal() {
  // Sueldo.

  let sueldo = $("#sueldo");
  let textoSueldo = $("#textoSueldo");

  if (sueldo.val() == "") {
    textoSueldo.html("¡Ingrese su sueldo por favor!");
    sueldo.focus();
    sueldo.removeClass("okBorde");
    sueldo.addClass("errorBorde");
    textoSueldo.removeClass("okTexto");
    textoSueldo.addClass("errorTexto");
    return false;
  } else {
    textoSueldo.html("¡Sueldo validado!");
    sueldo.removeClass("errorBorde");
    sueldo.addClass("okBorde");
    textoSueldo.removeClass("errorTexto");
    textoSueldo.addClass("okTexto");
  }

  // Valores de entradas

  let abl = $("#abl").val();
  let agua = $("#agua").val();
  let cable = $("#cable").val();
  let expensas = $("#expensas").val();
  let gas = $("#gas").val();
  let inmobiliario = $("#inmobiliario").val();
  let internet = $("#internet").val();
  let luz = $("#luz").val();
  let municipal = $("#municipal").val();
  let patente = $("#patente").val();
  let seguroAuto = $("#seguroAuto").val();
  let seguroHogar = $("#seguroHogar").val();
  let streaming = $("#streaming").val();
  let teléfonoFijo = $("#teléfonoFijo").val();
  let teléfonoMóvil = $("#teléfonoMóvil").val();
  let otros = $("#otros").val();

  // Importe de impuestos y servicios.

  let importeTotal =
    parseInt(abl) +
    parseInt(agua) +
    parseInt(cable) +
    parseInt(expensas) +
    parseInt(gas) +
    parseInt(inmobiliario) +
    parseInt(internet) +
    parseInt(luz) +
    parseInt(municipal) +
    parseInt(patente) +
    parseInt(seguroAuto) +
    parseInt(seguroHogar) +
    parseInt(streaming) +
    parseInt(teléfonoFijo) +
    parseInt(teléfonoMóvil) +
    parseInt(otros);

  // Resultados y salidas del simulador.

  // Sueldo.

  var títuloSueldo = `<h6 class="simuladorTítulos">Sueldo</h6>`;
  document.getElementById("títuloSueldo").innerHTML = títuloSueldo;

  var sueldoValor = sueldo.val();
  var sueldoIngresado =
    "<p class='simuladorPárrafos'>Tu ingreso es de: $" + sueldoValor + "</p>";
  document.getElementById("sueldoIngresado").innerHTML = sueldoIngresado;

  // Gastos.

  var títuloGastos = `<h6 class="simuladorTítulos">Gastos</h6>`;
  document.getElementById("títuloGastos").innerHTML = títuloGastos;

  var gastoTotal =
    "<p class='simuladorPárrafos'>Gasto total en impuestos y servicios: $" +
    importeTotal +
    "</p>";
  document.getElementById("gastoTotal").innerHTML = gastoTotal;

  // Porcentaje.

  var títuloPorcentaje = `<h6 class="simuladorTítulos">Porcentaje de gastos</h6>`;
  document.getElementById("títuloPorcentaje").innerHTML = títuloPorcentaje;

  var porcentajeTotal = (importeTotal / sueldoValor) * 100;
  var porcentajeTotalConDosDecimales = porcentajeTotal.toFixed(2);
  let porcentajeDeSueldo = `<p class='simuladorPárrafos'>Porcentaje de sueldo gastado en impuestos y servicios: ${porcentajeTotalConDosDecimales}%</p>`;
  document.getElementById("porcentajeDeSueldo").innerHTML = porcentajeDeSueldo;

  // Semáforo del porcentaje.

  if (porcentajeTotal <= 25) {
    var porcentajeBajo =
      "<p class='simuladorPárrafos'>Gastás una porción pequeña de tus ingresos en pagar impuestos y servicios. ¡Seguí así!" +
      "</p>";
    document.getElementById("porcentajeSemáforo").innerHTML = porcentajeBajo;
    porcentajeSemáforo.className += "porcentajeBajo";
  } else if (porcentajeTotal <= 50) {
    var porcentajeMedio =
      "<p class='simuladorPárrafos'>Gastás una porción mediana de tus ingresos en pagar impuestos y servicios. ¡A no descuidarse!" +
      "</p>";
    document.getElementById("porcentajeSemáforo").innerHTML = porcentajeMedio;
    porcentajeSemáforo.className += "porcentajeMedio";
  } else if (porcentajeTotal > 50) {
    var porcentajeAlto =
      "<p class='simuladorPárrafos'>Gastás una porción grande de tus ingresos en pagar impuestos y servicios. ¡Hay que bajar los gastos urgentemente!" +
      "</p>";
    document.getElementById("porcentajeSemáforo").innerHTML = porcentajeAlto;
    porcentajeSemáforo.className += "porcentajeAlto";
  }

  // Siguiente etapa.

  var simulacroSalida =
    "<p class='párrafoSalida'>¡Espero que te hayan servido los resultados del simulacro! Pero eso no es todo. Te invito a que te informes con algunas cuestiones sobre los impuestos y servicios en la sección 'Sabías que...' y que veas los consejos para bajar los gastos de los mismos en la sección 'Tips para ahorrar'." +
    "</p>";
  document.getElementById("simulacroSalida").innerHTML = simulacroSalida;

  console.log("Simulador calculado");
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

// Tip 1 (Agua).

$("#tipAgua").click(function () {
  Swal.fire({
    title: "¡No derroches agua!",
    icon: "info",
    html: "No dejes abierta la canilla mientras te lavás los dientes, no tardes más de 15 minutos en bañarte y llená la pileta de forma más espaciada.",
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
    html: "Apagá la tele si no la estás viendo y da de baja el servicio de streaming que no uses a lo largo del mes.",
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
    html: "Si estás gastando gran parte de tu sueldo en servicios, achicá gastos por un tiempo en otras áreas, como el 'gasto hormiga' (compras en un kiosco), indumentaria, salidas y/u ocio, entre otras cosas.",
    showCloseButton: true,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> OK',
    confirmButtonAriaLabel: "Thumbs up, OK",
  });
});
