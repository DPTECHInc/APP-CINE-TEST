import "../../styles/moviesCard.css";
import MoviesCard from "../../components/moviesCard";
import { useSelector } from "react-redux";
import { setActualFilmsData } from "../../reducers/films/index";

const FilmList = () => {
    const movies = useSelector(setActualFilmsData);
    let renderMovies = "";
    renderMovies =
        movies.payload != null ? (
            movies.payload?.movies?.moviesDatas?.map(
                (movie, index) => index < 6 && <MoviesCard key={index} data={movie} />
            )
        ) : (
            <div className="movies-error">
                <h3>Pas de données reçues</h3>
            </div>
        );
    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2></h2>
            </div>
            <div className="movie-container">{renderMovies}</div>;
        </div>
    );
};

export default FilmList;
