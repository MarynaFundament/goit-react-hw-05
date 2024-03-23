import toast, { Toaster } from 'react-hot-toast';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/ErrorMessage/ErrorMessage';

import { useState, useEffect } from "react";
import { getTrends } from "../../api/trends-api";

import MovieList from "../../components/MovieList/MovieList"

export default function HomePage(){

    const[trendingMovies, setTrendingMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getDataTrends(){
            try {
               setIsLoading(true)
               setError(null);

               const data = await getTrends()
               setTrendingMovies(data)

               if (data.length === 0) {
                toast.error('Sorry, there are no movies matching your search query. Please try again', { position: 'top-right' });
                return;
              }

            } catch (error) {
                setError(error)
            } 
            finally {
                setIsLoading(false)
    
            }
        }
        getDataTrends()
     
    }, []);

   

    return <div> 
    
 
       <h1 > Trending </h1>  

        {trendingMovies.length > 0 && <MovieList movies = {trendingMovies}/>}
        {isLoading && <Loader/>}
        {error && <Error />}
        <Toaster/>

        </div>
}