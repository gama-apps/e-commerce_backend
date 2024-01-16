const user_schema = [`
  scalar DateTime

  type user {
    _id: String
    first_name: String
    last_name: String
    age: Int
    img: String
    birthday_date: ExtraDateInfo
    email: String
    phone: String
    address: String
    password: String
    createdAt: DateTime
    updatedAt: DateTime
    isRemove: Boolean 
  }

  input user_input {
    _id: String
    first_name: String
    last_name: String
    age: Int
    img: String
    birthday_date: String
    email: String
    phone: String
    address: String
    password: String
  }

  type Mutation{
    user_input_save(user_input: user_input): ID
  }

`]

module.exports = user_schema