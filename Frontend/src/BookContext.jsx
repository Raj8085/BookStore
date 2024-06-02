// // BookContext.jsx
// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// export const BookContext = createContext();

// export const BookProvider = ({ children }) => {
//     const [book, setBook] = useState([]);

//     useEffect(() => {
//         const getBook = async () => {
//             try {
//                 const res = await axios.get("http://localhost:4001/book");
//                 console.log(res.data, "backend");
//                 setBook(res.data);
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         getBook();
//     }, []);

//     return (
//         <BookContext.Provider value={book}>
//             {children}
//         </BookContext.Provider>
//     );
// };
