import React, { Component } from "react";
import PropTypes from "prop-types";

class Book extends Component {

  //<select onChange={this.props.onRemove}> 
  
  static propTypes = {
    //bookList: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  };

  render() {  
    return (      
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"            
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                `url(${this.props.image})`                
            }}
          />
          <div className="book-shelf-changer">
            <select 
            name={this.props.id} 
            value={this.props.shelf} 
            onChange={(e) => {              
              const { value, name } = e.target;
              this.props.onChangeShelf(name, value)
            }}> 
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.author}</div>
      </div>
    );
  }
}

export default Book;