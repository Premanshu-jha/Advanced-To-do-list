import { useState } from 'react';

export default function BookEdit({book,onSubmit}){
    const [value,setValue] = useState(book.title);

    const handleSubmit = (e)=>{
        e.preventDefault();
        onSubmit(value);
        
    }
    return <div>
        <form onSubmit={handleSubmit} className='book-edit'>
            <label>Title</label>
            <input className='input' value={value} onChange={(e)=>setValue(e.target.value)} />
            <button className='button is-primary'>Save</button>
            
        </form>
    </div>
}