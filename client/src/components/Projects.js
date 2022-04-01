import React, { useState } from 'react';
import Navigation from './Nav';
import Footer from './Footer';
import {
  Button,
  Modal,
  Form,
  Container,
  Row,
  Col,
  Dropdown,
  Card,
  ListGroup,
} from 'react-bootstrap';
import sampleImage from '../sample-house.jpg';

function Projects() {
  const project = {};
  const [show, setShow] = useState(false);
  const [image, setImage] = React.useState('');
  const [name, setFacility] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [address2, setAddress2] = React.useState('');
  const [city, setCity] = React.useState('');
  const [state, setState] = React.useState('');
  const [zip, setZip] = React.useState('');
  const [todo, setToDo] = React.useState('');

  const handleClose = () => {
    setShow(false);
    project.facilityImage = image;
    project.FacilityName = name;
    project.FacilityAddress = address;
    project.FacilityAddress2 = address2;
    project.FacilityCity = city;
    project.FacilityState = state;
    project.FacilityZip = zip;
    project.FacilityToDo = todo;
    console.log(project);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Navigation></Navigation>
      <Container className="my-3">
        <Button className="btn-danger btn-lg" onClick={handleShow}>
          Add A Project
        </Button>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="file">
              <Form.Label>Select a File</Form.Label>
              <Form.Control
                type="file"
                name="file"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputFacility">
              <Form.Label>Facility Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setFacility(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="inputAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="1234 Main St"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="inputAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="Apartment, studio, or floor"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
              />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="inputCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group className="mb-3" controlId="inputState">
                  <Form.Label>State</Form.Label>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      State
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Utah</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="inputCity">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control
                    type="text"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="facilityName">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={5} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Container>
        <Row>
          <Card className="mb-3">
            <Row className="no-gutters">
              <Col md={4}>
                <Card.Img src={sampleImage} alt="facility"></Card.Img>
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>Spanish Fork Park</Card.Title>
                  <Card.Text>
                    6522 S Big Cottonwood Canyon Rd #200, Holladay, UT 84121
                  </Card.Text>
                  <Card.Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Esse, eius tempora. Veniam cumque doloribus labore
                    repudiandae rerum earum accusantium nemo reiciendis
                    molestiae, fuga quisquam architecto magni iusto quas
                    sapiente officiis minus, eligendi quaerat commodi
                    exercitationem harum nam optio? Asperiores provident
                    temporibus in voluptatum optio similique iste omnis quo
                    laborum doloremque!
                  </Card.Text>
                  <Card.Text className="text-muted">
                    Last updated 3 mins ago
                  </Card.Text>
                  <Card.Subtitle className="mb-2">Tasks To-Do</Card.Subtitle>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Bathroom</ListGroup.Item>
                    <ListGroup.Item>Cabinets</ListGroup.Item>
                    <ListGroup.Item>Landscaping</ListGroup.Item>
                  </ListGroup>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Status
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Complete</Dropdown.Item>
                      <Dropdown.Item>In-Progress</Dropdown.Item>
                      <Dropdown.Item>Bidded</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Card.Body>
              </Col>
            </Row>
          </Card>

          <Card className="mb-3">
            <Row className="no-gutters">
              <Col md={4}>
                <Card.Img src={sampleImage} alt="facility"></Card.Img>
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>Spanish Fork Park</Card.Title>
                  <Card.Text>
                    6522 S Big Cottonwood Canyon Rd #200, Holladay, UT 84121
                  </Card.Text>
                  <Card.Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Esse, eius tempora. Veniam cumque doloribus labore
                    repudiandae rerum earum accusantium nemo reiciendis
                    molestiae, fuga quisquam architecto magni iusto quas
                    sapiente officiis minus, eligendi quaerat commodi
                    exercitationem harum nam optio? Asperiores provident
                    temporibus in voluptatum optio similique iste omnis quo
                    laborum doloremque!
                  </Card.Text>
                  <Card.Text className="text-muted">
                    Last updated 3 mins ago
                  </Card.Text>
                  <Card.Subtitle className="mb-2">Tasks To-Do</Card.Subtitle>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Bathroom</ListGroup.Item>
                    <ListGroup.Item>Cabinets</ListGroup.Item>
                    <ListGroup.Item>Landscaping</ListGroup.Item>
                  </ListGroup>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Status
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Complete</Dropdown.Item>
                      <Dropdown.Item>In-Progress</Dropdown.Item>
                      <Dropdown.Item>Bidded</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Card.Body>
              </Col>
            </Row>
          </Card>

          <Card className="mb-3">
            <Row className="no-gutters">
              <Col md={4}>
                <Card.Img src={sampleImage} alt="facility"></Card.Img>
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>Spanish Fork Park</Card.Title>
                  <Card.Text>
                    6522 S Big Cottonwood Canyon Rd #200, Holladay, UT 84121
                  </Card.Text>
                  <Card.Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Esse, eius tempora. Veniam cumque doloribus labore
                    repudiandae rerum earum accusantium nemo reiciendis
                    molestiae, fuga quisquam architecto magni iusto quas
                    sapiente officiis minus, eligendi quaerat commodi
                    exercitationem harum nam optio? Asperiores provident
                    temporibus in voluptatum optio similique iste omnis quo
                    laborum doloremque!
                  </Card.Text>
                  <Card.Text className="text-muted">
                    Last updated 3 mins ago
                  </Card.Text>
                  <Card.Subtitle className="mb-2">Tasks To-Do</Card.Subtitle>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Bathroom</ListGroup.Item>
                    <ListGroup.Item>Cabinets</ListGroup.Item>
                    <ListGroup.Item>Landscaping</ListGroup.Item>
                  </ListGroup>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Status
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Complete</Dropdown.Item>
                      <Dropdown.Item>In-Progress</Dropdown.Item>
                      <Dropdown.Item>Bidded</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Card.Body>
              </Col>
            </Row>
          </Card>

          <Card className="mb-3">
            <Row className="no-gutters">
              <Col md={4}>
                <Card.Img src={sampleImage} alt="facility"></Card.Img>
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>Spanish Fork Park</Card.Title>
                  <Card.Text>
                    6522 S Big Cottonwood Canyon Rd #200, Holladay, UT 84121
                  </Card.Text>
                  <Card.Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Esse, eius tempora. Veniam cumque doloribus labore
                    repudiandae rerum earum accusantium nemo reiciendis
                    molestiae, fuga quisquam architecto magni iusto quas
                    sapiente officiis minus, eligendi quaerat commodi
                    exercitationem harum nam optio? Asperiores provident
                    temporibus in voluptatum optio similique iste omnis quo
                    laborum doloremque!
                  </Card.Text>
                  <Card.Text className="text-muted">
                    Last updated 3 mins ago
                  </Card.Text>
                  <Card.Subtitle className="mb-2">Tasks To-Do</Card.Subtitle>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Bathroom</ListGroup.Item>
                    <ListGroup.Item>Cabinets</ListGroup.Item>
                    <ListGroup.Item>Landscaping</ListGroup.Item>
                  </ListGroup>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Status
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Complete</Dropdown.Item>
                      <Dropdown.Item>In-Progress</Dropdown.Item>
                      <Dropdown.Item>Bidded</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Card.Body>
              </Col>
            </Row>
          </Card>

          <Card className="mb-3">
            <Row className="no-gutters">
              <Col md={4}>
                <Card.Img src={sampleImage} alt="facility"></Card.Img>
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>Spanish Fork Park</Card.Title>
                  <Card.Text>
                    6522 S Big Cottonwood Canyon Rd #200, Holladay, UT 84121
                  </Card.Text>
                  <Card.Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Esse, eius tempora. Veniam cumque doloribus labore
                    repudiandae rerum earum accusantium nemo reiciendis
                    molestiae, fuga quisquam architecto magni iusto quas
                    sapiente officiis minus, eligendi quaerat commodi
                    exercitationem harum nam optio? Asperiores provident
                    temporibus in voluptatum optio similique iste omnis quo
                    laborum doloremque!
                  </Card.Text>
                  <Card.Text className="text-muted">
                    Last updated 3 mins ago
                  </Card.Text>
                  <Card.Subtitle className="mb-2">Tasks To-Do</Card.Subtitle>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Bathroom</ListGroup.Item>
                    <ListGroup.Item>Cabinets</ListGroup.Item>
                    <ListGroup.Item>Landscaping</ListGroup.Item>
                  </ListGroup>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Status
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Complete</Dropdown.Item>
                      <Dropdown.Item>In-Progress</Dropdown.Item>
                      <Dropdown.Item>Bidded</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Card.Body>
              </Col>
            </Row>
          </Card>

          <Card className="mb-3">
            <Row className="no-gutters">
              <Col md={4}>
                <Card.Img src={sampleImage} alt="facility"></Card.Img>
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>Spanish Fork Park</Card.Title>
                  <Card.Text>
                    6522 S Big Cottonwood Canyon Rd #200, Holladay, UT 84121
                  </Card.Text>
                  <Card.Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Esse, eius tempora. Veniam cumque doloribus labore
                    repudiandae rerum earum accusantium nemo reiciendis
                    molestiae, fuga quisquam architecto magni iusto quas
                    sapiente officiis minus, eligendi quaerat commodi
                    exercitationem harum nam optio? Asperiores provident
                    temporibus in voluptatum optio similique iste omnis quo
                    laborum doloremque!
                  </Card.Text>
                  <Card.Text className="text-muted">
                    Last updated 3 mins ago
                  </Card.Text>
                  <Card.Subtitle className="mb-2">Tasks To-Do</Card.Subtitle>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Bathroom</ListGroup.Item>
                    <ListGroup.Item>Cabinets</ListGroup.Item>
                    <ListGroup.Item>Landscaping</ListGroup.Item>
                  </ListGroup>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Status
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Complete</Dropdown.Item>
                      <Dropdown.Item>In-Progress</Dropdown.Item>
                      <Dropdown.Item>Bidded</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default Projects;
