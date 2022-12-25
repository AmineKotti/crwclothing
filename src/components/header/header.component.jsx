import React from 'react';

import './header.styles.scss'
import { Link  } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
          <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
        <div className='option'>
          <Link className='shop' to='/shop'>SHOP</Link>
        </div>
        <div className='option'>
          <Link className='shop' to='/shop'>CONTACT</Link>
        </div>
        </div>
    </div>

)

export default Header;
