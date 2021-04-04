import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Admin.css'
import { useForm } from "react-hook-form";
import AdminNav from './AdminNav';
import axios from 'axios';


const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [added, setAdded] = useState(false)
    const [imageUrl, setImageUrl] = useState(null)
    const onSubmit = data => {
        const bookData = {
            bookName: data.bookName,
            authorName: data.authorName,
            bookPrice: data.bookPrice,
            imageUrl: imageUrl
        }
        fetch('https://blooming-chamber-00044.herokuapp.com/addBook', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(bookData)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                setAdded(true);
            };
        })
    };


    const handleImageUpload = (e) => {
        console.log(e.target.files[0])
        const imageData = new FormData()
        imageData.set('key', 'a59c77f7cce19a6af12a528420d40cb6')
        imageData.append('image', e.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(res => setImageUrl(res.data.data.display_url))
        .catch(error => console.log(error))
    }
    return (
        <>
        <AdminNav></AdminNav>
        <div className="add-book">
            <form onSubmit={handleSubmit(onSubmit)}>
            <p>Add Book Name: </p><input name="bookName" defaultValue="Book Title" ref={register} />
            <p>Add Author Name: </p><input name="authorName" defaultValue="Author Name" ref={register({ required: true })} />
            <p>Add Book Cover Photo: </p><input name="bookCover" type="file" onChange={handleImageUpload} />
            <p>Add Price: </p><input name="bookPrice" ref={register({ required: true })} />
            <input type="submit" />
            {added ? <p>Product Added Successfully !</p> : false}
            </form>
        </div>
        
        </>
        
    );
};

export default Admin;