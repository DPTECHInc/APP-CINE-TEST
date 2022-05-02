import FilmList from "../Films/List";
import { GetActualFilms } from "../../api/moviesdatabase";
const Home = () => {
    GetActualFilms();
    return (
        <div className="Home">
            <div className="HomeText">
                <h1>Bienvenue</h1>
            </div>
            <div className="HomeUnderText">
                <h3>Les films à l'affiche</h3>
                <FilmList />
            </div>
        </div>
    );
};

export default Home;
