import React from 'react';

function Projects() {
  const [image, setImage] = React.useState('');
  const [name, setBuilding] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [address2, setAddress2] = React.useState('');
  const [city, setCity] = React.useState('');
  const [state, setState] = React.useState('');
  const [zip, setZip] = React.useState('');
  const [todo, setToDo] = React.useState('');
  {
    // const uploadBtn = document.querySelector('#btn_upload');
    // const finishBtn = document.querySelector('#finishBtn');
    // const fileInput = document.querySelector('#file');
    // const buildingInput = document.querySelector('#inputBuilding');
    // const addressInput = document.querySelector('#inputAddress');
    // const addressInput2 = document.querySelector('#inputAddress2');
    // const cityInput = document.querySelector('#inputCity');
    // const stateInput = document.querySelector('#inputState');
    // const zipInput = document.querySelector('#inputZip');
    // const toDoInput = document.querySelector('#inputToDo');
  }

  let project = {};

  const handleSubmit = (e) => {
    e.preventDefault();
    // const selectedFile = fileInput.files[0];

    console.log(image);
    console.log(name);
    console.log(address);
    console.log(address2);
    console.log(city);
    console.log(state);
    console.log(zip);
    console.log(todo);

    project.buildingImage = image;
    project.buildingName = name;
    project.buildingAddress = address;
    project.buildingAddress2 = address2;
    project.buildingCity = city;
    project.buildingState = state;
    project.buildingZip = zip;
    project.buildingToDo = todo;

    console.log(project);

    return (
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={project.buildingImage} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{project.buildingName}</h5>
              <a
                href="https://maps.google.com/?q=6522%20S%20Big%20Cottonwood%20Canyon%20Rd%20%23200%2C%20Holladay%2C%20UT%2084121"
                className="card-text"
              >
                {project.buildingAddress}
              </a>
              <p>{project.buildingDescription}</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
              <h6 className="card-subtitle mb-2">Tasks To-Do</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{todo}</li>
              </ul>
            </div>
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
                  Status
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuOffset"
                >
                  <div className="dropdown-item text-success">Completed</div>
                  <div className="dropdown-item text-info">In Progress</div>
                  <div className="dropdown-item text-warning">Bidded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main>
      {/* Project Modal */}
      <div className="container text-right my-3">
        <section>
          <button
            type="button"
            className="btn btn-danger btn-lg"
            data-toggle="modal"
            data-target="#uploadModal"
          >
            Add A Project
          </button>

          <div
            id="projectModal"
            className="modal fade"
            tabindex="-1"
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h2 className="modal-title">Project Details</h2>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                {/* Modal content */}
                <div className="modal-body">
                  <form
                    method="post"
                    action=""
                    enctype="multipart/form-data"
                    onSubmit={handleSubmit}
                  >
                    <div className="form-row">
                      <div className="form-group">
                        {/* file upload */}
                        Select file :
                        <input
                          type="file"
                          name="file"
                          id="file"
                          className="form-control"
                          value={image}
                          onChange={(e) => setImage(e.target.value)}
                        />
                        <br />
                        <input
                          type="button"
                          className="btn btn-info"
                          value="Upload"
                          id="btn_upload"
                        />
                        {/* Preview */}
                        <div id="preview"></div>
                      </div>
                      <div className="form-group">
                        <label for="inputBuilding">Building Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputBuilding"
                          placeholder="Government Building"
                          value={name}
                          onChange={(e) => setBuilding(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="inputAddress">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="1234 Main St"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label for="inputAddress2">Address 2</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder="Apartment, studio, or floor"
                        value={address2}
                        onChange={(e) => setAddress2(e.target.value)}
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputCity"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select
                          id="inputState"
                          className="form-control"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                        >
                          <option selected>Choose...</option>
                          <option>Alabama</option>
                          <option>Alaska</option>
                          <option>Arizona</option>
                          <option>Arkansas</option>
                          <option>California</option>
                          <option>Colorado</option>
                          <option>Connecticut</option>
                          <option>Delaware</option>
                          <option>Florida</option>
                          <option>Georgia</option>
                          <option>Hawaii</option>
                          <option>Idaho</option>
                          <option>Illinois</option>
                          <option>Indiana</option>
                          <option>Iowa</option>
                          <option>Kansas</option>
                          <option>Kentucky</option>
                          <option>Louisiana</option>
                          <option>Maine</option>
                          <option>Maryland</option>
                          <option>Massachusetts</option>
                          <option>Michigan</option>
                          <option>Minnesota</option>
                          <option>Mississippi</option>
                          <option>Missouri</option>
                          <option>Montana</option>
                          <option>Nebraska</option>
                          <option>Nevada</option>
                          <option>New Hampshire</option>
                          <option>New Jersey</option>
                          <option>New Mexico</option>
                          <option>New York</option>
                          <option>North Carolina</option>
                          <option>North Dakota</option>
                          <option>Ohio</option>
                          <option>Oklahoma</option>
                          <option>Oregon</option>
                          <option>Pennsylvania</option>
                          <option>Rhode Island</option>
                          <option>South Carolina</option>
                          <option>South Dakota</option>
                          <option>Tennessee</option>
                          <option>Texas</option>
                          <option>Utah</option>
                          <option>Vermont</option>
                          <option>Virginia</option>
                          <option>Washington</option>
                          <option>West Virginia</option>
                          <option>Wisconsin</option>
                          <option>Wyoming</option>
                        </select>
                      </div>
                      <div className="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputZip"
                          value={zip}
                          onChange={(e) => setZip(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label for="inputToDo">To-Do's</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputToDo"
                          placeholder="List of To-Do's"
                          value={todo}
                          onChange={(e) => setToDo(e.target.value)}
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="submit"
                    id="toDoBtn"
                    className="btn btn-success"
                  >
                    Add To Do
                  </button>
                  <button
                    type="submit"
                    id="finishBtn"
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    Finish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Job Cards */}
      <section className="container">
        <div className="row">
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src="sample-house.jpg" className="card-img" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">The Johnson's</h5>
                  <a
                    href="https://maps.google.com/?q=6522%20S%20Big%20Cottonwood%20Canyon%20Rd%20%23200%2C%20Holladay%2C%20UT%2084121"
                    className="card-text"
                  >
                    6522 S Big Cottonwood Canyon Rd #200, Holladay, UT 84121
                  </a>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Esse, eius tempora. Veniam cumque doloribus labore
                    repudiandae rerum earum accusantium nemo reiciendis
                    molestiae, fuga quisquam architecto magni iusto quas
                    sapiente officiis minus, eligendi quaerat commodi
                    exercitationem harum nam optio? Asperiores provident
                    temporibus in voluptatum optio similique iste omnis quo
                    laborum doloremque!
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                  <h6 className="card-subtitle mb-2">Tasks To-Do</h6>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Bathroom</li>
                    <li className="list-group-item">Cabinets</li>
                    <li className="list-group-item">Landscaping</li>
                  </ul>
                </div>
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
                      Status
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuOffset"
                    >
                      <div className="dropdown-item text-success">
                        Completed
                      </div>
                      <div className="dropdown-item text-info">In Progress</div>
                      <div className="dropdown-item text-warning">Bidded</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src="sample-house.jpg" className="card-img" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">The Johnson's</h5>
                  <a
                    href="https://maps.google.com/?q=6522%20S%20Big%20Cottonwood%20Canyon%20Rd%20%23200%2C%20Holladay%2C%20UT%2084121"
                    className="card-text"
                  >
                    6522 S Big Cottonwood Canyon Rd #200, Holladay, UT 84121
                  </a>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Esse, eius tempora. Veniam cumque doloribus labore
                    repudiandae rerum earum accusantium nemo reiciendis
                    molestiae, fuga quisquam architecto magni iusto quas
                    sapiente officiis minus, eligendi quaerat commodi
                    exercitationem harum nam optio? Asperiores provident
                    temporibus in voluptatum optio similique iste omnis quo
                    laborum doloremque!
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                  <h6 className="card-subtitle mb-2">Tasks To-Do</h6>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Bathroom</li>
                    <li className="list-group-item">Cabinets</li>
                    <li className="list-group-item">Landscaping</li>
                  </ul>
                </div>
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
                      Status
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuOffset"
                    >
                      <div className="dropdown-item text-success">
                        Completed
                      </div>
                      <div className="dropdown-item text-info">In Progress</div>
                      <div className="dropdown-item text-warning">Bidded</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src="sample-house.jpg" className="card-img" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">The Johnson's</h5>
                  <a
                    href="https://maps.google.com/?q=6522%20S%20Big%20Cottonwood%20Canyon%20Rd%20%23200%2C%20Holladay%2C%20UT%2084121"
                    className="card-text"
                  >
                    6522 S Big Cottonwood Canyon Rd #200, Holladay, UT 84121
                  </a>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Esse, eius tempora. Veniam cumque doloribus labore
                    repudiandae rerum earum accusantium nemo reiciendis
                    molestiae, fuga quisquam architecto magni iusto quas
                    sapiente officiis minus, eligendi quaerat commodi
                    exercitationem harum nam optio? Asperiores provident
                    temporibus in voluptatum optio similique iste omnis quo
                    laborum doloremque!
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                  <h6 className="card-subtitle mb-2">Tasks To-Do</h6>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Bathroom</li>
                    <li className="list-group-item">Cabinets</li>
                    <li className="list-group-item">Landscaping</li>
                  </ul>
                </div>
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
                      Status
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuOffset"
                    >
                      <div className="dropdown-item text-success">
                        Completed
                      </div>
                      <div className="dropdown-item text-info">In Progress</div>
                      <div className="dropdown-item text-warning">Bidded</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;
