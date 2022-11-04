import { Link } from "react-router-dom"
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    return <header className={classes.header}>
        <div className={classes.logo}>Films App</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Films</Link>
                </li>
                <li>
                    <Link to='/favorites'>My Favorites</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation