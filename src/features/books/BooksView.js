import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from './bookSlice';

const BooksView = () => {
    const books = useSelector((state) => state.bookReducer.books);
    const dispatch = useDispatch();

    const handleDelete = id => {
        dispatch(deleteBook(id))
    };

    return (
        <div>
            <h2 className='title'>List Of Books</h2>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books?.map(book => {
                            const { id, name, author } = book;
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{author}</td>
                                    <td>
                                        <Link to={'/edit'} state={{ id, name, author }}>
                                            <button>Edit</button>
                                        </Link>
                                        <button onClick={() => handleDelete(id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </div>
    );
};

export default BooksView;