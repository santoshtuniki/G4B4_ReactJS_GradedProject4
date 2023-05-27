import axios from "axios";
import IMovie from "../model/IMovie";

const getTopRatedIndianMovies = () => {
	return axios.get<IMovie[]>(`${process.env.REACT_APP_API_BASE_URL}/top-rated-india`)
		.then(response => response.data);
};

export default getTopRatedIndianMovies;