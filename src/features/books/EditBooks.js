import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from './bookSlice';

const EditBooks = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [id, setId] = useState(location.state.id);
    const [name, setName] = useState(location.state.name);
    const [author, setAuthor] = useState(location.state.author);

    const handleUpdate = e => {
        e.preventDefault();
        const updatedBook = { id, name, author };
        dispatch(updateBook(updatedBook));
        navigate('/view');
    };

    return (
        <div>
            <h2 className='title'>Edit Books</h2>

            <form onSubmit={handleUpdate}>
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
                <button type='submit'>Edit Books</button>
            </form>
        </div>
    );
};

export default EditBooks;