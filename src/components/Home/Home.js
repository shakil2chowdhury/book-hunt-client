import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Nav from '../Nav/Nav';
import Search from '../Search/Search';
import './Home.css'

const Home = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('https://blooming-chamber-00044.herokuapp.com/getBooks')
            .then(res => res.json())
            .then(data => setBooks(data))

    }, [])
    return (
        <>
            <Nav></Nav>
            <Search></Search>
            <div className="cards-container">
                {
                    books.map(book => <Book book={book}></Book>)
                }
            </div>
        </>

    );
};

export default Home;