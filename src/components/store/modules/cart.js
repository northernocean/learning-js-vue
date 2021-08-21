const cartStore = {
  namespaced: true,
  state() {
    return {
      items: [],
      total: 0,
      qty: 0,
    };
  },
  mutations: {
    addProductToCart(state, payload) {
      const item = payload.product;
      const productInCartIndex = state.items.findIndex(
        (ci) => ci.productId === item.id
      );

      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: item.id,
          title: item.title,
          image: item.image,
          price: item.price,
          qty: 1,
        };
        state.items.push(newItem);
      }
      state.qty++;
      state.total += item.price;
    },

    removeProductFromCart(state, payload) {
      const prodId = payload.itemId;
      const productInCartIndex = state.items.findIndex(
        (cartItem) => cartItem.productId === prodId
      );
      const prodData = state.items[productInCartIndex];
      state.items.splice(productInCartIndex, 1);
      state.qty -= prodData.qty;
      state.total -= prodData.price * prodData.qty;
    },
  },
  actions: {
    addProductToCart(context, payload) {
      context.commit('addProductToCart', payload);
    },
    removeProductFromCart(context, payload) {
      context.commit('removeProductFromCart', payload);
    },
  },
  getters: {
    cartTotal(state) {
      return state.total.toFixed(2);
    },
    cartItems(state) {
      return state.items;
    },
    cartQuantity(state) {
      return state.qty;
    }
  }
};

export default cartStore;