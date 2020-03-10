import React from "react";
import "./assets/css/App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
    return (
        <div className="container-fluid">
            <div className="row">
              {/* <Header /> */}
            </div>
            
            <div className="row">
              <div className="col-sm-12 col-lg-9 col-md-9 col-xl-9  d-sm-block  bg-dark">
                {/* <Content/> */}
                
              </div>
              <div className="col-3 col-sm- d-sm-block bg-primary">
                {/* <Sidebar /> */} s
              </div>
            </div>
            <div className="row"></div>
        </div>
    );
}

export default App;
