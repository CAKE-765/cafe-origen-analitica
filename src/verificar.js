const { ventas } = require("./datos");

const {
  totalVendido,
  unidadesVendidas,
  ventasPorCiudad,
  totalPorCiudad,
  topProductosPorValor
} = require("./analitica");


console.log("=== VERIFICACIÓN ===");


const total = totalVendido(ventas);

console.log(
  `totalVendido        OK (${total} / 985000)`
);


const unidades = unidadesVendidas(ventas);

console.log(
  `unidadesVendidas    OK (${unidades} / 21)`
);


const medellin = ventasPorCiudad(ventas, "Medellín");

console.log(
  `ventasPorCiudad Medellín OK (${medellin} / 356000)`
);


console.log("\nTotal por ciudad:");

console.log(totalPorCiudad(ventas));


console.log("\nTop 3 productos:");

console.log(topProductosPorValor(ventas, 3));

