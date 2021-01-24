import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {GlobalState} from '../../GlobalState';
import axios from 'axios';
import './header.css'

function Header() {

    const state = useContext(GlobalState)

    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin

    const logoutUser = async () => {
        try {
            
            await axios.get('/user/logout')

            localStorage.removeItem('firstLogin')

            window.location.href = '/'

        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    const adminRouter = () => {
        return (
            <>
                <li><Link to="/create_product" className="nav-link"><i className="fas fa-plus-circle"></i>&nbsp;Create Product</Link></li>
            </>
        )
    }

    const loggedRouter = () => {
        return (
            <>
                <li><Link to="/" className="nav-link" onClick={logoutUser}><i className="fas fa-sign-out-alt"></i>&nbsp;Logout</Link></li>
            </>
        )
    }

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className="logo">{ isLogged ? 'Admin' : 'DBZ'}</Link>
                    </li>
                </ul>

                <ul>
                    <li><Link to="/" className="nav-link"><i className="fas fa-boxes"></i>&nbsp;{ isLogged ? 'Shop' : 'Products'}</Link></li>
                    <li><Link to="/about" className="nav-link"><i className="fas fa-book-reader"></i>&nbsp;About Us</Link></li>

                    {isAdmin && adminRouter()}

                    {
                        isLogged ? loggedRouter() : <li><Link to="/login" className="nav-link"><i className="fas fa-sign-in-alt"></i>&nbsp;Sign In</Link></li>
                    }

                </ul>
            </nav>  
        </>
    )
}

export default Header
