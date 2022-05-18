import { FC } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import { classicNameResolver } from "typescript"
import classes from './Header.module.css'

const Header: FC = () => {
    return (
        <header className={classes.header}>
            <nav className={classes.navigation}>
                <Link to="/">
                    <h1>Home</h1>
                </Link>
                <Link to="/login">
                    <h1>Login</h1>
                </Link>
            </nav>
        </header>
    )
}

export default Header