import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookShelfChanger extends Component {
    static propTypes = {
        currentValue: PropTypes.string.isRequired,
        onUpdateBookShelf: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.props.currentValue} onChange={e => this.props.onUpdateBookShelf(e.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div> 
        )
    }
}

export default BookShelfChanger;