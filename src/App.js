import { useState } from 'react';
import searchImages from './api';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';


export default function App(){
    const [books,setBooks] = useState([]);
    

    const deleteBookById = (id)=>{
        setBooks(books.filter(book=>book.id!==id));
    }

    const createBook = (title,imageUrl)=>{
        setBooks([...books,{id:Date.now(),title,image:imageUrl}]);
        
    }

    const updateBook = async (id,title,url)=>{

        const updated = await books.map((book)=>{
            if(book.id===id){
                return {...book,title,image:url}
            }
            return book;
        });
        setBooks(updated);
    }

    const imageSubmit = async (term)=>{
        const result = await searchImages(term);
        createBook(term,result[0].urls.small);

        return result[0].urls.small;

    }


    return (
    <div className='app'>
        <h1>To Do List</h1>
        <BookList books={books} deleteBook={deleteBookById} onEdit={updateBook} imageSubmit={imageSubmit}/>
        <BookCreate imageSubmit={imageSubmit}/>
        </div>
    );
}