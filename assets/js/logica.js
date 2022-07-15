const calcularResultado = () => {
  const animacion = document.querySelector("#spinner");
  animacion.innerHTML = spinner();

  setTimeout(() => {
    let montoPrestamo = document.getElementById("monto").value;
    let plazo = document.getElementById("plazo").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let intereses = calcularInteres(montoPrestamo, plazo);

    document.getElementById(
      "resultado"
    ).innerHTML = `Sr/a. ${nombre} ${apellido}, el calculo de su prestamo arroja una cuota mensual de \$${parseInt(
      intereses
    )}.- durante ${plazo} meses`;
    animacion.innerHTML = "";
  }, 3500);
};

function limpiarDatos() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("monto").value = "";
  document.getElementById("plazo").value = "";
  document.getElementById("resultado").innerHTML = "";
  localStorage.clear();
}

window.onload = function () {
  document.getElementById("nombre").value = localStorage.getItem("nombre");
  document.getElementById("apellido").value = localStorage.getItem("apellido");
  document.getElementById("email").value = localStorage.getItem("email");
  document.getElementById("telefono").value = localStorage.getItem("telefono");
};

const faltaCargaDatos = () => {
  return (
    isNaN(parseInt(monto.value)) ||
    nombre.value.trim() == "" ||
    apellido.value.trim() == "" ||
    email.value.trim() == "" ||
    telefono.value.trim() == ""
  );
};

const spinner = () => {
  return `<div class="d-flex justify-content-center">
  <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Cargando...</span>
  </div>
</div>`;
};

let URL = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
let compra = 0;
let venta = 0;
fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.getElementById("cotizacioncompra").innerHTML = data[0].casa.compra;
    document.getElementById("cotizacionventa").innerHTML = data[0].casa.venta;
  })
  .catch((err) => {
    console.log("error", err);
  });
