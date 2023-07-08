import "../styles/components/header.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo.svg";

function Header() {
  return (
    <>
      <div className="header-bg">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0 nav-links"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/krypto">Financial Knowledge</Nav.Link>
                <Nav.Link href="/blog">Blog & News</Nav.Link>
                <Nav.Link href="/quickview">Analysis</Nav.Link>
                <span className="toggle">
                  <label class="switch nav-link">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </span>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
