import React from "react";
import Login from "./login/Login.js";

import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";




function Btnlogin() {
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
                
                    </div>
                </div>
            </div>
        </div>
    );
}

class HeaderMain extends React.Component {
    render() {
        return (
            <div className="navbar-fixed fixed-nav  pace-done">
            <div className="navbar">
                {/* <header className="navbar"> */}
                <div className="container container-nav">
                    <button
                        className="navbar-toggler mobile-toggler hidden-lg-up"
                        type="button"
                    >
                        &#9776;
                    </button>
                    {/* <a className="navbar-brand" href="#"></a> */}

                    {/* <form className="form-inline nav navbar-nav pull-xs-right"> */}
                    {/* <button className="btn btn-outline-success" type="submit">
                            ثبت نام
                        </button> */}
                    <Btnlogin />
                    {/* <button className="btn btn-outline-primary" type="submit">
                        ورود
                    </button> */}
                    {/* </form> */}
                </div>
                {/* </header> */}
            </div>
        </div>
        );
    }
}

export default HeaderMain;
