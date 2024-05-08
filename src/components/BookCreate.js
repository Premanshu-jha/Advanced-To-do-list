import { useState } from 'react';

export default function BookCreate({imageSubmit}){
     const [title,setTitle] = useState('');
     
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