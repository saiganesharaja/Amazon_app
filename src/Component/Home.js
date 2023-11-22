import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,

  products: [
    {
      image: "https://m.media-amazon.com/images/I/617SbvdpCoL._SL1500_.jpg",
      name: "Electronic weighing machines ",
      price: 1000,
      quantity: 0,
      id: 0,
    },
    {
      image: "https://m.media-amazon.com/images/I/5155EI7ASdS._SL1382_.jpg",
      name: " Adapter ",
      price: 200,
      quantity: 0,
      id: 1,
    },

    {
      image: "https://m.media-amazon.com/images/S/aplus-media/sc/e162772b-83d3-41b8-a7c4-c048f7c7099c.__CR0,1,3637,2250_PT0_SX970_V1___.jpg",
      name: "Electronic weighing machines ",
      price: 800,
      quantity: 0,
      id: 2,
    },

    {
      image: "https://m.media-amazon.com/images/I/61egMfcDWlL._AC_UL320_.jpg",
      name: "ack pack ",
      price: 600,
      quantity: 0,
      id: 3,
    },
    {
      image: "https://m.media-amazon.com/images/I/31cUFzIbJhL._AC_SR320,320_.jpg",
      name: " Leather Wallet  ",
      price: 1200,
      quantity: 0,
      id: 4,
    },
    {
      image: "https://m.media-amazon.com/images/I/31ROHZJMEUL._SX300_SY300_QL70_FMwebp_.jpg",
      name: "Mouse Jiggler ",
      price: 700,
      quantity: 0,
      id: 5,
    },
    {
      image: "https://m.media-amazon.com/images/I/312dp6ZLIQL._SX300_SY300_QL70_FMwebp_.jpg",
      name: "Nokia C32 ",
      price: 17000,
      quantity: 0,
      id: 5,
    },
    {
      image: "https://m.media-amazon.com/images/I/31ROHZJMEUL._SX300_SY300_QL70_FMwebp_.jpg",
      name: "Mouse Jiggler ",
      price: 700,
      quantity: 0,
      id: 5,
    },
  ],
  cart: [],
  
};

const ProductReducer = createSlice({
  name: "amazon",
  initialState,
  reducers: {
    increment: (state, action) => {
      if (state.products[action.payload].quantity === 10) {
        return;
      }
      state.products[action.payload].quantity++;
      state.products = [...state.products];
      const found = state.cart.find(
        (item) => item.id === state.products[action.payload].id
      );
      if (found) {
        state.products[action.payload].quantity++;
            state.products=[...state.products]
            console.log(state, action.payload);
            const found=state.Cart.find(product=>product.id===state.PRODUCTS[action.payload].id);
        // state.products = [...state.products, action.payload];
      }
    },
    decrement: (state, action) => {
      if (state.products[action.payload].quantity === 0) {
        return;
      }
      state.products[action.payload].quantity--;
      state.products = [...state.products];

      const found = state.cart.find(
        (item) => item.id === state.products[action.payload].id
      );
      if (found) {
        state.products[action.payload].quantity--;
            state.products=[...state.products]
            console.log(state, action.payload);
            const found=state.Cart.find(product=>product.id===state.PRODUCTS[action.payload].id);
      }
    },

    

    createCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },

  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, createCart } = ProductReducer.actions;
export const ProductSelector = (id) => (state) => state.Amazon.products[id];
export default ProductReducer.reducer;