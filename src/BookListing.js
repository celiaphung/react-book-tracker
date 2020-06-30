import PropTypes from "prop-types";
import React from 'react'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'

class BookListing extends React.Component {
    render() {
        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>My Reads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            <Shelf
                                books={this.props.currentlyReading}
                                title="Currently Reading"
                                onUpdateBook={this.props.onUpdateBook}
                            />
                            <Shelf
                                books={this.props.wantToRead}
                                title="Want to Read"
                                onUpdateBook={this.props.onUpdateBook}
                            />
                            <Shelf
                                books={this.props.read}
                                title="Read"
                                onUpdateBook={this.props.onUpdateBook}
                            />
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}

BookListing.propTypes = {
    currentlyReading: PropTypes.array,
    onUpdateBook: PropTypes.func,
    read: PropTypes.array,
    wantToRead: PropTypes.array
}

export default BookListing;