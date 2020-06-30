import PropTypes from "prop-types";
import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class AddBook extends React.Component {
    state = {
        books: [],
    };

    searchBook = (query) => {
        if (!query) {
            this.setState({
                books: []
            });
        } else {
            BooksAPI.search(query).then((response) => {
                if (response.error) {
                    this.setState({
                        books: [],
                    });
                } else {
                    this.setState({
                        books: response
                    });
                }
            }).catch(() => {
                this.setState({
                    books: [],
                });
            });
        }
    }

    render() {
        const { currentBooks } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">
                        Close
                 </Link>
                    <div className="search-books-input-wrapper">
                        <input onChange={(event) => {
                            this.searchBook(event.target.value);
                        }}
                            type="text" placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.map((book) => (
                            <Book
                                key={book.id}
                                book={book}
                                onUpdateBook={this.props.onUpdateBook}
                                shelf={(currentBooks[book.id] || {}).shelf}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

AddBook.propTypes = {
    currentBooks: PropTypes.array,
    onUpdateBook: PropTypes.func,
}

export default AddBook;