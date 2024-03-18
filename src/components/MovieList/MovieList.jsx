import { Link } from "react-router-dom"
import styles from "../../pages/HomePage/HomePage.module.css"

export default function MovieList ({trend}){
    return(
    <div>

        <ul className = {styles.list}>
           {trend.map((movie) => (
           <div  className = {styles.li}>
         
             <Link 
               to={`/movies/${movie.id}`} 
               className = {styles.link}
               key={movie.id}>
             
             
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className ={styles.img}
              alt= {movie.title} />
            
                {movie.title}
              </Link>

            </div>
           ))}
         </ul>
    </div>)

}