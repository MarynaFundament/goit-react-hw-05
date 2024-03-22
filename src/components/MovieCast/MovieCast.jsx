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
                toast.error('Sorry, there are no cast here', { position: 'top-right' });
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


    const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';


    return(<div className={styles.first}> 

            <h2>Cast {cast.cast}</h2>
        
            <ul className={styles.list}>
                
                {cast.map(({ id, name, character, profile_path, original_name }) => (
                    <li key={id} className={styles.card}>
                        <img
                            src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : defaultImg}
                            className={styles.img}
                            alt={original_name}
                        />
                        <div className={styles.caption}>
                            <p className={styles.paragraph}> Name: {name}</p>
                            <p className={styles.paragraph}> Character: {character} </p>
                        </div>
                    </li>
                ))}
            </ul>
            
            {isLoading && <Loader/>}
            {error && <Error />}
            <Toaster/>

        </div>
        
    )
}