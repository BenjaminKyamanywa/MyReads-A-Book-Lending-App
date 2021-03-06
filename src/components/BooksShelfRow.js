import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BooksShelfRow extends Component {
	render(){
      
      	const {title, books, onShelfUpdate } = this.props
      
    	return(
        	<div className="bookshelf">
                  <h2 className="bookshelf-title">{title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
						{books.length > 0 ? (books.map((book, index) => (
                          <Book
                            key={index}
                            book={book}
                            onShelfUpdate={onShelfUpdate}
                          />
                        )))
                        : (<p>No Books in this shelf</p>)
                        }
                    </ol>
                  </div>
                </div>
        )
    }
}

BooksShelfRow.propTypes = {
	  title: PropTypes.string.isRequired,
  	books: PropTypes.array,
  	onShelfUPdate: PropTypes.func
}

export default BooksShelfRow