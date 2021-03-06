import React, { FC, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../store/user/userSlice'
import { authenticateUser } from "../../API"
import classes from './Login.module.css'

const Login: FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [authError, setAuthError] = useState<boolean>(false)

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        setAuthError(false)
        const user = authenticateUser(email, password)
        if (user) {
          dispatch(login(user))
          navigate('/')
        } else {
          setAuthError(true)
        }
    }

    return (
        <main>
            <div className={classes.loginContainer}>
                <h2>LOG IN</h2>
                <br />
                <br />
                <form name="login-form" onSubmit={handleLogin}>
                    <div className={classes.field}>
                        <label className={classes.label} htmlFor="email">Email:</label>
                        <input
                            type="email"
                            placeholder="user1@email.com"
                            id="email"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={classes.field}>
                        <label className={classes.label} htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    {authError && <p className={classes.errorMessage}>This user does not exist, check your spelling.</p>}
                    <button className={classes.loginButton} data-testid="login-btn">Log in</button>
                </form>
            </div>
        </main>
    )
}

export default Login