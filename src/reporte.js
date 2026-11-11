const { ventas } = require("./datos");

const {
  totalVendido,
  unidadesVendidas,
  ventaMayor,
  ticketPromedio,
  totalPorCiudad,
  topProductosPorValor
} = require("./analitica");


console.log("=== CAFÉ ORIGEN - REPORTE v0.1 ===");


console.log("\nResumen general");

console.log(
  `Total vendido: $${totalVendido(ventas).toLocaleString("es-CO")}`
);

console.log(
  `Unidades vendidas: ${unidadesVendidas(ventas)}`
);

console.log(
  `Ticket promedio: $${ticketPromedio(ventas).toLocaleString("es-CO", {
    maximumFractionDigits: 0
  })}`
);


const mayor = ventaMayor(ventas);

console.log(
  `Venta mayor: venta ${mayor.id} - ${mayor.cliente}`
);


console.log("\nVentas por ciudad");

const ciudades = totalPorCiudad(ventas);

for (const [ciudad, total] of Object.entries(ciudades)) {
  console.log(
    `  ${ciudad}: $${total.toLocaleString("es-CO")}`
  );
}


console.log("\nTop 3 por valor");

const top3 = topProductosPorValor(ventas, 3);

top3.forEach(([producto, total], index) => {
  console.log(
    `${index + 1}. ${producto}: $${total.toLocaleString("es-CO")}`
  );
});


console.log("\nDía 2026-09-07:");

const ventasDelDia = ventas.filter(
  v => v.fecha === "2026-09-07"
);

const totalDelDia = ventasDelDia.reduce(
  (total, v) => total + v.cantidad * v.precio,
  0
);

const ticketDelDia =
  ventasDelDia.length > 0
    ? totalDelDia / ventasDelDia.length
    : 0;

console.log(
  `Ventas: ${ventasDelDia.length}`
);

console.log(
  `Total: $${totalDelDia.toLocaleString("es-CO")}`
);

console.log(
  `Ticket: $${ticketDelDia.toLocaleString("es-CO")}`
);