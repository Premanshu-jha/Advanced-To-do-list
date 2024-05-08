import { useState } from 'react';
import searchImages from '../api';
import BookEdit from './BookEdit';

export default function BookShow({book,deleteBook,onEdit}){
    const [showEdit,setShowEdit] = useState(false);
    const handleDelete = ()=>{
        deleteBook(book.id);
    }

    const handleEdit = ()=>{
        setShowEdit(!showEdit);
        
    }

    const handleSubmit = async (title)=>{
        const url = await searchImages(title);
        setShowEdit(false);
        onEdit(book.id,title,url[0].urls.small);
        
    }

    


    return <div className='book-show'>
        <img alt='randomImage' src={book.image}/>
        {showEdit?<BookEdit book={book} onSubmit={handleSubmit}/>:<h3>{book.title}</h3>}
        <div className='actions'>
         <button className='edit' onClick={handleEdit}></button>   
        <button onClick={handleDelete} className='delete'>X</button>
        </div>
    
    </div>
}