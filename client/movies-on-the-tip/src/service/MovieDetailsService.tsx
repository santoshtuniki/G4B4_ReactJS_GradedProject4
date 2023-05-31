import axios from "axios";
import IMovie from "../model/IMovie";

const getMovieDetails = (path: string) => {
	return axios.get<IMovie>(`${process.env.REACT_APP_API_BASE_URL}${path}`)
		.then(response => response.data)
};

export default getMovieDetails;