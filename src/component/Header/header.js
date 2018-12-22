import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


class Header extends React.Component {
    state = {
        login: false
    }

    async componentWillReceiveProps(nextProps) {
        // alert(nextProps)
        await sessionStorage.getItem("login")
            .then((resp) => JSON.parse(resp))
            .then((data) => {
                // console.log(data)
                try {
                    if (data) {
                        this.setState({ login: true })
                    }
                } catch (e) {
                    console.log("asdasjasdhjk")
                }

            })
    }

    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <NavLink to="/" >Home</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/shop">
                            <NavItem eventKey={1}>Shop</NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        {this.state.login ?
                            <LinkContainer to="/addtocart">
                                <NavItem eventKey={1}>Add To cart</NavItem>
                            </LinkContainer>
                            :
                            <LinkContainer to="/login">
                                <NavItem eventKey={1}>Login</NavItem>
                            </LinkContainer>
                        }

                        <LinkContainer to="/signip">
                            <NavItem eventKey={1}>Sigup</NavItem>
                        </LinkContainer>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}



export default Header;

// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1