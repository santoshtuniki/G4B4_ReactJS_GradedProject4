import axios from "axios";
import IMovie from "../model/IMovie";

const getInTheaterMovies = () => {
	return axios.get<IMovie[]>(`${process.env.REACT_APP_API_BASE_URL}/movies-in-theaters`)
		.then(response => response.data);
};

export default getInTheaterMovies;