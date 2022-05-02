import axios from "axios";
import { getSearchedFilmsData, setActualFilmsData } from "../../reducers/films/index";
import { useDispatch, useSelector } from "react-redux";
//
// TIP : Utiliser une instance avec axios en respectant les usecases (implementer une instance)
//

const KEY = "api_key=a0c630ef365f9c2a2dcc057862e43f09";
const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});

export const GetActualFilms = async () => {
    const dispatch = useDispatch();
    // api.get(`/trending/movie/week?${KEY}`)
    api.get(`trending/movie/week?${KEY}&language=fr`)
        //SUCCESS
        .then((res) => dispatch(setActualFilmsData(res.data.results)))
        //ERROR
        .catch((error) => console.log(error, "une erreur s'est produite"));
};
export const GetFilmsList = async () => {
    "movie/top_rated?";
};
export const GetFilmsDetail = async () => {
    const searchedMovies = useSelector();
    const dispatch = useDispatch();
    api.get(`search/movie?${KEY}&query=${searchedMovies}&language=fr`)
        //SUCCESS
        .then((res) => dispatch(getSearchedFilmsData(res.results)))
        //ERROR
        .catch((error) => console.log(error, "une erreur s'est produite"));
};
