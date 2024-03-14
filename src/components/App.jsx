import { Outlet, Route, Routes} from "react-router-dom"
import Navigation from "./Navigation/Navigation";

import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage"
import MovieDetailsPage from "../pages/MovieDetailsPage";

 export const App = () => {
  
  return (
    <div>
 
    <Navigation/>

        <Routes>

            <Route path = "/" element={<HomePage/>} />
            {/* <Route path = "/movies" element={<MoviesPage/>}  /> */}
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
         <Route path="subpage-a" element = {<div> Subpage A</div>}/>
         <Route path="subpage-b"  element = {<div> Subpage B</div>}/>
              </Route>
            <Route path = "*" element={ <div> Oops! Not found!</div> } />

        </Routes>
 
  
        <Outlet/>
    </div>
  );
};
