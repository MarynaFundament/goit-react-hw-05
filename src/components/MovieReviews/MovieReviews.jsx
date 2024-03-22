import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getReviewsById } from "../trends-api"

import toast, { Toaster } from 'react-hot-toast';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/ErrorMessage/ErrorMessage';
import styles from "../MovieReviews/MovieReviews.module.css"


export default function MovieReviews(){

    const {movieId} = useParams()
    const [review, setReview ] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
  

    useEffect(() => {
        async function getDataById(){
      
            
            try {
               setIsLoading(true)
               setError(false)

               const data = await getReviewsById(movieId)
               setReview(data)

               if (data.length === 0) {
                toast.error('Sorry, there are no reviews here', { position: 'top-right' });
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


    return(
        <div>
            <h2 className={styles.header}> Movie reviews </h2>

            <ul className={styles.list}>
            {review.length > 0  ? 

            review.map(({id, author, content}) => (
            
                <li key={id} className={styles.item}>
                   <p className={styles.author}> Author: {author}</p> 
                   <p>  {content} </p>
                </li> 
               
             )) :
             <p> "Oops, no review here"</p>
             }
            </ul>

        {isLoading && <Loader/>}
        {error && <Error />}
        <Toaster/>

        </div>
    )}