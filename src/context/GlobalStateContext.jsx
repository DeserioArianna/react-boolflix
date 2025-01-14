import { createContext, useState } from "react";

const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([]);

    const apiKey = "47815b6e991571d7a97da5ea411352f7";
    const basicUrl = "https://api.themoviedb.org/3/search";
    const urlMovie = `${basicUrl}/movie?api_key=${apiKey}`;
    const urlTv = `${basicUrl}/tv?api_key=${apiKey}`;

    return (
        <GlobalStateContext.Provider
            value={{
                query,
                setQuery,
                movies,
                setMovies,
                tvShows,
                setTvShows,
                urlMovie,
                urlTv
            }}>
            {children}
        </GlobalStateContext.Provider>
    );

};

export {
    GlobalStateProvider,
    GlobalStateContext
};