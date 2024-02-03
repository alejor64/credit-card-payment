import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: 'Shirt',
    img: 'https://images.pexels.com/photos/4255642/pexels-photo-4255642.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
    stoke: 5,
    size: ['s', 'm', 'l', 'xl'],
    gender: ['male', 'female', 'kids'],
    descriptions: 'Beatufil shirts',
    slug: 'shirts',
    price: 250
  },
  {
    name: 'Jacket',
    img: 'https://images.pexels.com/photos/4255642/pexels-photo-4255642.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
    stoke: 10,
    size: ['s', 'm', 'l'],
    gender: ['male', 'female'],
    descriptions: 'Awesome jackets',
    slug: 'jacket',
    price: 312
  },
  {
    name: 'Jeans',
    img: 'https://images.pexels.com/photos/4255642/pexels-photo-4255642.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
    stoke: 10,
    size: ['s', 'm', 'l'],
    gender: ['male'],
    descriptions: 'terrific jeans',
    slug: 'jeans',
    price: 243
  },
  {
    name: 'Shoes',
    img: 'https://images.pexels.com/photos/4255642/pexels-photo-4255642.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
    stoke: 10,
    size: ['8', '9', '10'],
    gender: ['male'],
    descriptions: 'Jbalvin shoes',
    slug: 'shoes',
    price: 299
  },
];

export const ProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateStoke: (state, {payload}) => {
      state = state.map(product => {
        if(product.slug === payload.slug) {
          product.stoke = payload.stoke
        }
        return product;
      })
    }
  }
});

export const {updateStoke} = ProductsSlice.actions;