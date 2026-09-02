import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    // ADD FOOD TO CART
    addToCart: (state, action) => {
      const food = action.payload;

      const existingItem = state.cartItems.find(
        (item) => item.id === food.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...food,
          quantity: 1,
        });
      }

      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems)
      );
    },

    // REMOVE FOOD FROM CART
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems)
      );
    },

    // UPDATE QUANTITY
    updateQuantity: (state, action) => {
      const { id, change } = action.payload;

      const item = state.cartItems.find(
        (item) => item.id === id
      );

      if (item) {
        item.quantity += change;

        if (item.quantity < 1) {
          item.quantity = 1;
        }
      }

      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems)
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
      localStorage.removeItem("cartItems");
    },


    // CALCULATE TOTAL
    calculateTotal: (state) => {
      state.totalAmount = state.cartItems.reduce(
        (total, item) => {
          return total + item.price * item.quantity;
        },
        0
      );
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, calculateTotal, clearCart} = cartSlice.actions;

export default cartSlice.reducer;