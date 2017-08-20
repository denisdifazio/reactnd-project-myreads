import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class BooksList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateBookShelf: PropTypes.func.isRequired
    }

    render() {
        const books = this.props.books;
        return (      
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf name='Currently Reading' books={books.filter((book) => (book.shelf === 'currentlyReading'))} onUpdateBookShelf={this.props.onUpdateBookShelf}/>
                        <Bookshelf name='Want to Read' books={books.filter((book) => (book.shelf === 'wantToRead'))} onUpdateBookShelf={this.props.onUpdateBookShelf}/>
                        <Bookshelf name='Read' books={books.filter((book) => (book.shelf === 'read'))} onUpdateBookShelf={this.props.onUpdateBookShelf}/>   
                    </div>                                                          
                    <div className="open-search">
                        <Link to="/search">Add a book</Link>
                    </div>
                </div>
            </div>
        )}
};

export default BooksList;