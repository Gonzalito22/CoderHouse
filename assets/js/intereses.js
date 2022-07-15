const calcularInteres = (montoPrestamo, plazo) => {
  let interesesLista = [
    {
      plazo: 12,
      taza: 1.59,
    },
    {
      plazo: 24,
      taza: 1.5,
    },
    {
      plazo: 36,
      taza: 1.42,
    },
    {
      plazo: 48,
      taza: 1.35,
    },
    {
      plazo: 60,
      taza: 1.29,
    },
  ];

  const tasaInteres = interesesLista.find(
    (interes) => interes.plazo === parseInt(plazo)
  );
  return (montoPrestamo * ((plazo / 12) * tasaInteres.taza)) / plazo;
};
