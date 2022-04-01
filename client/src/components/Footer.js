import React from 'react';

function Footer() {
  return (
    <footer className="text-center d-flex justify-content-center mt-auto">
      <section className="container row mt-3">
        <div className="container text-center col mx-2">
          <h3>Company Name</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            laboriosam ad, est provident vitae explicabo.
          </p>
        </div>
        <div className="container text-center col mx-2">
          <h3>Group Members</h3>
          <ul>
            <li>Jessica Groves</li>
            <li>Kayce Heap</li>
            <li>Bryce Stockman</li>
          </ul>
        </div>
        <div className="container text-center col mx-2">
          <h3>Technologies Used</h3>
          <ul>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Node JS</li>
            <li>Express</li>
            <li>MySql</li>
            <li>Sequelize</li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
