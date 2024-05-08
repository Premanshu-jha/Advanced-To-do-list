import BookShow from "./BookShow"

export default function BookList({books,deleteBook,onEdit}){
    const renderedElement = books.map(book=><BookShow key={book.id} book={book} deleteBook={deleteBook} onEdit={onEdit}/>)
    return <div className='book-list'>{renderedElement}</div>
}