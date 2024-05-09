import axios from 'axios';
import { createContext, useState } from "react";
import searchImages from '../api';



const BooksContext = createContext();
export function Provider({children}){
    const [books,setBooks] = useState([]);


    const fetchBooks = async ()=>{
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);

    }


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


    return <BooksContext.Provider value={{books,fetchBooks,deleteBookById,createBook,updateBook,imageSubmit}}>
          {children}
          </BooksContext.Provider>

}

export default BooksContext;

