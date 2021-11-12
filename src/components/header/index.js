import React from "react";
import styled from "./style.module.scss";

export const Header = () => {
  return (
    <div className={styled.header}>
      <h3 className={styled.title}>Welcome to NYC-Live Dashboard</h3>
    </div>
  );
};
