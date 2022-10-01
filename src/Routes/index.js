import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBooks from '../features/books/AddBooks';
import BooksView from '../features/books/BooksView';
import EditBooks from '../features/books/EditBooks';
import About from '../pages/About';
import Home from '../pages/Home';
import Footer from '../pages/SharedPage/Footer';
import Navbar from '../pages/SharedPage/Navbar';
import NotFound from '../pages/SharedPage/NotFound';

const Index = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <main className='main'>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/add' element={<AddBooks></AddBooks>}></Route>
                    <Route path='/view' element={<BooksView></BooksView>}></Route>
                    <Route path='/edit' element={<EditBooks></EditBooks>}></Route>
                    <Route path='/about' element={<About></About>}></Route>
                    <Route path='*' element={<NotFound></NotFound>}></Route>
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
};

export default Index;