import { createSlice } from "@reduxjs/toolkit";



const initialBooks = {
    books: [
        { id: 1, name: "Love Bangladesh", author: "Ab Hamid" },
        { id: 2, name: "Like Pakistan", author: "Ab Khan" },
        { id: 3, name: "Loss Australia", author: "Ab Lan" }
    ],
};

export const bookslice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showbooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        updateBook: (state, action) => {
            const { id, name, author } = action.payload;
            const isBookExist = state.books.filter(book => book.id === id);
            if (isBookExist) {
                isBookExist[0].name = name;
                isBookExist[0].author = author;
            }

        },
        deleteBook: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter(book => book.id !== id)
        },
    },
});

export const { showbooks, addBook, deleteBook, updateBook } = bookslice.actions;
export default bookslice.reducer;