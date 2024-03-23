
import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useLocation, Link} from "react-router-dom";
import { getMovieByQuery } from "../../api/trends-api";

import toast, { Toaster } from 'react-hot-toast';
import Error from '../../components/ErrorMessage/ErrorMessage';
import MovieFilter from "../../components/MovieFilter/MovieFilter";
import MovieList from "../../components/MovieList/MovieList";
import styles from "../MoviesPage/MoviesPage.module.css"

export default function MoviesPage(){

    const [movie, setMovie] = useState([]);
    const [params] = useSearchParams ();
    const [error, setError] = useState(false);

    const filterData = params.get("owner") ?? "";
  
      
    useEffect(() => {
        async function getDataTrends(){

            try {
               setError(false)
               const data = await getMovieByQuery(filterData)
               setMovie(data.results)

               if (data.length === 0) {
                toast.error('Sorry, there are no images matching your search query. Please try again', { position: 'top-right' });
                return;
               }

            } catch (error) {
                setError(true)
            } 
          
        }
        getDataTrends()
     
    }, 
    [filterData, setMovie, setError]);


    const filteredMovies = useMemo(() => {
        return movie.filter((movie) =>
        movie.title.toLowerCase().includes(filterData.toLowerCase()));
    
    }, [filterData, movie])


    return (
        
        <div className={styles.search}>
            <MovieFilter/>
            
            <div>
             { movie &&  <MovieList movies={filteredMovies}/> }
             { error && <Error /> }
             <Toaster/>
            </div>

        </div>)}