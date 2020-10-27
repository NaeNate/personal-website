import React from 'react'
import { NavLink } from "react-router-dom";

const NavigationBar = () => (
  <header>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Home
    </NavLink>
    <NavLink to="/about" activeClassName="is-active">
      About
    </NavLink>
  </header>
);

export default NavigationBar