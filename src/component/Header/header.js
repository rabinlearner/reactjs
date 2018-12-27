import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { MyContextConsumer } from '../../context';

class Header extends React.Component {

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
                        <MyContextConsumer>

                            {({ isAuth, logout }) =>
                                isAuth ?
                                    <LinkContainer to="/">
                                        <NavItem eventKey={1} onClick={logout}>logout</NavItem>
                                    </LinkContainer>
                                    :
                                    <LinkContainer to="/login">
                                        <NavItem eventKey={1}>Login</NavItem>
                                    </LinkContainer>

                            }

                        </MyContextConsumer>




                        <LinkContainer to="/signip">
                            <NavItem eventKey={1}>Sigup</NavItem>
                        </LinkContainer>

                    </Nav>
                </Navbar.Collapse >
            </Navbar >
        )
    }
}



export default Header;