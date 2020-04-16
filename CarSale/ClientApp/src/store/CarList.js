﻿const incrementCountType = 'INCREMENT_COUNT';
const decrementCountType = 'DECREMENT_COUNT';

const carList = [
    {
        state: "New",
        year: "2018",
        img: "https://cdn4.riastatic.com/photosnew/auto/photo/honda_accord__320162114fx.webp",
        price: 28000,
        mileage: 0,
        name: "Honda Accord LX"
    },
    {
        state: "Used",
        year: "2012",
        img: "https://cdn4.riastatic.com/photosnew/auto/photo/bmw_x5__323917674fx.webp",
        price: 20000,
        mileage: 200000,
        name: "BMW X5"
    },
    {
        state: "Used",
        year: "2018",
        img: "https://cdn0.riastatic.com/photosnew/auto/photo/audi_a6__325912675fx.webp",
        price: 24000,
        mileage: 150000,
        name: "Audi A6"
    },
    {
        state: "New",
        year: "2020",
        img: "https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/renault_duster__788193-620x465x70.webp",
        price: 20223,
        mileage: 0,
        name: "Renault Duster"
    },
    {
        state: "Used",
        year: "2016",
        img: "https://cdn2.riastatic.com/photosnew/auto/photo/volkswagen_passat-b8__318884217fx.webp",
        price: 15800,
        mileage: 49000,
        name: "Volkswagen Passat B8"
    },
    {
        state: "New",
        year: "2019",
        img: "https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/mitsubishi_asx__730362-620x465x70.webp",
        price: 18990,
        mileage: 0,
        name: "Mitsubishi ASX"
    }
]
const initialState = { carList: carList };

export const actionCreators = {
    increment: () => ({ type: incrementCountType }),
    decrement: () => ({ type: decrementCountType })
};

export const reducer = (state, action) => {
   state = state || initialState;

    if (action.type === incrementCountType) {
        return { ...state, count: state.count + 1 };
    }

    if (action.type === decrementCountType) {
        return { ...state, count: state.count - 1 };
    }

    return state;
};
