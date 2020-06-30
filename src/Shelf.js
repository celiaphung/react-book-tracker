import PropTypes from "prop-types";
import React from 'react'
import Book from './Book'

class Shelf extends React.Component {
    render() {
        return (
            <div className="book-shelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => (
                            <Book
                                key={book.id}
                                book={book}
                                onUpdateBook={this.props.onUpdateBook}
                                shelf={book.shelf}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

Shelf.propTypes = {
    books: PropTypes.array,
    onUpdateBook: PropTypes.func,
    title: PropTypes.string
}

export default Shelf;