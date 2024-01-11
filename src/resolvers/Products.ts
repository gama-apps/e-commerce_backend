const products = async () => {
  // Tu lógica de recuperación de productos aquí
  return [{ name: "Producto 1" }, { name: "Producto 2" }];
};

module.exports = {
  Query: {
    products,
  },
};