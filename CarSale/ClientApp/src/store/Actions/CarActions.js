﻿import axios from "axios";
import qs from "qs"
export const actionCreators = {
	GetrequestCarList: (page, count, value, makeId, maxPrice, minPrice) => async (dispatch) => {
		const url = `api/Car/GetCars`;
		let item;
		console.log("value:", value);

		await axios
			.get(url, {
				params: { page: page, count: count, value: value, makeId: makeId, maxPrice: maxPrice, minPrice: minPrice },
				paramsSerializer: params => {
					return qs.stringify(params)
				}
			})
			.then(response =>
				item = response.data);
		let { cars, countPage } = item;
		dispatch({ type: "GetCars", cars, countPage, value, makeId, maxPrice, minPrice });
		return;

	},
	GetCarById: id => async (dispatch) => {
		const url = `api/Car/CarsById`;
		let car;

		await axios
			.get(url, { params: { id: id } })
			.then(response =>
				car = response.data);
		dispatch({ type: "GetCarsById", car });
		return;

	}
	,
	OwnerByCarId: id => async (dispatch) => {
		const url = `api/Car/OwnerByCarId`;
		let user;

		await axios
			.get(url, { params: { id: id } })
			.then(response =>
				user = response.data);
		dispatch({ type: "OwnerByCarId", user });
		return;

	},
	CarsByFilter: value => async (dispatch) => {
		const url = `api/Filters/CarsByFilter`;
		let cars;

		await axios
			.get(url, {
				params: {
					value
				},
				paramsSerializer: params => {
					return qs.stringify(params)
				}
			})
			.then(response =>
				cars = response.data);
		dispatch({ type: "CarsByFilter", cars });
		return;

	},
	AddNewCar: (model) => async (dispatch) => {
		const url = `api/Car/CreateNewCar`;
		console.log(url);


		await axios
			.post(url, model)
			.then(response =>
				response.data);
				return;

	},

};