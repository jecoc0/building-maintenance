import React from 'react';
import Nav from './Nav';

function Header(props) {
  return (
    <header
      id="navigation"
      className="d-flex row justify-content-between sticky-top m-3"
    >
      <h1 className="px-3 m-3">Sample business</h1>
      {props.children}
    </header>

  );
}

export default Header;
