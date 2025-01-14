import { useContext, useEffect } from "react";
import { GlobalStateContext } from "../context/GlobalStateContext";
import axios from "axios";

const NavbarFlix = () => {
    const { query, setQuery, urlMovie, urlTv } = useContext(GlobalStateContext);

    const handleClick = () => {
       
    }
   
    useEffect(() => {
        axios.get(`${urlMovie}&query=${query}`).then((resp) =>{
            console.log(resp.data.results)
            const moviesData = resp.data.results.map((curMovie) => ({
                title: curMovie.title,
                originalTitle: curMovie.original_title,
                language: curMovie.original_language,
                vote: curMovie.vote_average
            }));
            console.log(moviesData)
        });
        axios.get(`${urlTv}&query=${query}`).then((resp) => {
                console.log(resp.data)
            })
    });

    return (
        <>
            <header>
                <nav>
                    <input
                        type="search"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Cerca un film o una serie tv" />
                    <button >Cerca</button>
                </nav>
            </header>
        </>
    );
};

export default NavbarFlix;