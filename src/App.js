import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Guide from './components/Guide'
import Search from './components/Search'

class BooksApp extends Component {

  render() {
    
    return (
      <div className="app">
       <Routes>
      	  <Route exact path="/" element={<Guide />} />
      	  <Route path="/search" element={<Search />} />
      	</Routes>
      </div>
    )
  }
}

export default BooksApp
