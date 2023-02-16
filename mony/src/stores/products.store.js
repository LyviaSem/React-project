import { flow, types } from "mobx-state-tree";
import { getProducts } from "../services/Products.service";

const Product = types.model("Product", {
    id: types.number,
    title: types.string,
    description: types.string,
    price: types.number
})

export const ProductsStore = types.model("ProductsStore", {
        products: types.array(Product),
})
.actions((self) => ({
    loadProducts: flow(function* () {
        try {
            self.products = yield getProducts();
        } catch (err) {
            console.log(err)
        }
    }),
}));

export const productsStore = ProductsStore.create({
    products: []
})