
import { useState, useEffect } from "react";
import { getTrends } from "./trends-api";

export default function MoviesPage(){

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

    return (
        
        <div>
           

            <div>
           <h1>Hi!!!</h1>
                
            </div>

        </div>
    )
}