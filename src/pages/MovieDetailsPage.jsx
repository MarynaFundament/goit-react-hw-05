import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

import { getTrendsById } from "./trends-api";


export default function MovieDetailsPage() {

    const {movieId} = useParams()
    const[details, setDetails] = useState([]);

    useEffect(() => {
        async function getDataById(){
            try {
            // setIsLoading = true
               const data = await getTrendsById()
               setDetails(data)

           
            } catch (error) {
            //    setError = true
            } 
            finally {
            //  setIsLoading = false
    
            }
        }
        getDataById()
     
    }, []);
    
    return <div>
        <div>Movies DetailedPage : {movieId}
        </div>

        <div> 
            <p>{details.title}</p>
        </div>
         </div>


}