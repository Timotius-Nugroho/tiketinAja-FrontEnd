import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Button, Image } from "react-bootstrap";
import logo from "../../assets/img/logo_1.png";
import { Search } from "react-bootstrap-icons";
import styles from "./NavBar.module.css";

class NavBarX extends Component {
  render() {
    return (
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          sticky="top"
        >
          <Navbar.Brand href="#">
            <Image src={logo} fluid />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-between"
          >
            <Nav>
              <Link className="ml-sm-5" to="/learning/basic-react">
                <Nav.Link href="#Movies">
                  <span className={styles.link}>Movies</span>
                </Nav.Link>
              </Link>
              <Link className="ml-sm-5" to="/learning/basic-home">
                <Nav.Link href="#Cinemas">
                  <span className={styles.link}>Cinemas</span>
                </Nav.Link>
              </Link>
              <Link className="ml-sm-5" to="/learning/basic-movie-detail">
                <Nav.Link href="#Buy Ticket">
                  <span className={styles.link}>Buy Ticket</span>
                </Nav.Link>
              </Link>
            </Nav>
            <Nav>
              <p className="mr-sm-4 mt-3">
                <span className={styles.link}>Location</span>
              </p>
              <div className="mr-sm-4 mt-3">
                <Search />
              </div>
              <div className="mr-sm-4 mt-2">
                <Button className={(styles.link, styles.btNav)}>Sign Up</Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavBarX;
