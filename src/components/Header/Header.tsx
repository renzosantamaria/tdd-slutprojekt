import { FC } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate, Link, useMatch } from "react-router-dom"
import { RootState } from "../../store/store"
import { logout } from "../../store/user/userSlice"
import classes from './Header.module.css'

const Header: FC = () => {
    const user = useSelector((state: RootState) => state.user.user)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const insideLoginPage = useMatch('login')

    const handleLogout = () => {
        dispatch(logout())
        navigate('/')
    }
    return (
        <header className={classes.header}>
            <nav className={classes.navigation}>
                <Link to="/">
                    <h1>Home</h1>
                </Link>
                {!user && !insideLoginPage && <Link to="/login">Login</Link>}
                {user && <button onClick={handleLogout}>Logout</button>}
            </nav>
        </header>
    )
}

export default Header