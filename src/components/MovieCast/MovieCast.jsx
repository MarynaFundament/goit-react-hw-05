import {  useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import {getCastById} from "../../pages/trends-api"

import styles from "../MovieCast/MovieCast.module.css"

import toast, { Toaster } from 'react-hot-toast';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/ErrorMessage/ErrorMessage';

export default function MovieCast(){
    const {movieId} = useParams()
    const [cast, setCast] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getDataById(){
         
            
            try {

               setIsLoading(true)
               setError(false)

               const data = await getCastById(movieId)
               setCast(data)

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
        getDataById()
     
    }, [movieId]);

    return(<div> 

            <h2 className={styles.header}>Cast: {cast.cast}</h2>
           
            <ul className={styles.list}>
            {cast  && 

             cast.map(({id, name, character, profile_path, original_name}) => (
            
                <li key={id}   className={styles.card} >
                   <img src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    className={styles.img}
                    alt={original_name} />

                    <div className={styles.caption}>
                    <p className={styles.paragraph}> Name: {name}</p>
                    <p className={styles.paragraph}> Character: {character} </p>

                    </div>
                </li> 
               
             ))
            }

            </ul>
            
            {isLoading && <Loader/>}
            {error && <Error />}
            <Toaster/>

        </div>
        
    )
}