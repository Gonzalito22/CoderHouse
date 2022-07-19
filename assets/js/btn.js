btnCalcular.addEventListener("click", () => {
  faltaCargaDatos()
    ? alertSA("Complete todos los datos solicitados", "#FF0000", "3000")
    : calcularResultado();
  localStorage.setItem("nombre", document.getElementById("nombre").value);
  localStorage.setItem("apellido", document.getElementById("apellido").value);
  localStorage.setItem("email", document.getElementById("email").value);
  localStorage.setItem("telefono", document.getElementById("telefono").value);
});

btnLimpiar.addEventListener("click", () => {
  limpiarDatos();
});

btnAceptar.addEventListener("click", () => {
  aceptaPrestamo();
});

function init() {
  let select = document.querySelector("#plazo");

  let option1 = document.createElement("option");
  option1.setAttribute("value", "12");
  let option1Texto = document.createTextNode("12");
  option1.appendChild(option1Texto);

  let option2 = document.createElement("option");
  option2.setAttribute("value", "24");
  let option2Texto = document.createTextNode("24");
  option2.appendChild(option2Texto);

  let option3 = document.createElement("option");
  option3.setAttribute("value", "36");
  let option3Texto = document.createTextNode("36");
  option3.appendChild(option3Texto);

  let option4 = document.createElement("option");
  option4.setAttribute("value", "48");
  let option4Texto = document.createTextNode("48");
  option4.appendChild(option4Texto);

  let option5 = document.createElement("option");
  option5.setAttribute("value", "60");
  let option5Texto = document.createTextNode("60");
  option5.appendChild(option5Texto);

  select.appendChild(option1);
  select.appendChild(option2);
  select.appendChild(option3);
  select.appendChild(option4);
  select.appendChild(option5);

  document.body.select.appendChild(select);
}

window.onload = init;
