import React, { Fragment } from "react";
import Header from "../components/Header";
import classes from "../../styles/PageLayout.module.css";

const PageLayout = (props) => {
  return (
    <div className={classes.center}>
      <Header />
      {props.children}
    </div>
  );
};
export { PageLayout };
