import React, { Component } from "react";
import {  Redirect } from "react-router-dom";
import {
    Button,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from "reactstrap";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

import { login, register } from "../../../utils/Api";
import {
    UserHaveToken,
    LastLocationReferer,
    UserToken
} from "../../../utils/auth";


const referer = LastLocationReferer || '/dashbord';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            modal: false,
            large: false,
            small: false,

            success: true
        };

        this.toggleSuccess = this.toggleSuccess.bind(this);
    }

    toggleSuccess() {
        this.setState({
            success: !this.state.success
        });
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

    if(UserHaveToken) {
        return <Redirect to={referer} />;
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Modal
                    isOpen={this.state.success}
                    toggle={this.toggleSuccess}
                    className={"modal-success " + this.props.className}
                >
                    <ModalHeader toggle={this.toggleSuccess} dir="ltr">
                        {" "}
                        <i>.برای ورود اطلاعات خود را وارد کنید </i>
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit} id="LoginModalForm">
                            <h1>ورود</h1>
                            <p className="text-muted">به اکانت خود وارد شوید</p>
                            <InputGroup className="mb-3">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="icon-user"></i>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    type="email"
                                    name="username"
                                    placeholder="یوزر نیم یا ایمیل خود را وارد کنید"
                                    value={this.state.username}
                                    onChange={this.handleInputChange}
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
                                    placeholder="پسورد خود را وارد کنید"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    required
                                    autoComplete="current-password"
                                />
                            </InputGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter className="float-right">
                        <div dir="rtl" className="float-right">
                            <Button color="link" className="px-0 ml-auto ">
                                رمز خود را فراموش کرده‌اید؟
                            </Button>
                            <Button
                                color="success"
                                className="px-4 mr-auto"
                                type="submit"
                                value="Submit"
                                form="LoginModalForm"
                            >
                                ورود
                            </Button>
                        </div>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
