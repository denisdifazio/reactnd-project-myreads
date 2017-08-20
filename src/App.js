import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BooksList from './classes/BooksList';
import BooksSearch from './classes/BooksSearch';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  updateBookShelf = (bookUpdated, shelf) => {
    if (this.state.books.includes(bookUpdated)) {
      this.setState( (prevState) => {
        prevState.books.find(book => book.id === bookUpdated.id).shelf = shelf;
        books: prevState.books.filter( (book) => book.shelf !== 'none');
      });     
    } else {
      BooksAPI.get(bookUpdated.id).then(result => {
        console.log(result);
        this.setState(prevState => {
          prevState.books.push(result);
          books: prevState.books;
        })
      })

    }
  }

  onUpdateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    this.updateBookShelf(book, shelf);
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BooksList 
            books={this.state.books} 
            onUpdateBookShelf={this.onUpdateBookShelf}/>               
        )}/>
        <Route path="/search" render={() => (
          <BooksSearch
            booksOnShelves={this.state.books}
            onUpdateBookShelf={this.onUpdateBookShelf}/>
        )} />             
      </div>
    )
  }
}

export default BooksApp;
