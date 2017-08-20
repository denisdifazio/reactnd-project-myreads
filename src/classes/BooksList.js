import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class BooksList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateBookShelf: PropTypes.func.isRequired
    };     
   
    render() {
        const books = this.props.books; 
        
        const shelves = [
            {
                id: 'currentlyReading',
                title: 'Currently Reading',
                books: books.filter(book => book.shelf === 'currentlyReading')
            },
            {
                id: 'wantToRead',
                title: 'Want to Read',
                books: books.filter(book => book.shelf === 'wantToRead')
            },
            {
                id: 'read',
                title: 'Read',
                books: books.filter(book => book.shelf === 'read')
            }
        ];

        return (      
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>    
                        {shelves.map(shelf => (
                            <Bookshelf key={shelf.id} name={shelf.title} books={shelf.books} onUpdateBookShelf={this.props.onUpdateBookShelf}/>
                        ))}                   
                    </div>                                                          
                    <div className="open-search">
                        <Link to="/search">Add a book</Link>
                    </div>
                </div>
            </div>
        )}
};

export default BooksList;