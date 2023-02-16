import { getRoot, types } from "mobx-state-tree";

const CartProduct = types.model("CartProduct", {
    idplat: types.number,
    title: types.string,
    ingredient: types.array(types.string),
    price: types.number,
})
.actions((self) => ({
    increment() {
        self.quantity += 1;
    },
    decrement() {
        const {cart: {removeFromCart}} = getRoot(self);
        if(self.quantity <= 1) {
            removeFromCart(self.id);
        }
        else {
            self.quantity -= 1;
        }
    }
}))
.views((self) => ({
    get totalPrice() {
        return self.quantity * self.price;
    }
}));

export const CartStore = types.model("CartStore", {
    products : types.array(CartProduct)
})
.actions((self) => ({
    // fonction pour modifier les valeurs de notre store
    addToCart(product) {
        const foundProduct = self.products.find(p => p.id === product.id);
        if(foundProduct) {
            console.log('add one more')
            foundProduct.quantity += product.quantity;
        }
        else {
            self.products.push(product);
            console.log(self.products)
        }
    },
    removeFromCart(productId) {
        const product = self.products = self.products.filter((product) => product.id !== productId);
        self.products.remove(product);
    },
    resetCart() {
        self.products.clear();
    }
}))
.views((self) => ({
    get totalPrice() {
        return self.products.reduce((acc, currentP) => {
            return acc + currentP.totalPrice
        }, 0)
    },
    get productTotalQuantity() {
        return self.products.reduce((acc, currentP) => acc + currentP.quantity, 0)
    }
}));

export const cartStore = CartStore.create({
    products : []
});