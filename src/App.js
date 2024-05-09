import axios from 'axios';
import { useEffect, useState } from 'react';
import searchImages from './api';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';


export default function App(){
    const [books,setBooks] = useState([]);


    const fetchBooks = async ()=>{
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);

    }

    useEffect(()=>{
        fetchBooks();
    },[]);

    const deleteBookById = async (id)=>{
        await axios.delete(` http://localhost:3001/books/${id}`);

        setBooks(books.filter(book=>book.id!==id));
    }

    const createBook = async (newTitle,imageUrl)=>{
      const response = await axios.post('http://localhost:3001/books',{title:newTitle,image:imageUrl});

        setBooks([...books,response.data]);
        
        
    }

    const updateBook = async (id,title,url)=>{

        const response = await axios.put(` http://localhost:3001/books/${id}`,{title:title,image:url});

        const updated = await books.map((book)=>{
            if(book.id===id){
                return {...book,...response.data}
            }
            return book;
        });
        setBooks(updated);
    }

    const imageSubmit = async (term)=>{
        const result = await searchImages(term);
        createBook(term,result[0].urls.small);

        

    }


    return (
    <div className='app'>
        <h1>To Do List</h1>
        <BookList books={books} deleteBook={deleteBookById} onEdit={updateBook} imageSubmit={imageSubmit}/>
        <BookCreate imageSubmit={imageSubmit}/>
        </div>
    );
}