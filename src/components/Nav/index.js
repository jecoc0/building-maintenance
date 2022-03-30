import React from 'react';

function Nav(props) {
  const { setCurrentPage } = props;

  return (
    <nav>
      <ul className="nav nav-pills px-3 m-3">
        <li className="nav-item p-2" key="overview">
          <span className="nav-link" onClick={() => setCurrentPage('overview')}>
            Overview
          </span>
        </li>
        <li className="nav-item p-2" key="projects">
          <span
            className="nav-link active"
            onClick={() => setCurrentPage('projects')}
          >
            Projects
          </span>
        </li>
        <li className="nav-item p-2" key="contact">
          <span className="nav-link" onClick={() => setCurrentPage('contact')}>
            Contact
          </span>
        </li>
        <li className="nav-item p-2" key="logout">
          <span className="nav-link" onClick={() => setCurrentPage('logout')}>
            Logout
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
