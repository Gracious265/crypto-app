import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <div>
      
            <h1>CryptoBase</h1>
        
        <div>
            <ThemeToggle/>
        </div>
    </div>
  )
}

export default Navbar