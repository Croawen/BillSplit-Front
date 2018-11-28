import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import history from '../../../redux/history';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

class LoginPage extends React.Component {
    render() {
        return (
            <Container className="App">
                <h2>Sign In</h2>
                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="myemail@email.com"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="********"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <p>Don't have an account? <Link to="/register">Register</Link></p> 
                    </Col>
                    <Button onClick={async () => await this.props.logIn({ email: '', password: '' })}>Submit</Button>
                </Form>
            </Container>
        );
    }
}

const mapState = (state) => ({
    currentUser: state.currentUser.currentUser,
});

const mapDispatch = dispatch => ({
    logIn: logInData => dispatch.currentUser.logIn(logInData),
    redirectToHomePage: () => {
        history.push('/');
    },
    redirectToPasswordResetPage: () => {
        history.push('/reset-password');
    },
    clearUser: () => dispatch.clearUser()
});

export default withRouter(connect(mapState, mapDispatch)(LoginPage));