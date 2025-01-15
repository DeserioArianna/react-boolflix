import { createContext, useContext, useState } from "react";

const GlobalStateContext = createContext();

const useGlobalStateContext = () => {
   return useContext(GlobalStateContext);
}

const GlobalStateProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([]);

    const apiKey = "47815b6e991571d7a97da5ea411352f7";
    const basicUrl = "https://api.themoviedb.org/3/search";
    const urlMovie = `${basicUrl}/movie?api_key=${apiKey}`;
    const urlTv = `${basicUrl}/tv?api_key=${apiKey}`;
    const urlImage = "https://image.tmdb.org/t/p/";

    return (
        <GlobalStateContext.Provider
            value={{
                urlImage,
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
    useGlobalStateContext
};