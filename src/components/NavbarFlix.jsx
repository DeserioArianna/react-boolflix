import { useState } from "react";
import { useGlobalStateContext } from "../context/GlobalStateContext";
import axios from "axios";


const NavbarFlix = () => {
    const [query, setQuery] = useState("");
    const { urlMovie, urlTv, setTvShows, setMovies } = useGlobalStateContext();
   
    const handleClick = () => {
        movieTv();
    }

    const movieTv = () => {
        axios.get(`${urlMovie}&query=${query}`).then((resp) => {
            // console.log(resp.data.results)
            const moviesData = resp.data.results.map((curMovie) => ({
                title: curMovie.title,
                originalTitle: curMovie.original_title,
                language: curMovie.original_language,
                vote: curMovie.vote_average,
                image: curMovie.poster_path
            }));
            // console.log(moviesData)
            setMovies(moviesData);
        });
        axios.get(`${urlTv}&query=${query}`).then((resp) => {
            // console.log(resp.data.results)
            const tvData = resp.data.results.map((curTV) => ({
                title: curTV.name,
                originalTitle: curTV.original_name,
                language: curTV.original_language,
                vote: curTV.vote_average,
                image: curTV.poster_path
            }));
            // console.log(tvData)
            setTvShows(tvData);

        })
    };

    return (
        <div className="bg-black p-fixed">
            <header>
                <nav className="nav">
                    <h3 className="title-important">BOOLFLIX</h3>
                    <div>
                        <input
                            type="search"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder="Cerca un film o una serie tv" />
                        <button id="search" onClick={handleClick}>Cerca</button>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default NavbarFlix;