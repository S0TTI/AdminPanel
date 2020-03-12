import React from "react";

class ContentMain extends React.Component {
    render() {
        return (
            <div className="navbar-fixed sidebar-nav fixed-nav">
                <header className="navbar">
                    <div className="container-fluid">
                        <button
                            className="navbar-toggler mobile-toggler hidden-lg-up"
                            type="button"
                        >
                            &#9776;
                        </button>
                        <a className="navbar-brand" href="#"></a>
                        <ul className="nav navbar-nav hidden-md-down">
                            <li className="nav-item">
                                <a
                                    className="nav-link navbar-toggler layout-toggler"
                                    href="#"
                                >
                                    &#9776;
                                </a>
                            </li>

                            {/* <!--<li className="nav-item p-x-1">
                    <a className="nav-link" href="#">داشبورد</a>
                </li>
                <li className="nav-item p-x-1">
                    <a className="nav-link" href="#">Users</a>
                </li>
                <li className="nav-item p-x-1">
                    <a className="nav-link" href="#">Settings</a>
                </li>--> */}
                        </ul>
                        <ul className="nav navbar-nav pull-left hidden-md-down">
                            <li className="nav-item">
                                <a className="nav-link aside-toggle" href="#">
                                    <i className="icon-bell"></i>
                                    <span className="tag tag-pill tag-danger">
                                        5
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="icon-list"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="icon-location-pin"></i>
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle nav-link"
                                    data-toggle="dropdown"
                                    href="#"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <img
                                        src="img/avatars/6.jpg"
                                        className="img-avatar"
                                        alt="admin@bootstrapmaster.com"
                                    />
                                    <span className="hidden-md-down">مدیر</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <div className="dropdown-header text-xs-center">
                                        <strong>تنظیمات</strong>
                                    </div>
                                    <a className="dropdown-item" href="#">
                                        <i className="fa fa-user"></i> پروفایل
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="fa fa-wrench"></i> تنظیمات
                                    </a>
                                    {/* <!--<a className="dropdown-item" href="#"><i className="fa fa-usd"></i> Payments<span className="tag tag-default">42</span></a>--> */}
                                    <div className="divider"></div>
                                    <a className="dropdown-item" href="#">
                                        <i className="fa fa-lock"></i> خروج
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link navbar-toggler aside-toggle"
                                    href="#"
                                >
                                    &#9776;
                                </a>
                            </li>
                        </ul>
                    </div>
                </header>
                <div className="sidebar">
                    <nav className="sidebar-nav">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" href="index.html">
                                    <i className="icon-speedometer"></i> داشبرد{" "}
                                    <span className="tag tag-info">جدید</span>
                                </a>
                            </li>

                            <li className="nav-title">مدیریت کاربران</li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="icon-user-follow"></i> ثبت کاربر
                                </a>
                                <a className="nav-link" href="#">
                                    <i className="icon-people"></i> لیست کاربران
                                </a>
                                <a className="nav-link" href="#">
                                    <i className="icon-user-following"></i> دسترسی
                                    کاربران
                                </a>
                            </li>

                            <li className="nav-title">مدیریت فایل ها</li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="icon-docs"></i> لیست فایل ها
                                </a>
                            </li>

                            <li className="nav-title">گزارش گیری</li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="icon-people"></i> کاربران
                                </a>
                                <a className="nav-link" href="#">
                                    <i className="icon-docs"></i> فایل ها
                                </a>
                            </li>
                            {/* <!--<li className="nav-item nav-dropdown">
                    <a className="nav-link nav-dropdown-toggle" href="#"><i className="icon-puzzle"></i> ثبت کاربر جدید</a>
                    <ul className="nav-dropdown-items">
                        <li className="nav-item">
                            <a className="nav-link" href="components-buttons.html"><i className="icon-puzzle"></i> لیست کاربران</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="components-social-buttons.html"><i className="icon-puzzle"></i> Social Buttons</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="components-cards.html"><i className="icon-puzzle"></i> Cards</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="components-forms.html"><i className="icon-puzzle"></i> Forms</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="components-switches.html"><i className="icon-puzzle"></i> Switches</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="components-tables.html"><i className="icon-puzzle"></i> Tables</a>
                        </li>
                    </ul>
                </li>--> */}

                            {/* <!--<li className="nav-item nav-dropdown">
                    <a className="nav-link nav-dropdown-toggle" href="#"><i className="icon-star"></i> Icons</a>
                    <ul className="nav-dropdown-items">
                        <li className="nav-item">
                            <a className="nav-link" href="icons-font-awesome.html"><i className="icon-star"></i> Font Awesome</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="icons-simple-line-icons.html"><i className="icon-star"></i> Simple Line Icons</a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="widgets.html"><i className="icon-calculator"></i> Widgets <span className="tag tag-info">NEW</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="charts.html"><i className="icon-pie-chart"></i> Charts</a>
                </li>--> */}
                            {/* <!--<li className="divider"></li>
                <li className="nav-title">
                    Extras
                </li>
                <li className="nav-item nav-dropdown">
                    <a className="nav-link nav-dropdown-toggle" href="#"><i className="icon-star"></i> Pages</a>
                    <ul className="nav-dropdown-items">
                        <li className="nav-item">
                            <a className="nav-link" href="pages-login.html" target="_top"><i className="icon-star"></i> Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="pages-register.html" target="_top"><i className="icon-star"></i> Register</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="pages-404.html" target="_top"><i className="icon-star"></i> Error 404</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="pages-500.html" target="_top"><i className="icon-star"></i> Error 500</a>
                        </li>
                    </ul>
                </li>--> */}
                        </ul>
                    </nav>
                </div>
                {/* <!-- Main content --> */}
                <main className="main">
                    {/* <!-- Breadcrumb --> */}
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">خانه</li>
                        <li className="breadcrumb-item">
                            <a href="#">مدیریت</a>
                        </li>
                        <li className="breadcrumb-item active">داشبرد</li>

                        {/* <!-- Breadcrumb Menu--> */}
                        <li className="breadcrumb-menu">
                            <div
                                className="btn-group"
                                role="group"
                                aria-label="Button group with nested dropdown"
                            >
                                <a className="btn btn-secondary" href="#">
                                    <i className="icon-speech"></i>
                                </a>
                                <a className="btn btn-secondary" href="./">
                                    <i className="icon-graph"></i> &nbsp;داشبرد
                                </a>
                                <a className="btn btn-secondary" href="#">
                                    <i className="icon-settings"></i> &nbsp;تنظیمات
                                </a>
                            </div>
                        </li>
                    </ol>

                    <div className="container-fluid">
                        <div className="animated fadeIn">
                            <div className="row">
                                <div className="col-sm-6 col-lg-3">
                                    <div className="card card-inverse card-primary">
                                        <div className="card-block p-b-0">
                                            <div className="btn-group pull-left">
                                                <button
                                                    type="button"
                                                    className="btn btn-transparent active dropdown-toggle p-a-0"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    <i className="icon-settings"></i>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Action
                                                    </a>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Another action
                                                    </a>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Something else here
                                                    </a>
                                                </div>
                                            </div>
                                            <h4 className="m-b-0">9.823</h4>
                                            <p>کاربر آنلاین</p>
                                        </div>
                                        <div
                                            className="chart-wrapper p-x-1"
                                            style={{height : '70px'}}
                                        >
                                            <canvas
                                                id="card-chart1"
                                                className="chart"
                                                height="70"
                                            ></canvas>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--/col--> */}

                                <div className="col-sm-6 col-lg-3">
                                    <div className="card card-inverse card-info">
                                        <div className="card-block p-b-0">
                                            <button
                                                type="button"
                                                className="btn btn-transparent active p-a-0 pull-left"
                                            >
                                                <i className="icon-location-pin"></i>
                                            </button>
                                            <h4 className="m-b-0">9.823</h4>
                                            <p>کاربر آنلاین</p>
                                        </div>
                                        <div
                                            className="chart-wrapper p-x-1"
                                            style={{height : '70px'}}
                                        >
                                            <canvas
                                                id="card-chart2"
                                                className="chart"
                                                height="70"
                                            ></canvas>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--/col--> */}

