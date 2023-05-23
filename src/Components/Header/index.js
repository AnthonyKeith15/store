import React from 'react';
import HoverButton from '../Utils/HoverButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import './Header.css'

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <HoverButton variant="outlined">Our Store</HoverButton>
          </li>
          <li>
            <HoverButton variant="outlined">
              <ShoppingCartOutlinedIcon />
            </HoverButton>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
