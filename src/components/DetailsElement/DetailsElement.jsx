import { Link, useLocation } from "react-router-dom"
import { useRef } from "react"
import styles from "../../pages/MovieDetailsPage/MovieDetailsPage.module.css"

export default function DetailsElement ({ details}){

    const location = useLocation()
    const backLinkRef = useRef(location.state ?? "./movies")
    console.log(backLinkRef)

    return (<div> 
        <h2 className={styles.title}>{details.title}</h2>

        <Link
         to={backLinkRef.current}
         className = {styles.back}> 
         Go back 
        </Link>

        <div className={styles.flex}>
        <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} 
        className = {styles.img}
        alt={details.title} />

        <div>
      
        <h2> Overview </h2>
        <p className={styles.overview}> {details.overview} </p>
        <h2> User Score: {details.popularity} </h2> 
      
        </div>

        </div>
    </div>

    )}