                                <div className="col-sm-6 col-lg-3">
                                    <div className="card card-inverse card-warning">
                                        <div className="card-block p-b-0">
                                            <div className="btn-group pull-left">
                                                <button
                                                    type="button"
                                                    className="btn btn-transparent active dropdown-toggle p-a-0"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    <i className="icon-settings"></i>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Action
                                                    </a>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Another action
                                                    </a>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Something else here
                                                    </a>
                                                </div>
                                            </div>
                                            <h4 className="m-b-0">9.823</h4>
                                            <p>کاربر آنلاین</p>
                                        </div>
                                        <div
                                            className="chart-wrapper"
                                            style={{height : '70px'}}
                                        >
                                            <canvas
                                                id="card-chart3"
                                                className="chart"
                                                height="70"
                                            ></canvas>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--/col--> */}

                                <div className="col-sm-6 col-lg-3">
                                    <div className="card card-inverse card-danger">
                                        <div className="card-block p-b-0">
                                            <div className="btn-group pull-left">
                                                <button
                                                    type="button"
                                                    className="btn btn-transparent active dropdown-toggle p-a-0"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    <i className="icon-settings"></i>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Action
                                                    </a>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Another action
                                                    </a>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Something else here
                                                    </a>
                                                </div>
                                            </div>
                                            <h4 className="m-b-0">9.823</h4>
                                            <p>کاربر آنلاین</p>
                                        </div>
                                        <div
                                            className="chart-wrapper p-x-1"
                                            style={{height : '70px'}}
                                        >
                                            <canvas
                                                id="card-chart4"
                                                className="chart"
                                                height="70"
                                            ></canvas>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--/col--> */}
                            </div>
                            {/* <!--/row--> */}
                        </div>
                    </div>
                    {/* <!--/.container-fluid--> */}
                </main>

                <aside className="aside-menu">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                data-toggle="tab"
                                href="#timeline"
                                role="tab"
                            >
                                <i className="icon-list"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-toggle="tab"
                                href="#messages"
                                role="tab"
                            >
                                <i className="icon-speech"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-toggle="tab"
                                href="#settings"
                                role="tab"
                            >
                                <i className="icon-settings"></i>
                            </a>
                        </li>
                    </ul>
                    {/* <!-- Tab panes --> */}
                    <div className="tab-content">
                        <div
                            className="tab-pane active"
                            id="timeline"
                            role="tabpanel"
                        >
                            <div className="callout m-a-0 p-y-h text-muted text-xs-center bg-faded text-uppercase">
                                <small>
                                    <b>Today</b>
                                </small>
                            </div>
                            <hr className="transparent m-x-1 m-y-0" />
                            <div className="callout callout-warning m-a-0 p-y-1">
                                <div className="avatar pull-xs-right">
                                    <img
                                        src="img/avatars/7.jpg"
                                        className="img-avatar"
                                        alt="admin@bootstrapmaster.com"
                                    />
                                </div>
                                <div>
                                    Meeting with
                                    <strong>Lucas</strong>
                                </div>
                                <small className="text-muted m-r-1">
                                    <i className="icon-calendar"></i>&nbsp; 1 - 3pm
                                </small>
                                <small className="text-muted">
                                    <i className="icon-location-pin"></i>&nbsp; Palo
                                    Alto, CA
                                </small>
                            </div>
                            <hr className="m-x-1 m-y-0" />
                            <div className="callout callout-info m-a-0 p-y-1">
                                <div className="avatar pull-xs-right">
                                    <img
                                        src="img/avatars/4.jpg"
                                        className="img-avatar"
                                        alt="admin@bootstrapmaster.com"
                                    />
                                </div>
                                <div>
                                    Skype with
                                    <strong>Megan</strong>
                                </div>
                                <small className="text-muted m-r-1">
                                    <i className="icon-calendar"></i>&nbsp; 4 - 5pm
                                </small>
                                <small className="text-muted">
                                    <i className="icon-social-skype"></i>&nbsp;
                                    On-line
                                </small>
                            </div>
                            <hr className="transparent m-x-1 m-y-0" />
                            <div className="callout m-a-0 p-y-h text-muted text-xs-center bg-faded text-uppercase">
                                <small>
                                    <b>Tomorrow</b>
                                </small>
                            </div>
                            <hr className="transparent m-x-1 m-y-0" />
                            <div className="callout callout-danger m-a-0 p-y-1">
                                <div>
                                    New UI Project -<strong>deadline</strong>
                                </div>
                                <small className="text-muted m-r-1">
                                    <i className="icon-calendar"></i>&nbsp; 10 -
                                    11pm
                                </small>
                                <small className="text-muted">
                                    <i className="icon-home"></i>&nbsp; creativeLabs
                                    HQ
                                </small>
                                <div className="avatars-stack m-t-h">
                                    <div className="avatar avatar-xs">
                                        <img
                                            src="img/avatars/2.jpg"
                                            className="img-avatar"
                                            alt="admin@bootstrapmaster.com"
                                        />
                                    </div>
                                    <div className="avatar avatar-xs">
                                        <img
                                            src="img/avatars/3.jpg"
                                            className="img-avatar"
                                            alt="admin@bootstrapmaster.com"
                                        />
                                    </div>
                                    <div className="avatar avatar-xs">
                                        <img
                                            src="img/avatars/4.jpg"
                                            className="img-avatar"
                                            alt="admin@bootstrapmaster.com"
                                        />
                                    </div>
                                    <div className="avatar avatar-xs">
                                        <img
                                            src="img/avatars/5.jpg"
                                            className="img-avatar"
                                            alt="admin@bootstrapmaster.com"
                                        />
                                    </div>
                                    <div className="avatar avatar-xs">
                                        <img
                                            src="img/avatars/6.jpg"
                                            className="img-avatar"
                                            alt="admin@bootstrapmaster.com"
                                        />
                                    </div>
                                </div>
                            </div>
                            <hr className="m-x-1 m-y-0" />
                            <div className="callout callout-success m-a-0 p-y-1">
                                <div>
                                    <strong>#10 Startups.Garden</strong>Meetup
                                </div>
                                <small className="text-muted m-r-1">
                                    <i className="icon-calendar"></i>&nbsp; 1 - 3pm
                                </small>
                                <small className="text-muted">
                                    <i className="icon-location-pin"></i>&nbsp; Palo
                                    Alto, CA
                                </small>
                            </div>
                            <hr className="m-x-1 m-y-0" />
                            <div className="callout callout-primary m-a-0 p-y-1">
                                <div>
                                    <strong>Team meeting</strong>
                                </div>
                                <small className="text-muted m-r-1">
                                    <i className="icon-calendar"></i>&nbsp; 4 - 6pm
                                </small>
                                <small className="text-muted">
                                    <i className="icon-home"></i>&nbsp; creativeLabs
                                    HQ
                                </small>
                                <div className="avatars-stack m-t-h">
                                    <div className="avatar avatar-xs">
                                        <img
                                            src="img/avatars/2.jpg"
                                            className="img-avatar"
                                            alt="admin@bootstrapmaster.com"
                                        />
                                    </div>
                                    <div className="avatar avatar-xs">
                                        <img
                                            src="img/avatars/3.jpg"
                                            className="img-avatar"
                                            alt="admin@bootstrapmaster.com"
                                        />
                                    </div>
                                    <div className="avatar avatar-xs">
                                        <img
                                            src="img/avatars/4.jpg"
                                            className="img-avatar"
                                            alt="admin@bootstrapmaster.com"
                                        />
                                    </div>
                                    <div className="avatar avatar-xs">
                                        <img
                                            src="img/avatars/5.jpg"
                                            className="img-avatar"
                                            alt="admin@bootstrapmaster.com"
                                        />
                                    </div>
                                    <div className="avatar avatar-xs">
                                        <img
                                            src="img/avatars/6.jpg"
                                            className="img-avatar"
                                            alt="admin@bootstrapmaster.com"
                                        />
                                    </div>
                                    <div className="avatar avatar-xs">
                                        <img
                                            src="img/avatars/7.jpg"
                                            className="img-avatar"
                                            alt="admin@bootstrapmaster.com"
                                        />
                                    </div>
                                    <div className="avatar avatar-xs">
                                        <img
                                            src="img/avatars/8.jpg"
                                            className="img-avatar"
                                            alt="admin@bootstrapmaster.com"
                                        />
                                    </div>
                                </div>
                            </div>
                            <hr className="m-x-1 m-y-0" />
                        </div>
                        <div
                            className="tab-pane p-a-1"
                            id="messages"
                            role="tabpanel"
                        >
                            <div className="message">
                                <div className="p-y-1 p-b-3 m-r-1 pull-left">
                                    <div className="avatar">
                                        <img
                                            src="img/avatars/7.jpg"
                                            className="img-avatar"
                                            alt="admin@bootstrapmaster.com"
                                        />
                                        <span className="avatar-status tag-success"></span>
                                    </div>
                                </div>
                                <div>
                                    <small className="text-muted">
                                        Lukasz Holeczek
                                    </small>
                                    <small className="text-muted pull-left m-t-q">
                                        1:52 PM
                                    </small>
                                </div>
                                <div className="text-truncate font-weight-bold">
                                    Lorem ipsum dolor sit amet
                                </div>
                                <small className="text-muted">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt...
                                </small>
                            </div>
                            <hr />
                            <div className="message">
                                <div className="p-y-1 p-b-3 m-r-1 pull-left">
                                    <div className="avatar">
                                        <img
                                            src="img/avatars/7.jpg"
                                            className="img-avatar"
                                            alt="admin@bootstrapmaster.com"
                                        />
                                        <span className="avatar-status tag-success"></span>
                                    </div>
                                </div>
                                <div>
                                    <small className="text-muted">
                                        Lukasz Holeczek
                                    </small>
                                    <small className="text-muted pull-left m-t-q">
                                        1:52 PM
                                    </small>
                                </div>
                                <div className="text-truncate font-weight-bold">
                                    Lorem ipsum dolor sit amet
                                </div>
                                <small className="text-muted">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt...
                                </small>
                            </div>
                            <hr />
                            <div className="message">
                                <div className="p-y-1 p-b-3 m-r-1 pull-left">
                                    <div className="avatar">
                                        <img
                                            src="img/avatars/7.jpg"
                                            className="img-avatar"
                                            alt="admin@bootstrapmaster.com"
                                        />
                                        <span className="avatar-status tag-success"></span>
                                    </div>
                                </div>
                                <div>
                                    <small className="text-muted">
                                        Lukasz Holeczek
                                    </small>
                                    <small className="text-muted pull-right m-t-q">
                                        1:52 PM
                                    </small>
                                </div>
                                <div className="text-truncate font-weight-bold">
                                    Lorem ipsum dolor sit amet
                                </div>
                                <small className="text-muted">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt...
                                </small>
                            </div>
                            <hr />
                            <div className="message">
                                <div className="p-y-1 p-b-3 m-r-1 pull-left">
                                    <div className="avatar">
                                        <img
                                            src="img/avatars/7.jpg"
                                            className="img-avatar"
                                            alt="admin@bootstrapmaster.com"
                                        />
                                        <span className="avatar-status tag-success"></span>
                                    </div>
                                </div>
                                <div>
                                    <small className="text-muted">
                                        Lukasz Holeczek
                                    </small>
                                    <small className="text-muted pull-right m-t-q">
                                        1:52 PM
                                    </small>
                                </div>
                                <div className="text-truncate font-weight-bold">
                                    Lorem ipsum dolor sit amet
                                </div>
                                <small className="text-muted">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt...
                                </small>
                            </div>
                            <hr />
                            <div className="message">
                                <div className="p-y-1 p-b-3 m-r-1 pull-left">
                                    <div className="avatar">
                                        <img
                                            src="img/avatars/7.jpg"
                                            className="img-avatar"
                                            alt="admin@bootstrapmaster.com"
                                        />
                                        <span className="avatar-status tag-success"></span>
                                    </div>
                                </div>
                                <div>
                                    <small className="text-muted">
                                        Lukasz Holeczek
                                    </small>
                                    <small className="text-muted pull-right m-t-q">
                                        1:52 PM
                                    </small>
                                </div>
                                <div className="text-truncate font-weight-bold">
                                    Lorem ipsum dolor sit amet
                                </div>
                                <small className="text-muted">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt...
                                </small>
                            </div>
                        </div>
                        <div
                            className="tab-pane p-a-1"
                            id="settings"
                            role="tabpanel"
                        >
                            <h6>Settings</h6>
                            <div className="aside-options">
                                <div className="clearfix m-t-2">
                                    <small>
                                        <b>Option 1</b>
                                    </small>
                                    <label className="switch switch-text switch-pill switch-success switch-sm pull-right">
                                        <input
                                            type="checkbox"
                                            className="switch-input"
                                            
                                        />
                                        <span
                                            className="switch-label"
                                            data-on="On"
                                            data-off="Off"
                                        ></span>
                                        <span className="switch-handle"></span>
                                    </label>
                                </div>
                                <div>
                                    <small className="text-muted">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua.
                                    </small>
                                </div>
                            </div>
                            <div className="aside-options">
                                <div className="clearfix m-t-1">
                                    <small>
                                        <b>Option 2</b>
                                    </small>
                                    <label className="switch switch-text switch-pill switch-success switch-sm pull-right">
                                        <input
                                            type="checkbox"
                                            className="switch-input"
                                        />
                                        <span
                                            className="switch-label"
                                            data-on="On"
                                            data-off="Off"
                                        ></span>
                                        <span className="switch-handle"></span>
                                    </label>
                                </div>
                                <div>
                                    <small className="text-muted">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua.
                                    </small>
                                </div>
                            </div>
                            <div className="aside-options">
                                <div className="clearfix m-t-1">
                                    <small>
                                        <b>Option 3</b>
                                    </small>
                                    <label className="switch switch-text switch-pill switch-success switch-sm pull-right">
                                        <input
                                            type="checkbox"
                                            className="switch-input"
                                        />
                                        <span
                                            className="switch-label"
                                            data-on="On"
                                            data-off="Off"
                                        ></span>
                                        <span className="switch-handle"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="aside-options">
                                <div className="clearfix m-t-1">
                                    <small>
                                        <b>Option 4</b>
                                    </small>
                                    <label className="switch switch-text switch-pill switch-success switch-sm pull-right">
                                        <input
                                            type="checkbox"
                                            className="switch-input"
                                            
                                        />
                                        <span
                                            className="switch-label"
                                            data-on="On"
                                            data-off="Off"
                                        ></span>
                                        <span className="switch-handle"></span>
                                    </label>
                                </div>
                            </div>
                            <hr />
                            <h6>System Utilization</h6>
                            <div className="text-uppercase m-b-q m-t-2">
                                <small>
                                    <b>CPU Usage</b>
                                </small>
                            </div>
                            <progress
                                className="progress progress-xs progress-info m-a-0"
                                value="25"
                                max="100"
                            >
                                25%
                            </progress>
                            <small className="text-muted">
                                348 Processes. 1/4 Cores.
                            </small>
                            <div className="text-uppercase m-b-q m-t-h">
                                <small>
                                    <b>Memory Usage</b>
                                </small>
                            </div>
                            <progress
                                className="progress progress-xs progress-warning m-a-0"
                                value="70"
                                max="100"
                            >
                                70%
                            </progress>
                            <small className="text-muted">11444GB/16384MB</small>
                            <div className="text-uppercase m-b-q m-t-h">
                                <small>
                                    <b>SSD 1 Usage</b>
                                </small>
                            </div>
                            <progress
                                className="progress progress-xs progress-danger m-a-0"
                                value="95"
                                max="100"
                            >
                                95%
                            </progress>
                            <small className="text-muted">243GB/256GB</small>
                            <div className="text-uppercase m-b-q m-t-h">
                                <small>
                                    <b>SSD 2 Usage</b>
                                </small>
                            </div>
                            <progress
                                className="progress progress-xs progress-success m-a-0"
                                value="10"
                                max="100"
                            >
                                10%
                            </progress>
                            <small className="text-muted">25GB/256GB</small>
                        </div>
                    </div>
                </aside>

                <footer className="footer">
                    <span className="text-left">
                        <a href="http://coreui.io">CoreUI</a> &copy; 2016
                        creativeLabs.
                    </span>
                    <span className="pull-right">
                        Powered by <a href="http://coreui.io">CoreUI</a>
                    </span>
                </footer>
            </div>
        );
    }
}

export default ContentMain;
