import axios from "axios";
import IMovie from "../model/IMovie";

const getTopRatedMovies = () => {
	return axios.get<IMovie[]>(`${process.env.REACT_APP_API_BASE_URL}/top-rated-movies`)
		.then(response => response.data);
};

export default getTopRatedMovies;