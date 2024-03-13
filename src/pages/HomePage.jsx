
import { useState, useEffect } from "react";
import { getTrends } from "./trends-api";

import MovieList from "./MovieList.jsx"

export default function HomePage(){

    const[trend, setTrend] = useState([]);

    useEffect(() => {
        async function getDataTrends(){
            try {
            // setIsLoading = true
               const data = await getTrends()
               setTrend(data)

           
            } catch (error) {
            //    setError = true
            } 
            finally {
            //  setIsLoading = false
    
            }
        }
        getDataTrends()
     
    }, []);

   

    return <div> 
        <h1>Welcome</h1>    
        {trend && <MovieList trend = {trend}/>}

        </div>
}