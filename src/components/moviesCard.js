import "../styles/moviesCard.css";
const MoviesCard = (props) => {
    const { data } = props;
    const moviesImg = "https://image.tmdb.org/t/p/w300/" + data.poster_path;
    return (
        <div className="moviesCard">
            <img className="moviesImg" src={moviesImg} alt={data.original_title} />
            <h3 className="moviesTitles">{data.original_title}</h3>
            <h4 className="moviesDescription">{data.overview}</h4>
            <h5> Sortie le {data.release_date}</h5>
        </div>
    );
};
export default MoviesCard;
