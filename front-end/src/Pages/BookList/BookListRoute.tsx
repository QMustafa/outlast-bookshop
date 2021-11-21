import React from "react";
import { Switch } from "react-router-dom";
import { ProjectLayout } from "src/Components/Layout/ProjectLayout";
import { RouteBlock } from "src/Components/RoutBlock";
import { BookList } from "./BookList";

export const BookListRoute = () => {
  return (
    <Switch>
      <RouteBlock path="/books/list" component={BookList} layout={ProjectLayout} />
    </Switch>
  );
};
