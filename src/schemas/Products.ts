const productsSchema = [`
  type products {
    nombre: String
  }

  type Query {
    products: [products]
  }
`]

module.exports = productsSchema

