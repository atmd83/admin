import React, {useEffect, useState} from 'react';

import axios from 'axios';
import {useAuth0} from "@auth0/auth0-react";


export default ({user}: any) => {
    const [show, setShow] = useState(false);
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [price, setPrice] = useState('');
    const [reg, setReg] = useState('');
    const [VIN, setVIN] = useState('');
    const [millage, setMillage] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [postcode, setPostcode] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [config, setConfig] = useState({});

    const { logout } = useAuth0();


    useEffect(() => {
        axios
            .get( process.env.REACT_APP_API_URL + '/config/httttt')
            .then(r => r.data)
            .then((r) => setConfig(r))
    }, Object.keys(config))

    console.log(config)

    if(!config) {
        return (<p>Loading...</p>)
    }

    const register = async () => {
        const data = {
            make,
            model,
            price,
            reg,
            VIN,
            millage,
            firstName,
            lastName,
            address1,
            address2,
            city,
            postcode,
            email,
            phone
        };

        await axios.post(`/register`, data);

        setMake('');
        setModel('');
        setPrice('');
        setReg('');
        setVIN('');
        setMillage('');
        setFirstName('');
        setLastName('');
        setAddress1('');
        setAddress2('');
        setCity('');
        setPostcode('');
        setEmail('');
        setPhone('');

        setShow(true)

        // @ts-ignore
        document.getElementById('f1').value = '';
        // @ts-ignore
        document.getElementById('f2').value = '';
        // @ts-ignore
        document.getElementById('f3').value = '';
        // @ts-ignore
        document.getElementById('f4').value = '';
        // @ts-ignore
        document.getElementById('f5').value = '';
        // @ts-ignore
        document.getElementById('f6').value = '';
        // @ts-ignore
        document.getElementById('f7').value = '';
        // @ts-ignore
        document.getElementById('f8').value = '';
        // @ts-ignore
        document.getElementById('f9').value = '';
        // @ts-ignore
        document.getElementById('f10').value = '';
        // @ts-ignore
        document.getElementById('f11').value = '';
        // @ts-ignore
        document.getElementById('f12').value = '';
        // @ts-ignore
        document.getElementById('f13').value = '';
        // @ts-ignore
        document.getElementById('f14').value = '';
    }

// @ts-ignore
    // @ts-ignore
    return (

        <>
      {/*      */}
      {/*      <Navbar style={{background: (config as any).brandColour}} expand={false}>*/}
      {/*          <Container fluid>*/}
      {/*              <Navbar.Brand  href="#">{(config as any).brand}</Navbar.Brand>*/}
      {/*              <Navbar.Brand className={'ms-auto me-auto'} href="#home">*/}
      {/*                  <img*/}
      {/*                      src={(config as any).logo}*/}
      {/*                      height="40"*/}
      {/*                      className="d-inline-block align-top"*/}
      {/*                      alt="React Bootstrap logo"*/}
      {/*                  />*/}
      {/*              </Navbar.Brand>*/}
      {/*              <Navbar.Toggle aria-controls="offcanvasNavbar" />*/}



      {/*              <Navbar.Offcanvas*/}
      {/*                  id="offcanvasNavbar"*/}
      {/*                  aria-labelledby="offcanvasNavbarLabel"*/}
      {/*                  placement="end"*/}
      {/*              >*/}
      {/*                  <Offcanvas.Header closeButton>*/}
      {/*                      <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>*/}
      {/*                  </Offcanvas.Header>*/}
      {/*                  <Offcanvas.Body>*/}
      {/*                      <Nav className="justify-content-end flex-grow-1 pe-3">*/}
      {/*                          <Button onClick={() => logout()}>Logout</Button>*/}
      {/*                          /!*<Nav.Link href="#action2">Link</Nav.Link>*!/*/}
      {/*                          /!*<NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">*!/*/}
      {/*                          /!*    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>*!/*/}
      {/*                          /!*    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>*!/*/}
      {/*                          /!*    <NavDropdown.Divider />*!/*/}
      {/*                          /!*    <NavDropdown.Item href="#action5">*!/*/}
      {/*                          /!*       Logout*!/*/}
      {/*                          /!*    </NavDropdown.Item>*!/*/}
      {/*                          /!*</NavDropdown>*!/*/}
      {/*                      </Nav>*/}
      {/*                      /!*<Form className="d-flex">*!/*/}
      {/*                      /!*    <FormControl*!/*/}
      {/*                      /!*        type="search"*!/*/}
      {/*                      /!*        placeholder="Search"*!/*/}
      {/*                      /!*        className="me-2"*!/*/}
      {/*                      /!*        aria-label="Search"*!/*/}
      {/*                      /!*    />*!/*/}
      {/*                      /!*    <Button variant="outline-success">Search</Button>*!/*/}
      {/*                      /!*</Form>*!/*/}
      {/*                  </Offcanvas.Body>*/}
      {/*              </Navbar.Offcanvas>*/}



      {/*          </Container>*/}
      {/*      </Navbar>*/}






      {/*<div>*/}

      {/*  <main>*/}
      {/*      <Container>*/}

      {/*          <Row  className={'pt-5'}>*/}

      {/*              <Col>*/}
      {/*                  <h4 className={'pb-5'}>Register new car sale</h4>*/}

      {/*                  <Row>*/}

      {/*                      <Col>*/}
      {/*                          <h5>Car Details</h5>*/}
      {/*                          <Form.Group className="mb-3" controlId="formBasicEmail">*/}
      {/*                              <Form.Label>Reg No:</Form.Label>*/}
      {/*                              <Form.Control id={'f1'} onChange={(evt:any) => setReg(evt.target.value)} type="text" placeholder="Car reg number" />*/}
      {/*                              <br/>*/}
      {/*                              <Form.Label>VIN</Form.Label>*/}
      {/*                              <Form.Control id={'f2'} onChange={(evt:any) => setVIN(evt.target.value)} type="text" placeholder="VIN number" />*/}
      {/*                              <br/>*/}
      {/*                              <Form.Label>Millage</Form.Label>*/}
      {/*                              <Form.Control id={'f3'} onChange={(evt:any) => setMillage(evt.target.value)} type="text" placeholder="Millage" />*/}
      {/*                              <br/>*/}
      {/*                              <Form.Label>Make</Form.Label>*/}
      {/*                              <Form.Control id={'f4'} onChange={(evt:any) => setMake(evt.target.value)} type="text" placeholder="Enter car make" />*/}
      {/*                              <br/>*/}
      {/*                              <Form.Label>Model</Form.Label>*/}
      {/*                              <Form.Control id={'f5'} onChange={(evt:any) => setModel(evt.target.value)} type="text" placeholder="Enter car model" />*/}
      {/*                              <br/>*/}
      {/*                              <Form.Label>Price</Form.Label>*/}
      {/*                              <Form.Control id={'f6'} onChange={(evt:any) => setPrice(evt.target.value)} type="text" placeholder="Sale price" />*/}
      {/*                          </Form.Group>*/}

      {/*                          <Button onClick={register} variant="primary" type="submit">*/}
      {/*                              Register*/}
      {/*                          </Button>*/}

      {/*                      </Col>*/}
      {/*                      <Col>*/}
      {/*                          <h5>Owner Details</h5>*/}
      {/*                          <Form.Group className="mb-3" controlId="formBasicPassword">*/}
      {/*                              <Form.Label>First Name</Form.Label>*/}
      {/*                              <Form.Control id={'f7'} onChange={(evt:any) => setFirstName(evt.target.value)} type="text" placeholder="First Name" />*/}
      {/*                              <br/>*/}
      {/*                              <Form.Label>Last Name</Form.Label>*/}
      {/*                              <Form.Control id={'f8'} onChange={(evt:any) => setLastName(evt.target.value)} type="text" placeholder="Last Name" />*/}
      {/*                              <br/>*/}
      {/*                              <Form.Label>Address Line 1</Form.Label>*/}
      {/*                              <Form.Control id={'f9'} onChange={(evt:any) => setAddress1(evt.target.value)} type="text" placeholder="Address Line 1" />*/}
      {/*                              <br/>*/}
      {/*                              <Form.Label>Address Line 2</Form.Label>*/}
      {/*                              <Form.Control id={'f10'} onChange={(evt:any) => setAddress2(evt.target.value)} type="text" placeholder="Address Line 2" />*/}
      {/*                              <br/>*/}
      {/*                              <Form.Label>City</Form.Label>*/}
      {/*                              <Form.Control id={'f11'} onChange={(evt:any) => setCity(evt.target.value)} type="text" placeholder="City" />*/}
      {/*                              <br/>*/}
      {/*                              <Form.Label>Postcode</Form.Label>*/}
      {/*                              <Form.Control id={'f12'} onChange={(evt:any) => setPostcode(evt.target.value)} type="text" placeholder="Postcode" />*/}
      {/*                              <br/>*/}
      {/*                              <Form.Label>Email address</Form.Label>*/}
      {/*                              <Form.Control id={'f13'} onChange={(evt:any) => setEmail(evt.target.value)} type="text" placeholder="Email address" />*/}
      {/*                              <br/>*/}
      {/*                              <Form.Label>Phone Number</Form.Label>*/}
      {/*                              <Form.Control id={'f14'} onChange={(evt:any) => setPhone(evt.target.value)} type="text" placeholder="Phone Number" />*/}
      {/*                          </Form.Group>*/}
      {/*                      </Col>*/}
      {/*                  </Row>*/}
      {/*              </Col>*/}
      {/*          </Row>*/}
      {/*      </Container>*/}
      {/*  </main>*/}
      {/*</div>*/}



      {/*      <Modal*/}
      {/*          show={show}*/}
      {/*          onHide={() => setShow(false)}*/}
      {/*          size="lg"*/}
      {/*          aria-labelledby="contained-modal-title-vcenter"*/}
      {/*          centered*/}
      {/*      >*/}
      {/*          <Modal.Header closeButton>*/}
      {/*              <Modal.Title id="contained-modal-title-vcenter">*/}
      {/*                  New car registration complete*/}
      {/*              </Modal.Title>*/}
      {/*          </Modal.Header>*/}
      {/*          <Modal.Body>*/}
      {/*              <p>*/}
      {/*                  The new vehicle has been registered with Trust Driver.*/}
      {/*              </p>*/}
      {/*          </Modal.Body>*/}
      {/*          <Modal.Footer>*/}
      {/*              <Button onClick={() => setShow(false)}>Ok</Button>*/}
      {/*          </Modal.Footer>*/}
      {/*      </Modal>*/}
      {/*      */}
      {/*      */}
      </>
    )
}