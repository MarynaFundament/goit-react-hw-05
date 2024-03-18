import { useSearchParams } from "react-router-dom";
import styles from "../../pages/MoviesPage/MoviesPage.module.css"

export default function MovieFilter (){

    const [params, setParams] = useSearchParams ()
    const value = params.get("owner") ?? "";

    const changeFilter = (newFilter) => {
        params.set("owner", newFilter)
        setParams(params);
    };

    return (
        <div>
        <p className= {styles.paragraph}>
        Millions of movies, TV shows and people to discover. Explore now.</p>
         
         <input type="text"
          placeholder="Search for a movie, tv show, person ...."
          style={{
            color: '#999',
            paddingLeft: '30px'
        }}
          className={styles.input} 
          value = {value}
          onChange = {(e) => changeFilter(e.target.value)} />
        </div>
    )
}