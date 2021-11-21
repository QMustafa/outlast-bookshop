import React from 'react';
import { Switch } from 'react-router-dom';
import { ProjectLayout } from 'src/Components/Layout/ProjectLayout';
import { RouteBlock } from 'src/Components/RoutBlock';
import { BookDetails } from './BookDetails';

export const BookDetailsRoute = () => {
  return (
    <Switch>
      <RouteBlock
        path='/books/:id/details'
        component={BookDetails}
        layout={ProjectLayout}
      />
    </Switch>
  );
};
