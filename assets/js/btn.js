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
