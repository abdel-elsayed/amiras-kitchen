import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.css";
import { LinkContainer } from "react-router-bootstrap";

export default class NavBar extends Component {
  state = {
    auth: false,
    slide: 0, // How much should the Navbar slide up or down
    lastScrollY: 0, // Keep track of current position in state
  };

  componentWillMount() {
    // When this component mounts, begin listening for scroll changes
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    // If this component is unmounted, stop listening
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { lastScrollY } = this.state;
    const currentScrollY = window.scrollY;

    // let scrollToTop = window.scrollTop;
    if (currentScrollY <= 0) {
      this.setState({ slide: "0px" });
    } else if (currentScrollY > lastScrollY) {
      this.setState({ slide: "-250px" });
    } else {
      this.setState({ slide: "0px" });
    }
    this.setState({ lastScrollY: currentScrollY });
  };

  render() {
    return (
      <div>
        <Navbar
          onTouchMove={this._onTouchMove}
          style={{
            transform: `translate(0, ${this.state.slide})`,
            transition: "transform 0.5s ease-in-out",
            background: "rgb(255,255,255, 0.85)",
          }}
          fixed="top"
          variant="light"
          className="animate-navbar nav-theme smart-scroll justify-content-center"
        >
          <div>
            <Navbar.Brand>
              <LinkContainer to="/Home">
                <Nav.Link>
                  <img
                    className="logo m-auto"
                    src="https://res.cloudinary.com/dnkxmjpxy/image/upload/v1614113854/Amira_s_Kitchen_xsaykj.gif"
                    alt="logo"
                  />
                </Nav.Link>
              </LinkContainer>
              <Navbar.Toggle
                className="m-auto"
                aria-controls="basic-navbar-nav"
              />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                  <LinkContainer to="/Home">
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/About">
                    <Nav.Link>About me</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/Recipes">
                    <Nav.Link>Recipes</Nav.Link>
                  </LinkContainer>
                  {/* <LinkContainer to='/Explore'>
                            <Nav.Link>Explore</Nav.Link>  
                          </LinkContainer> */}
                </Nav>
              </Navbar.Collapse>
            </Navbar.Brand>
          </div>
          <div></div>
        </Navbar>
      </div>
    );
  }
}
