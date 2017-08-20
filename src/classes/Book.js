import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';
import PropTypes from 'prop-types';

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onUpdateBookShelf: PropTypes.func.isRequired
    }

    onUpdateBookShelf = (shelf) => {
        this.props.onUpdateBookShelf(this.props.book, shelf);
    }

    render() {
        const book = this.props.book;
        
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.smallThumbnail : ''})` }}></div>
                    <BookShelfChanger currentValue={book.shelf ? book.shelf : 'none'} onUpdateBookShelf={this.onUpdateBookShelf}/>                  
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors ? book.authors.join(", ") : ''}</div>
            </div>
        )
    }
}

export default Book;