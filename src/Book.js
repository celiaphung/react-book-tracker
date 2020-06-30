import PropTypes from "prop-types";
import React from 'react'

class Book extends React.Component {

    onSelected = (book, event) => {
        const shelf = event.target.value;
        this.props.onUpdateBook(book, shelf);
    }

    render() {
        const { book } = this.props;
        const { authors = [], title, imageLinks = { thumbnail: '' } } = book;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div
                            className="book-cover"
                            style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url(${imageLinks.thumbnail})`
                            }}
                        />
                        <div className="book-shelf-changer">
                            <select
                                onChange={(event) => {
                                    this.onSelected(book, event);
                                }}
                                value={this.props.shelf || 'none'}
                            >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{authors.join(', ')}</div>
                </div>
            </li>
        )
    }
}

Book.propTypes = {
    book: PropTypes.array,
    onUpdateBook: PropTypes.func,
    shelf: PropTypes.string
}

export default Book;