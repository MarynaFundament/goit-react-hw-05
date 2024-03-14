import { useParams, NavLink } from "react-router-dom"
import { useState, useEffect } from "react";

import { getTrendsById } from "./trends-api";


export default function MovieDetailsPage() {

    const {movieId} = useParams()
    const[details, setDetails] = useState([]);

    useEffect(() => {
        async function getDataById(){
            // setIsLoading = true
            
            try {
               const data = await getTrendsById(movieId)
               setDetails(data)

           
            } catch (error) {
            //    setError = true
            } 
            finally {
            //  setIsLoading = false
    
            }
        }
        getDataById()
     
    }, [movieId]);
    
    return <div>
        <div>Movies DetailedPage : {movieId}
        </div>

        {details &&  <div> 
            <h1>{details.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt={details.title} />
            <p> User Score: {details.popularity}</p>
            <h2>Overview</h2>
            <p>{details.overview}</p>
            <h2>Genres</h2>
            {/* <ul>
                        {details.genres.map(genre => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul> */}
        </div>}

        <ul>
            <li>
                <NavLink to = "subpage-a"> Subpage A</NavLink>
            </li>
            <li>
                <NavLink to = "subpage-b">Subpage B</NavLink>
            </li>
        </ul>

       
         </div>


}