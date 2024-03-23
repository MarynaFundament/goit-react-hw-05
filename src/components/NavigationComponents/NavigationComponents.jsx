import { NavLink } from "react-router-dom"


export default function NavigationComponents(){
    return (
        <ul >
        <li>
            <NavLink to = "cast"> MovieCast </NavLink>
        </li>
        <li>
            <NavLink to = "reviews">MovieReviews</NavLink>
        </li>
    </ul>
    )
}