import { Link, useLocation } from "react-router-dom"
import styles from "../../pages/HomePage/HomePage.module.css"

export default function MovieList ({movies}){
  const location = useLocation();
  console.log(location)

    return(
    <div>

        <ul className = {styles.list}>
           {movies.map((movie) => (
           <div  className = {styles.li} key={movie.id}>
         
             <Link 
          
               to={`/movies/${movie.id}`} 
               className = {styles.link}
               state={location}
            
              >
             
             
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