import React from "react";
import "./assets/css/App.css";

import HeaderMain from "./component/header/Header.main.js";
import ContentMain from "./component/content/Content.main.js";
import SidebarMain from "./component/sidebar/Sidebar.main.js";
import FoterMain from "./component/foter/Foter.main.js";

import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
    return (
        <div className="container-fluid text-primary">
            <div className="row col-12 bg-secondary ali">
              <HeaderMain />
            </div>
            
            <div className="row col-12 ">
              <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9 bg-dark text-danger ">
                <ContentMain />
              </div>
              <div className="d-none d-sm-none col-md-3 col-lg-3 col-xl-3 d-md-block text-dark bg-primary">
                <SidebarMain /> 
              </div>
            </div>

            <div className="row col-12 bg-success">
              <FoterMain />
            </div>
        </div>
    );
}

export default App;
