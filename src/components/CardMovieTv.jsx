import { useGlobalStateContext } from "../context/GlobalStateContext";
import '@fortawesome/fontawesome-free/css/all.min.css'

const CardMovieTv = () => {
    const { movies, urlImage, tvShows } = useGlobalStateContext();
    const starsArray = [0, 1, 2, 3, 4];

    return (
        <>
            <h2>Film :</h2>
            <div className="card">
                {movies.map((movie) => (
                    <div className="card-body" key={movie.id}>
                        <img src={`${urlImage}/w342/${movie.image}`} alt={movie.title} />
                        <div className="overlay">
                            <h3>{movie.title}</h3>
                            <h4>{movie.originalTitle}</h4>
                            <p className="flag">Language: {movie.language === "en" ? <img src="images/en.png"></img> : movie.language === "it" ? <img src="images/it.png"></img> : <img src="images/placeholder.png"></img> }</p>
                            <p>Vote: {Math.ceil(movie.vote / 2)}</p>
                            <div>
                                {starsArray.map((index) =>
                                    index < Math.ceil(movie.vote / 2) ? (
                                        <span key={index}>
                                            <i className="fa-solid fa-star"></i>
                                        </span>
                                    ) : (
                                        <span key={index}>
                                            <i className="fa-regular fa-star"></i>
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h2>Serie Tv :</h2>
            <div className="card">
                {tvShows.map((tvShow) => (
                    <div className="card-body" key={tvShow.id}>
                        <img src={tvShow.image === null ? "images/poster-non-trovato.jpg" : `${urlImage}/w342/${tvShow.image} `} alt={tvShow.title} />
                        <div className="overlay">
                            <h3>{tvShow.title}</h3>
                            <h4>{tvShow.originalTitle}</h4>
                            <p className="flag">Language: {tvShow.language === "en" ? <img src="images/en.png"></img> : tvShow.language === "it" ? <img src="images/it.png"></img> : <img src="images/placeholder.png"></img> }</p>
                            <p>Vote: {Math.ceil(tvShow.vote / 2)}</p>
                            <div>
                                {starsArray.map((index) =>
                                    index < Math.ceil(tvShow.vote / 2) ? (
                                        <span key={index}>
                                            <i className="fa-solid fa-star"></i>
                                        </span>
                                    ) : (
                                        <span key={index}>
                                            <i className="fa-regular fa-star"></i>
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>

    )
}

export default CardMovieTv;