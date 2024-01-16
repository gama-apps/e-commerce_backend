import {productsModel} from "../models/Products";

import {v4 as uuidv4} from 'uuid';

const products = async (_: any, {filter = {}}: { filter: any }) => {

    try {
        const query: any = {isRemove: false}
        const {
            _id,
            name,
            price,
            onSale,
            categoryId
        } = filter

        if (_id) query._id = _id
        if (name) query.name = name
        if (price) query.price = price
        if (onSale) query.onSale = onSale
        if (categoryId) query.categoryId = categoryId
        const aggregate = await productsModel.aggregate([])
            .match(query)
        return aggregate;
    } catch (e) {
        return e
    }
};

const products_create = async (_: any, {products_input}: { products_input: any }) => {
    try {
        const ID = uuidv4();
        const {
            name,
            price,
            quantity,
            description,
            categoryId
        } = products_input

        const newProduct = await new productsModel({
            _id: ID,
            name,
            price,
            quantity,
            description,
            categoryId
        }).save()
        return newProduct._id
    } catch (e) {
        return e
    }
}

const products_update = async (_: any, {products_input}: { products_input: any }) => {
    try {
        const {
            _id,
            name,
            price,
            quantity,
            description,
            categoryId
        } = products_input
        await productsModel.updateOne(
            {_id},
            {
                $set: {
                    name,
                    price,
                    quantity,
                    description,
                    categoryId
                }
            }
        )
        return _id;
    } catch (e) {
        return e
    }
}
const product_save = async (_: any, {products_input}: { products_input: any }) => {
    const actions = {
        create: products_create,
        update: products_update
    };
    const action = products_input._id ? 'update' : 'create';
    return actions[action](_, {products_input});
}

const product_deleted = async (_: any, {_id}: { _id: String }) => {
    try {
        const product = productsModel.findOne({_id, isRemove: false}).lean()
        await product.updateOne({_id}, {$set: {isRemove: true}})
        return true
    } catch (e) {
        return e
    }
}

module.exports = {
    Query: {
        products,
    },
    Mutation: {
        product_save,
        product_deleted
    }
};