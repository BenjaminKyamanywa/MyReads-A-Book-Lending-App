import React from 'react'
import { createRoot } from "react-dom/client";
import App from './App'

/** 
 This course is not designed to teach Test Driven Development. 
 Feel free to use this file to test your application, but it 
 is not required.
**/

it('renders without crashing', () => {
  const div = document.createElement('div')
  createRoot.render(<App />, div)
})


