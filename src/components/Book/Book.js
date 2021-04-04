import { Button } from '@material-ui/core';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Book.css'

const Book = ({ book }) => {
    const history = useHistory()
    const handleBuyNow = (id) => {
        history.push(`/checkout/${id}`);
    }
    return (
        <div className="card card-div">
            <img className="card-img-top card-image" src={book.imageUrl} alt={book.bookName} />
            <div className="card-body">
                <h5 className="card-title">{book.bookName}</h5>
                <p className="card-text"><small className="text-muted">{book.authorName}</small></p>
                <p className="card-text">${book.bookPrice}</p>
                <Button onClick={() => handleBuyNow(book._id)} variant="contained" color="primary">
                    Buy Now
                </Button>
            </div>
        </div>
    );
};

export default Book;