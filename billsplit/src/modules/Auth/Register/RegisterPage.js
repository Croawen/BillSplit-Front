import React from 'react';
import { connect } from 'react-redux';
import history from '../../../redux/history';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

class RegisterPage extends React.PureComponent {
    render() {
        console.log('register');

        return (
            <Container className="App">
            <h2>Register</h2>
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
                    <FormGroup>
                        <Label for="password-repeat">Repeat password</Label>
                        <Input
                            type="password"
                            name="password-repeat"
                            id="password-repeat"
                            placeholder="********"
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <p>Already have an account? <Link to="/">Login</Link></p>
                </Col>
                <Button>Submit</Button>
            </Form>
        </Container>
        )
    }
}


export default connect(
    state => ({
        currentUser: state.currentUser,
    }),
    dispatch => ({
        register: userData => dispatch.currentUser.register(userData),
        redirectToHomePage: () => {
            history.push('/');
        }
    }),
)(RegisterPage);
