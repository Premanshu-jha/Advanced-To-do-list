import { useContext, useState } from 'react';
import BooksContext from '../context/books';
export default function BookCreate(){
     const [title,setTitle] = useState('');
     const {imageSubmit} = useContext(BooksContext);
     
     const handleSubmit = (e)=>{
        e.preventDefault();
    
        imageSubmit(title);
        setTitle('');
     }

    return <div className='book-create'>
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
        <label>Title</label>    
       <input className='input' value={title} onChange={(e)=>setTitle(e.target.value)} required/>
       <button className='button'>Add!</button>
       </form> 
    </div>
}