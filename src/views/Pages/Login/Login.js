import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Card,
    CardBody,
    CardGroup,
    Col,
    Container,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row
} from "reactstrap";
import { login , register } from "../../../utils/Api.js";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    async login(data) {
        await login(data);
    }

    async register() {
        let info = {
            first_name: "kaima",
            last_name: "Abbes",
            email: "kaima.abbes@email.com",
            password: "123456789"
        };

        await register(info);
    }
    handleInputChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    };

    onSubmit = event => {
        event.preventDefault();
        this.login(this.state);
    };

    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8">
                            <CardGroup>
                                <Card className="p-4">
                                    <CardBody>
                                        <Form onSubmit={this.onSubmit}>
                                            <h1>ورود</h1>
                                            <p className="text-muted">
                                                به اکانت خود وارد شوید
                                            </p>
                                            <InputGroup className="mb-3">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="icon-user"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Enter email"
                                                    value={this.state.email}
                                                    onChange={
                                                        this.handleInputChange
                                                    }
                                                    required
                                                    autoComplete="username"
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-4">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="icon-lock"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    type="password"
                                                    name="password"
                                                    placeholder="Enter password"
                                                    value={this.state.password}
                                                    onChange={
                                                        this.handleInputChange
                                                    }
                                                    required
                                                    autoComplete="current-password"
                                                />
                                            </InputGroup>
                                            <Row>
                                                <Col xs="6">
                                                    <Button
                                                        color="primary"
                                                        className="px-4"
                                                        type="submit"
                                                        value="Submit"
                                                    >
                                                        ورود
                                                    </Button>
                                                </Col>
                                                <Col
                                                    xs="6"
                                                    className="text-right"
                                                >
                                                    <Button
                                                        color="link"
                                                        className="px-0"
                                                    >
                                                        رمز خود را فراموش
                                                        کرده‌اید؟
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </CardBody>
                                </Card>
                                <Card
                                    className="text-white bg-primary py-5 d-md-down-none"
                                    style={{ width: "44%" }}
                                >
                                    <CardBody className="text-center">
                                        <div>
                                            <h2>ثبت نام</h2>
                                            <p>
                                                می تونید یک مقدار تست تبلیغی
                                                اینجا بزارید.
                                            </p>
                                            <Link to="/register">
                                                <Button
                                                    color="primary"
                                                    className="mt-3"
                                                    active
                                                    tabIndex={-1}
                                                >
                                                    حالا ثبت نام کن!
                                                </Button>
                                            </Link>
                                        </div>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}