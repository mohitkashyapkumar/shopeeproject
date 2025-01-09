import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className='justify-between	'>
        <h1 className='  text-xl'>SHOPEE STORE</h1>
        <div className='mr-8 gap-4'>
          
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        
        </div>
      </nav>
    </header>
  );
};

export default Header;