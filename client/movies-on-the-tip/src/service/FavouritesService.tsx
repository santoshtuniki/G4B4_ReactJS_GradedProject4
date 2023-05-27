import axios from "axios";
import IMovie from "../model/IMovie";

const getFavouriteMovies = () => {
	return axios.get<IMovie[]>(`${process.env.REACT_APP_API_BASE_URL}/favourite`)
		.then(response => response.data);
};

const addToFavourites = (newFavourite: Omit<IMovie, "id">) => {
	return axios.post<IMovie>(
		`${process.env.REACT_APP_API_BASE_URL}/favourite`,
		newFavourite,
		{
			headers: {
				'Content-Type': 'application/json'
			}
		}
	)
		.then(response => response.data);
}

const removeFromFavourites = (id: number) => {
	return axios.delete(`${process.env.REACT_APP_API_BASE_URL}/favourite/${id}`)
		.then(response => response.data)
};


export {
	getFavouriteMovies,
	addToFavourites,
	removeFromFavourites
};