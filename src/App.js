import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'

import Search from './components/Search'
import MyShelves from './components/MyShelves'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    //showSearchPage: true
  }

  render() {
    return (
      <div className="app">        
        <Route path="/busca" component={Search}/>      
        <Route exact path="/" component={MyShelves} />
      </div>
    )
  }
}

export default BooksApp
