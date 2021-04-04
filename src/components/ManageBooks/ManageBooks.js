import { Button } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import AdminNav from '../Admin/AdminNav';
import './ManageBook.css'

const ManageBooks = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('https://blooming-chamber-00044.herokuapp.com/getBooks')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    const deleteHandler = (event, id) => {
        fetch('https://blooming-chamber-00044.herokuapp.com/deleteBook/' + id, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    console.log(event.target.parentNode.parentNode.parentNode)
                    event.target.parentNode.parentNode.parentNode.style.display = 'none'
                }
            })
    }
    return (
        <div>
            <AdminNav></AdminNav>
            <div className="book-list">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Book Name</th>
                            <th scope="col">Author Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {books.map(book =>
                        <tbody>
                            <tr>
                                <th scope="row">{book.bookName}</th>
                                <td>{book.authorName}</td>
                                <td>${book.bookPrice}</td>
                                <td><Button onClick={(event) => deleteHandler(event, book._id)} variant="contained" color="secondary">Delete</Button></td>
                            </tr>
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
};

export default ManageBooks;