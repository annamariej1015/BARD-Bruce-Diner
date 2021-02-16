import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, Jumbotron, NavLink } from 'reactstrap';


class Header extends Component {
    render() {
        return(
            <React.Fragment>
                <Jumbotron fluid className="bg-warning">
                    <div className="container bg-warning text-dark">
                        <div className="row">
                            <div className="col text-left">
                                Bruce's Diner
                            </div>

                            <Navbar dark sticky="top" expand="md">
                                <div className="container bg-warning">
                                    <Nav navbar>
                                        <NavItem>
                                            <NavLink className="nav-link text-dark" to="src/components/MainComponent.js">
                                                Home
                                            </NavLink>
                                        </NavItem>

                                        <NavItem>
                                            <NavLink className="nav-link text-dark" to="src/components/AboutComponent.js">
                                                About
                                            </NavLink>
                                        </NavItem>

                                        <NavItem>
                                            <NavLink className="nav-link text-dark" to="src/components/FormComponent.js">
                                                VIP List
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </div>
                            </Navbar>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;