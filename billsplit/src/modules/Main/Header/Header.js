import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class Header extends React.Component {
    state = {
        isOpen: false
    }

    componentDidMount() {
        this.toggle = this.toggle.bind(this);
        this.setState({
            isOpen: false
        })
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    async logout() {
        await this.props.logOut();
    }

    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">SUPER POWAŻNA APLIKACJA</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#" onClick={async () => await {}}>Page1</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="#" onClick={async () => await {}}>Page2</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="#" onClick={async () => await {}}>Page3</NavLink>
                        </NavItem>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                User
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink href="#" onClick={async () => { }}>Settings</NavLink>
                                </DropdownItem>

                                <DropdownItem divider />

                                <DropdownItem>
                                    <NavLink href="#" onClick={async () => await this.logout()}>Logout</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

const mapState = (state) => ({
    currentUser: state.currentUser.currentUser,
});

const mapDispatch = dispatch => ({
    logOut: () => dispatch.currentUser.logOut(),
});

export default withRouter(connect(mapState, mapDispatch)(Header));
