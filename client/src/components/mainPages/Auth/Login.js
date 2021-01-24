import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './login.css'

function Login() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const onInputChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            
            await axios.post('/user/login', {...user})

            localStorage.setItem('firstLogin', true)

            window.location.href = '/'

        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={onSubmitForm}>

                <h2>Login</h2>

                <input type="email" name="email" placeholder="Enter here you Email" value={user.email} onChange={onInputChange} autoFocus='on' autoSave="on" required />

                <input type="password" name="password" placeholder="Enter the Password" value={user.password} onChange={onInputChange} required />

                <div className="row">
                    <button type="submit">Login</button>

                    <Link to="/register">Register</Link>
                </div>

            </form>
        </div>
    )
}

export default Login
