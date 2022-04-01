import React from 'react';
import Navigation from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import sampleImage from '../sample-house.jpg';

function Overview() {
  return (
    <>
      <Navigation></Navigation>
      <main>
        <div id="filter" className="container">
          <div className="d-flex px-4 mb-3">
            <div className="dropdown mr-1">
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle"
                id="dropdownMenuOffset"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-offset="10,20"
              >
                Filter
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuOffset"
              >
                <div className="dropdown-item text-success">Job Location</div>
                <div className="dropdown-item text-success">Job Type</div>
              </div>
            </div>
          </div>
        </div>

        <div id="projectCards" className="container d-flex px-3">
          <div className="row justify-content-center">
            <div className="card col-lg-3 col-md-4 col-sm-12 m-2">
              <img src={sampleImage} className="card-img-top" alt="..." />
              <div className="card-body d-flex row justify-content-between">
                <h5 className="card-title">The Johnson's</h5>
                <p>Status</p>
                <a
                  href="https://maps.google.com/?q=6522%20S%20Big%20Cottonwood%20Canyon%20Rd%20%23200%2C%20Holladay%2C%20UT%2084121"
                  className="card-text"
                >
                  6522 S Big Cottonwood Canyon Rd #200, Holladay, UT 84121
                </a>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
              <h6 className="card-subtitle mb-2">Tasks To-Do</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Bathroom</li>
                <li className="list-group-item">Cabinets</li>
                <li className="list-group-item">Landscaping</li>
              </ul>
              <div className="card-footer text-center">
                <Link to="/projects" className="card-link">
                  See Full Job Description
                </Link>
              </div>
            </div>

            <div className="card col-lg-3 col-md-4 col-sm-12 m-2">
              <img src={sampleImage} className="card-img-top" alt="..." />
              <div className="card-body d-flex row justify-content-between">
                <h5 className="card-title">The Johnson's</h5>
                <p className="text-success text-sm px-1">Completed</p>
                <a
                  href="https://maps.google.com/?q=6522%20S%20Big%20Cottonwood%20Canyon%20Rd%20%23200%2C%20Holladay%2C%20UT%2084121"
                  className="card-text"
                >
                  6522 S Big Cottonwood Canyon Rd #200, Holladay, UT 84121
                </a>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
              <h6 className="card-subtitle mb-2">Tasks To-Do</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Bathroom</li>
                <li className="list-group-item">Cabinets</li>
                <li className="list-group-item">Landscaping</li>
              </ul>
              <div className="card-footer text-center">
                <Link to="/projects" className="card-link">
                  See Full Job Description
                </Link>
              </div>
            </div>

            <div className="card col-lg-3 col-md-4 col-sm-12 m-2">
              <img src={sampleImage} className="card-img-top" alt="..." />
              <div className="card-body d-flex row justify-content-between">
                <h5 className="card-title">The Johnson's</h5>
                <p>Status</p>
                <a
                  href="https://maps.google.com/?q=6522%20S%20Big%20Cottonwood%20Canyon%20Rd%20%23200%2C%20Holladay%2C%20UT%2084121"
                  className="card-text"
                >
                  6522 S Big Cottonwood Canyon Rd #200, Holladay, UT 84121
                </a>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
              <h6 className="card-subtitle mb-2">Tasks To-Do</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Bathroom</li>
                <li className="list-group-item">Cabinets</li>
                <li className="list-group-item">Landscaping</li>
              </ul>
              <div className="card-footer text-center">
                <Link to="/projects" className="card-link">
                  See Full Job Description
                </Link>
              </div>
            </div>

            <div className="card col-lg-3 col-md-4 col-sm-12 m-2">
              <img src={sampleImage} className="card-img-top" alt="..." />
              <div className="card-body d-flex row justify-content-between">
                <h5 className="card-title">The Johnson's</h5>
                <p>Status</p>
                <a
                  href="https://maps.google.com/?q=6522%20S%20Big%20Cottonwood%20Canyon%20Rd%20%23200%2C%20Holladay%2C%20UT%2084121"
                  className="card-text"
                >
                  6522 S Big Cottonwood Canyon Rd #200, Holladay, UT 84121
                </a>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
              <h6 className="card-subtitle mb-2">Tasks To-Do</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Bathroom</li>
                <li className="list-group-item">Cabinets</li>
                <li className="list-group-item">Landscaping</li>
              </ul>
              <div className="card-footer text-center">
                <Link to="/projects" className="card-link">
                  See Full Job Description
                </Link>
              </div>
            </div>

            <div className="card col-lg-3 col-md-4 col-sm-12 m-2">
              <img src={sampleImage} className="card-img-top" alt="..." />
              <div className="card-body d-flex row justify-content-between">
                <h5 className="card-title">The Johnson's</h5>
                <p>Status</p>
                <a
                  href="https://maps.google.com/?q=6522%20S%20Big%20Cottonwood%20Canyon%20Rd%20%23200%2C%20Holladay%2C%20UT%2084121"
                  className="card-text"
                >
                  6522 S Big Cottonwood Canyon Rd #200, Holladay, UT 84121
                </a>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
              <h6 className="card-subtitle mb-2">Tasks To-Do</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Bathroom</li>
                <li className="list-group-item">Cabinets</li>
                <li className="list-group-item">Landscaping</li>
              </ul>
              <div className="card-footer text-center">
                <Link to="/projects" className="card-link">
                  See Full Job Description
                </Link>
              </div>
            </div>

            <div className="card col-lg-3 col-md-4 col-sm-12 m-2">
              <img src={sampleImage} className="card-img-top" alt="..." />
              <div className="card-body d-flex row justify-content-between">
                <h5 className="card-title">The Johnson's</h5>
                <p>Status</p>
                <a
                  href="https://maps.google.com/?q=6522%20S%20Big%20Cottonwood%20Canyon%20Rd%20%23200%2C%20Holladay%2C%20UT%2084121"
                  className="card-text"
                >
                  6522 S Big Cottonwood Canyon Rd #200, Holladay, UT 84121
                </a>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
              <h6 className="card-subtitle mb-2">Tasks To-Do</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Bathroom</li>
                <li className="list-group-item">Cabinets</li>
                <li className="list-group-item">Landscaping</li>
              </ul>
              <div className="card-footer text-center">
                <Link to="/projects" className="card-link">
                  See Full Job Description
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Overview;
