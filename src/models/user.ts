import {model, Schema} from 'mongoose'
const collectionName = 'users'

const userSchema = new Schema({
  _id: { type: String},
  first_name: { type: String },
  last_name: { type: String },
  age: { type: Number },
  img: { type: String },
  birthday_date: { type: Object },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
  password: { type: String },
  isRemove: {type: Boolean, default: false}
},{
  versionKey: false,
  timestamps: true,
  collection: collectionName,
  _id: false
});

export const userModel = model(collectionName, userSchema)