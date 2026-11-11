const valorVenta = (venta) => venta.cantidad * venta.precio;

function totalVendido(ventas) {
    let total = 0;
    for (const venta of ventas) total += valorVenta(venta);
    return total;
}

function unidadesVendidas(ventas) {
    let total = 0;
    for (const venta of ventas) total += venta.cantidad;
    return total;
}

function ventaMayor(ventas) {
    if (ventas.length === 0) return null;

    let mayor = ventas[0];
    for (const venta of ventas) {
        if (valorVenta(venta) > valorVenta(mayor)) mayor = venta;
    }
    return mayor;
}

function ticketPromedio(ventas) {
    let total = 0;
    let ventasValidas = 0;
    for (const venta of ventas) {
        if (venta.cantidad > 0) {
            total += valorVenta(venta);
            ventasValidas++;
        }
    }
    return ventasValidas === 0 ? 0 : total / ventasValidas;
}

const normalizar = (texto) => texto.trim().toLowerCase();

function ventasPorCiudad(ventas, ciudad) {
    let total = 0;
    for (const venta of ventas) {
        if (normalizar(venta.ciudad) === normalizar(ciudad)) {
            total += valorVenta(venta);
        }
    }
    return total;
}

// Normalizar ciudad
const normalizar1 = (texto) => {
  return texto.trim().toLowerCase();
};


// Nombre bonito de la ciudad
const nombreCiudad = (texto) => {
  const t = normalizar(texto);

  return t[0].toUpperCase() + t.slice(1);
};


// Total por ciudad
function totalPorCiudad(ventas) {
  return ventas.reduce((acc, v) => {
    const ciudad = nombreCiudad(v.ciudad);

    acc[ciudad] = (acc[ciudad] || 0) + valorVenta(v);

    return acc;
  }, {});
}


// Unidades por producto
function unidadesPorProducto(ventas) {
  return ventas.reduce((acc, v) => {
    acc[v.producto] = (acc[v.producto] || 0) + v.cantidad;

    return acc;
  }, {});
}


// Top productos por valor
function topProductosPorValor(ventas, k) {
  const porProducto = ventas.reduce((acc, v) => {
    acc[v.producto] =
      (acc[v.producto] || 0) + valorVenta(v);

    return acc;
  }, {});

  return Object.entries(porProducto)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k);
}

module.exports = {
  valorVenta,
  normalizar,
  nombreCiudad,
  totalVendido,
  unidadesVendidas,
  ventaMayor,
  ticketPromedio,
  ventasPorCiudad,
  totalPorCiudad,
  unidadesPorProducto,
  topProductosPorValor
};





