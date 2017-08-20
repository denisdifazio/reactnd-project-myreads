import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class Bookshelf extends Component {  
    static propTypes = {
        name: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        onUpdateBookShelf: PropTypes.func.isRequired
    }

    render() {
        const books = this.props.books;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map(book => (
                            <li key={book.id}>  
                                <Book book={book} onUpdateBookShelf={this.props.onUpdateBookShelf}/>                              
                            </li>
                        ))}                        
                    </ol>
                </div>
            </div>
        )              
    }

}

export default Bookshelf;