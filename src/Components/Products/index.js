import React, { useState } from 'react';
import HoverButton from '../Utils/HoverButton';
import Food from '../Categories/Food';
import Sports from '../Categories/Sports';
import Electronics from '../Categories/Electronics';

import './Products.css';

const componentMap = {
  product1: {
    component: <Food />,
    buttonText: 'Food',
  },
  product2: {
    component: <Sports />,
    buttonText: 'Sports',
  },
  product3: {
    component: <Electronics />,
    buttonText: 'Electronics',
  },
};

function ProductsPage() {
  const [activePage, setActivePage] = useState('product1');

  const handleItemClick = (pageName) => {
    setActivePage(pageName);
  };

  const renderPageContent = () => {
    const componentToRender = componentMap[activePage]?.component;
    return componentToRender;
  };

  return (
    <div className='products-container'>
      <h2>Please browse our products</h2>
        <ul className="products-list">
          {Object.entries(componentMap).map(([pageName, { buttonText }]) => (
            <li key={pageName} className="product-item">
              <HoverButton
                variant="outlined"
                onClick={() => handleItemClick(pageName)}
              >
                {buttonText}
              </HoverButton>
            </li>
          ))}
        </ul>
      {renderPageContent()}
    </div>
  );
}

export default ProductsPage;
