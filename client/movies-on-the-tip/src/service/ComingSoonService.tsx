import axios from "axios";
import IMovie from "../model/IMovie";

const getUpcomingMovies = () => {
	return axios.get<IMovie[]>(`${process.env.REACT_APP_API_BASE_URL}/movies-coming`)
		.then(response => response.data);
};

export default getUpcomingMovies;