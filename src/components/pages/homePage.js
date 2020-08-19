import React from 'react';

import BookList from '../bookList';
import ShoppingCardTable from '../shoppingCartTable';

const HomePage = () => {
  return (
    <div>
      <BookList />
      <ShoppingCardTable />
    </div>
  );
};

export default HomePage;