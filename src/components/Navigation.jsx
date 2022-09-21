import { useState } from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap/'

const Navigation = () => {
  const [ismobil, setIsmobil] = useState(false)

  return (
    <Navbar bg="dark" variant='dark' expand="md" fixed={ ismobil ? "bottom" : ""}>
      <Container>
        <Navbar.Brand href="/">Projectinfo App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
          </Nav>
          <Nav className="ml-auto">
            {/* <Nav.Link href="/">Login</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
