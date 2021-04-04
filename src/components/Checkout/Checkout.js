import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Nav from '../Nav/Nav';
import './Checkout.css'

const Checkout = () => {
    const { bookId } = useParams();
    const [book, setBook] = useState({})
    useEffect(() => {
        fetch(`https://blooming-chamber-00044.herokuapp.com/checkout/${bookId}`)
            .then(res => res.json())
            .then(data => setBook(data))

    }, [bookId])
    return (
        <div>
            <Nav></Nav>
            <div className="checkout-section">
                <br></br>
                <h1>Checkout</h1>
                <br></br>
                <div className="checkout-list">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Serial</th>
                                <th scope="col">Title</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>{book.bookName}</td>
                                <td>1</td>
                                <td>${book.bookPrice}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>Total</td>
                                <td></td>
                                <td>${book.bookPrice}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td> <Button variant="contained" color="primary">
                                    Checkout
                                </Button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Checkout;