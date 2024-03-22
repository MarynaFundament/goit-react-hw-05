import { Suspense, lazy } from "react";
import { Outlet, useParams, useLocation} from "react-router-dom"
import { useState, useEffect } from "react";
import { getTrendsById } from "../../components/trends-api";

import DetailsElement from "../../components/DetailsElement/DetailsElement"
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/ErrorMessage/ErrorMessage';
import NavigationComponents from "../../components/NavigationComponents";
import { useRef } from "react";

export default function MovieDetailsPage() {

    const {movieId} = useParams()
    const [details, setDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);



       useEffect(() => {
        async function getDataById(){
          

            try {

               setIsLoading(true)
               setError(false)

               const data = await getTrendsById(movieId)
               setDetails(data)
           

               if (data.length === 0) {
                toast.error('Sorry, there are no movies matching your search query. Please try again', { position: 'top-right' });
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
    
    
    return <div>
       
        {details && <DetailsElement details={details} />}

        <NavigationComponents/>
        {isLoading && <Loader/>}
        {error && <Error />}
        <Toaster/>
<Suspense fallback={<div> Loading... </div>}>
   <Outlet/>
</Suspense>
        
         </div>
}