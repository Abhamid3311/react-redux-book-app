import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../App.css'
import { addBook } from './bookSlice';

const AddBooks = () => {
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const numberOfBooks = useSelector((state) => state.bookReducer.books.length);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddForm = e => {
        e.preventDefault();

        const newBook = {
            id: numberOfBooks + 1,
            name, author
        };
        dispatch(addBook(newBook));
        navigate('/view');

    }
    return (
        <div >
            <h2 className='title'>Add Books</h2>
            <form onSubmit={handleAddForm}>
                <div className='form-field'>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id='name'
                        placeholder='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div className='form-field'>
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        id='author'
                        placeholder='author'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <button type='submit'>Add Books</button>
            </form>
        </div>
    );
};

export default AddBooks;