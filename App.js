import { useContext, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';


export default function App(){

    const {stableFetchBooks} = useContext(BooksContext);
    
    useEffect(()=>{
        stableFetchBooks();
    },[stableFetchBooks]);

  

    return (
        
    <div className='app'>
        <h1>To Do List</h1>
        <BookList/>
        <BookCreate/>
        </div>
    
    );
}