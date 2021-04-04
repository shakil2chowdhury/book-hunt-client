import React, { useContext } from 'react';
import logo from '../../assets/logo.png'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Nav.css'
import { UserContext } from '../../App';

const Nav = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="nav-bar">
            <div className="nav-logo"><img src={logo}></img></div>
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/orders">Orders</a>
                <a href="/admin">Admin</a>
                <a href="/deals">Deals</a>
                
                {loggedInUser.email !== undefined ? <a href="/admin">{loggedInUser.name}</a>: <Link to="/login"><Button variant="contained" color="primary">Login</Button></Link>}
            </div>
        </div>
    );
};

export default Nav;