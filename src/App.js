import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';
import BookListing from './BookListing';
import AddBook from './AddBook';
import { BrowserRouter } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
    books: {}
  };

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books: books.reduce((obj, currentBook) => {
          obj[currentBook.id] = currentBook;
          return obj;
        }, {}),
        currentlyReading: books.filter((book) => book.shelf === "currentlyReading").map((book) => book.id),
        wantToRead: books.filter((book) => book.shelf === "wantToRead").map((book) => book.id),
        read: books.filter((book) => book.shelf === "read").map((book) => book.id)
      }));
    });
  };

  getBook = (bookId) => {
    return this.state.books[bookId];
  }

  addBook = (book, shelf) => {
    return BooksAPI.update(book, shelf).then((response) => {
      this.setState((currentState) => {
        const currentBooks = currentState.books;
        currentBooks[book.id] = {
          ...book,
          shelf,
        };
        return {
          ...currentState,
          books: currentBooks,
          currentlyReading: response.currentlyReading,
          wantToRead: response.wantToRead,
          read: response.read
        }
      });
    });
  }

  render() {
    const currentlyReading = this.state.currentlyReading.map((bookId) => this.getBook(bookId));
    const wantToRead = this.state.wantToRead.map((bookId) => this.getBook(bookId));
    const read = this.state.read.map((bookId) => this.getBook(bookId));
    return (
      <div className="app">
        <BrowserRouter>
          <Route
            exact
            path='/'
            render={() => (
              <BookListing
                currentlyReading={currentlyReading}
                wantToRead={wantToRead}
                read={read}
                onUpdateBook={this.addBook} />
            )} />
          <Route
            path='/search'
            render={() => (
              <AddBook onUpdateBook={this.addBook} currentBooks={this.state.books}
              />
            )}
          />
        </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp;
