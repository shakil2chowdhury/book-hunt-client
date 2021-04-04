import React from 'react';
import logo from '../../assets/logo.png'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import './Admin.css'

const AdminNav = () => {
    return (
        <div className="nav-bar">
            <div className="nav-logo"><img src={logo}></img></div>
            <div className="nav-links">
                <Link to="/manageBooks">Manage Books</Link>
                <Link to="/addBooks">Add Books</Link>
                <Link to="/editBooks">Edit Books</Link>
            </div>
        </div>
    );
};

export default AdminNav;