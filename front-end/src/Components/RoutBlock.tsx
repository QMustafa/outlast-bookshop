import React from "react";
import { Route } from "react-router-dom";

export const RouteBlock = (props: any) => {
  let Layout = props.layout;
  let rest = props.rest;
  let Component = props.component || "Not Found :(";
  const match = props.computedMatch ? { match: props.computedMatch } : {};
  return (
    <Route
      {...rest}
      render={(props: any) => {
        return (
          <Layout {...props}>
            <Component router={match} {...props} />
          </Layout>
        );
      }}
    />
  );
};
