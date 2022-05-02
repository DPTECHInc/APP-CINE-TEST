import { useSelector } from "react-redux";
import { getSearchedFilmsData } from "../../reducers/films";
const FilmDetail = () => {
    const showMovies = useSelector(getSearchedFilmsData);
    console.log(showMovies);

    return <div>FILM DETAIL</div>;
};

export default FilmDetail;
