import { Link } from "react-router-dom"


export default function MovieList ({trend}){
    return(
    <div>
        <ul>
           {trend.map((movie) => (
             <Link to={`/movies/${movie.id}`} key={movie.id}>
              {movie.title}
              </Link>
           ))}
         </ul>
    </div>)

}