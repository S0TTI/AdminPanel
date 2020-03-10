import React from "react";
import Login from "./login/Login";

import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

function RunLogin() {
    return (
        // this get frome here:
        // https://getbootstrap.com/docs/4.0/components/modal/

        <div className="badge-light">
            {/* <!-- Button trigger modal --> */}
            <button
                type="button"
                class="btn btn-success bg-success"
                data-toggle="modal"
                data-target="#Loginmodal"
            >
                ورود
            </button>

            {/* <!-- Modal --> */}
            <div
                class="modal fade"
                id="Loginmodal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                                login forme
                            </h5>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <Login />
                        </div>
                        {/* <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" class="btn btn-primary">
                                Login
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

class HeaderMain extends React.Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div class="collapse navbar-collapse" id="navbarColor02">
                        <form class="form-inline">
                            <button
                                class="btn btn-outline-light my-2 my-sm-0"
                                type="submit"
                            >
                                جستجو
                            </button>
                            <input
                                class="form-control mr-sm-2"
                                type="search"
                                placeholder="سرچ کنید"
                                aria-label="Search"
                            />
                        </form>
                    
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    درباره ما
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    محصولان
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    ویژگی ها
                                </a>
                            </li>

                            <li class="nav-item active">
                                <a class="nav-link" href="#">
                                    خانه <span class="sr-only">(current)</span>
                                </a>
                            </li>
                        </ul>
                        <RunLogin />
                    </div>

                    <a class="navbar-brand" href="#">
                        |
                    </a>
                    
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarColor02"
                        aria-controls="navbarColor02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>
        );
    }
}

export default HeaderMain;
