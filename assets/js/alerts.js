const alertSA = (mensaje, bgColor, tiempo) => {
  Swal.fire({
    icon: "error",
    title: mensaje,
    position: "top-center",
    showConfirmButton: false,
    toast: true,
    timer: tiempo || 3000,
    timerProgressBar: true,
    background: bgColor || "white",
    color: "#ffffff",
  });
};

const prestamoOtorgado = () => {
  Swal.fire({
    position: "top-center",
    icon: "success",
    title:
      "Su solicitud fue aprobada, nos contactaremos a la brevedad. Muchas gracias por elegirnos!!!",
    showConfirmButton: true,
  });
};

const aceptaPrestamo = () => {
  Swal.fire({
    title: "Esta seguro que desea tomar el prestamo?",
    text: "Su aceptación es un compromiso asumido.",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Acepto",
  }).then((result) => {
    if (result.isConfirmed) {
      prestamoOtorgado();
    }
  });
};
