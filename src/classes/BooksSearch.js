import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import PropTypes from 'prop-types';
import * as BooksAPI from '../BooksAPI';


class BooksSearch extends Component {
    typingTimer;

    static propTypes = {
        booksOnShelves:  PropTypes.array.isRequired,
        onUpdateBookShelf: PropTypes.func.isRequired
    }

    state = {
        showingBooks: [],
        query: ''
    }

    handleUpdateQuery = (query) => {       
        if (query) {                       
            BooksAPI.search(query, 20).then( results => Array.isArray(results) ? 
                                                (this.state.query && this.setState( { showingBooks: results } )) : this.setState( { showingBooks: [] }));     
        } else {
            this.setState( { showingBooks: [] });
        }
    }

    getBookShelf = (book) => {
        let auxBook = this.props.booksOnShelves.find( bookShelf => bookShelf.id === book.id);
        if (auxBook) {
            return auxBook; 
        }
        return book;
    }

    onUpdateQuery = (query) => {
        this.setState({ query });
        clearTimeout(this.typingTimer);
        this.typingTimer = setTimeout(() => { this.handleUpdateQuery(query) }, 300);      
    }
    render() {               
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                <div className="search-books-input-wrapper">                    
                    <input
                        autoFocus
                        type="text"
                        placeholder="Search by title or author"
                        value={this.state.query}
                        onChange={event => this.onUpdateQuery(event.target.value)}/>                    
                </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.showingBooks.map(book => {
                            book = this.getBookShelf(book);
                            
                            return (<li key={book.id}>  
                                <Book book={book} onUpdateBookShelf={this.props.onUpdateBookShelf}/>                              
                            </li>)
                        })} 
                    </ol>
                </div>
            </div> 
    )}
}

export default BooksSearch;