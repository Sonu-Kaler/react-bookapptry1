import React, { useEffect } from "react";
import axios from "axios";

function Sectionone(){
    const [books,setBooks] = React.useState([]);

    const fetchData=async()=>{
        const harryPotter = await axios.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter&limit=3");
        // const sherlockHolmes = await axios.get("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes&limit=3");
        console.log(harryPotter.data.items);
        setBooks(harryPotter.data.items);
        // setBooks(harryPotter.data.items.concat(sherlockHolmes.data.items));
    };

    useEffect(()=>{
        fetchData();
    },[]);

    return(
        <div className="section1">
            <h2>Top Rated Books</h2>
            <ul className="boxContainer">
                {books.map((book, index)=>(
                    <li key={index} className="box grid-item">
                        <a href="#" className="book">
                            <div>
                            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
                            </div>
                            <div>
                            <span className="author">{book.volumeInfo.title}</span>
                            <p className="desc">{book.volumeInfo.description}</p>
                            </div>
                        </a>
                    </li>
                    ))}
                    </ul>
        </div>
    );
}

export default Sectionone;