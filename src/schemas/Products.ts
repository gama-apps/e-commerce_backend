const productsSchema =
    [`
  type products {
     _id:String
     name:String
     price:Int
     quantity:Int
     description:String
     onSale:Boolean
     categoryId:String
     isRemove:Boolean
  }

input products_input {
    _id:String
     name:String
     price:Int
     quantity:Int
     description:String
     categoryId:String
}
input products_filter {
     _id:String
     name:String
     price:Int
     quantity:Int
     categoryId:String
}

  type Query {
    products(filter:products_filter): [products]
  }
  
  type Mutation { 
    product_save(products_input:products_input):ID
    product_deleted( _id : String!):Boolean
  }
  
`]

module.exports = productsSchema

