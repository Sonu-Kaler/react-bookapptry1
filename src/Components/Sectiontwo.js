import React, { useEffect } from "react";
import axios from "axios";

function Homepage(){
    const [books,setBooks] = React.useState([]);

    const fetchData=async()=>{
        // const harryPotter = await axios.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter&limit=3");
        const sherlockHolmes = await axios.get("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes&limit=3");
        // console.log(harryPotter.data.items);
        setBooks(sherlockHolmes.data.items);
        // setBooks(harryPotter.data.items.concat(sherlockHolmes.data.items));
    };

    useEffect(()=>{
        fetchData();
    },[]);

    return(
        <div className="section2">
            <h2>More Books</h2>
            <ul className="bookContainer2">
                {books.map((book, index)=>(
                    <li key={index} className="book-box2 grid-item">
                        <a href="#" className="book-2">
                            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
                        </a>
                    </li>
                    ))}
                    </ul>
        </div>
    );
}

export default Homepage;