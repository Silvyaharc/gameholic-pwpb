import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = (props) => {
  return (
    <Navbar className="navbar" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <h1>GameHolic</h1>
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#trending">
            <h4>TRENDING GAME</h4>
          </Nav.Link>
          <Nav.Link href="#best">
            <h4>BEST GAME</h4>
          </Nav.Link>
          <Nav.Link href="#contact">
            <h4>CONTACT</h4>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavigationBar;
