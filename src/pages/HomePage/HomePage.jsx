import toast, { Toaster } from 'react-hot-toast';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/ErrorMessage/ErrorMessage';

import { useState, useEffect } from "react";
import { getTrends } from "../trends-api";

import MovieList from "../../components/MovieList/MovieList"
import styles from "../HomePage/HomePage.module.css"

export default function HomePage(){

    const[trend, setTrend] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getDataTrends(){
            try {
               setIsLoading(true)
               setError(false)

               const data = await getTrends()
               setTrend(data)

               if (data.length === 0) {
                toast.error('Sorry, there are no images matching your search query. Please try again', { position: 'top-right' });
                return;
              }

            } catch (error) {
                setError(true)
            } 
            finally {
                setIsLoading(false)
    
            }
        }
        getDataTrends()
     
    }, []);

   

    return <div> 
    
 
       <h1 > Trending </h1>  

        {trend && <MovieList trend = {trend}/>}

        {isLoading && <Loader/>}
        {error && <Error />}
        <Toaster/>

        </div>
}