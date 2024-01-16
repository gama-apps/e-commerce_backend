import {model, Schema} from "mongoose";

const collectionName = 'products'

const schema = new Schema(
    {
        _id: {type: String, required: true},
        name: String,
        price: Number,
        quantity: {type: Number, default: 0},
        description: String,
        onSale: {type: Boolean, default: true},
        categoryId: String,
        isRemove: {type: Boolean, default: false}
    }, {
        versionKey: false,
        timestamps: true,
        collection: collectionName,
        _id: false
    }
);

export const productsModel = model(collectionName, schema)