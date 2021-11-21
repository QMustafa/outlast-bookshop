import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { BookDetailsRoute } from './Pages/BookDetails/BookDetailsRoute';
import { BookListRoute } from './Pages/BookList/BookListRoute';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <BookListRoute />
      <BookDetailsRoute />
    </BrowserRouter>
  );
};
