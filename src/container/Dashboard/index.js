import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
    <div className="container-scroller">
        <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
                <Link className="navbar-brand brand-logo" to="/">
                <img src="images/logo.svg" alt="logo" />
                </Link>
                <Link className="navbar-brand brand-logo-mini" to="/">
                <img src="images/logo-mini.svg" alt="logo" />
                </Link>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center">
            
            <ul className="navbar-nav navbar-nav-right">
                <li className="nav-item dropdown">
                    <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                    <i className="mdi mdi-file-document-box"></i>
                    <span className="count">7</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                    <div className="dropdown-item">
                        <p className="mb-0 font-weight-normal float-left">You have 7 unread mails
                        </p>
                        <span className="badge badge-info badge-pill float-right">View all</span>
                    </div>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item preview-item">
                        <div className="preview-thumbnail">
                        <img src="images/faces/face4.jpg" alt="image" className="profile-pic" />
                        </div>
                        <div className="preview-item-content flex-grow">
                        <h6 className="preview-subject ellipsis font-weight-medium text-dark">David Grey
                            <span className="float-right font-weight-light small-text">1 Minutes ago</span>
                        </h6>
                        <p className="font-weight-light small-text">
                            The meeting is cancelled
                        </p>
                        </div>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item preview-item">
                        <div className="preview-thumbnail">
                        <img src="images/faces/face2.jpg" alt="image" className="profile-pic" />
                        </div>
                        <div className="preview-item-content flex-grow">
                        <h6 className="preview-subject ellipsis font-weight-medium text-dark">Tim Cook
                            <span className="float-right font-weight-light small-text">15 Minutes ago</span>
                        </h6>
                        <p className="font-weight-light small-text">
                            New product launch
                        </p>
                        </div>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item preview-item">
                        <div className="preview-thumbnail">
                        <img src="images/faces/face3.jpg" alt="image" className="profile-pic" />
                        </div>
                        <div className="preview-item-content flex-grow">
                        <h6 className="preview-subject ellipsis font-weight-medium text-dark"> Johnson
                            <span className="float-right font-weight-light small-text">18 Minutes ago</span>
                        </h6>
                        <p className="font-weight-light small-text">
                            Upcoming board meeting
                        </p>
                        </div>
                    </a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                    <i className="mdi mdi-bell"></i>
                    <span className="count">4</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                    <a className="dropdown-item">
                        <p className="mb-0 font-weight-normal float-left">You have 4 new notifications
                        </p>
                        <span className="badge badge-pill badge-warning float-right">View all</span>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item preview-item">
                        <div className="preview-thumbnail">
                        <div className="preview-icon bg-success">
                            <i className="mdi mdi-alert-circle-outline mx-0"></i>
                        </div>
                        </div>
                        <div className="preview-item-content">
                        <h6 className="preview-subject font-weight-medium text-dark">Application Error</h6>
                        <p className="font-weight-light small-text">
                            Just now
                        </p>
                        </div>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item preview-item">
                        <div className="preview-thumbnail">
                        <div className="preview-icon bg-warning">
                            <i className="mdi mdi-comment-text-outline mx-0"></i>
                        </div>
                        </div>
                        <div className="preview-item-content">
                        <h6 className="preview-subject font-weight-medium text-dark">Settings</h6>
                        <p className="font-weight-light small-text">
                            Private message
                        </p>
                        </div>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item preview-item">
                        <div className="preview-thumbnail">
                        <div className="preview-icon bg-info">
                            <i className="mdi mdi-email-outline mx-0"></i>
                        </div>
                        </div>
                        <div className="preview-item-content">
                        <h6 className="preview-subject font-weight-medium text-dark">New user registration</h6>
                        <p className="font-weight-light small-text">
                            2 days ago
                        </p>
                        </div>
                    </a>
                    </div>
                </li>
                <li className="nav-item dropdown d-none d-xl-inline-block">
                <a className="nav-link dropdown-toggle" id="UserDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                <span className="profile-text">Hello, Richard V.Welsh !</span>
                <img className="img-xs rounded-circle" src="images/faces/face1.jpg" alt="Profile image" />
                </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                <a className="dropdown-item p-0">
                    <div className="d-flex border-bottom">
                    <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-bookmark-plus-outline mr-0 text-gray"></i>
                    </div>
                    <div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                        <i className="mdi mdi-account-outline mr-0 text-gray"></i>
                    </div>
                    <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-alarm-check mr-0 text-gray"></i>
                    </div>
                    </div>
                </a>
                <a className="dropdown-item mt-2">
                    Manage Accounts
                </a>
                <a className="dropdown-item">
                    Change Password
                </a>
                <a className="dropdown-item">
                    Check Inbox
                </a>
                <a className="dropdown-item">
                    Sign Out
                </a>
                </div>
            </li>
            </ul>
            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span className="icon-menu"></span>
            </button>
        </div>
        </nav>
        <div className="container-fluid page-body-wrapper">
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li className="nav-item nav-profile">
                        <div className="nav-link">
                        <div className="user-wrapper">
                            <div className="profile-image">
                            <img src="images/faces/face1.jpg" alt="profile image" />
                            </div>
                            <div className="text-wrapper">
                            <p className="profile-name">User name</p>
                            <div>
                                <small className="designation text-muted">Manager</small>
                                <span className="status-indicator online"></span>
                            </div>
                            </div>
                        </div>
                        <button className="btn btn-success btn-block">New Project
                            <i className="mdi mdi-plus"></i>
                        </button>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                        <i className="menu-icon mdi mdi-television"></i>
                        <span className="menu-title">Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                        <i className="menu-icon mdi mdi-content-copy"></i>
                        <span className="menu-title">Basic UI Elements</span>
                        <i className="menu-arrow"></i>
                        </a>
                        <div className="collapse" id="ui-basic">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/typography.html">Typography</a>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="pages/forms/basic_elements.html">
                        <i className="menu-icon mdi mdi-backup-restore"></i>
                        <span className="menu-title">Form elements</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="pages/charts/chartjs.html">
                        <i className="menu-icon mdi mdi-chart-line"></i>
                        <span className="menu-title">Charts</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="pages/tables/basic-table.html">
                        <i className="menu-icon mdi mdi-table"></i>
                        <span className="menu-title">Tables</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="pages/icons/font-awesome.html">
                        <i className="menu-icon mdi mdi-sticker"></i>
                        <span className="menu-title">Icons</span>
                        </a>
                    </li>
                </ul>
            </nav>
            
            <div className="main-panel">
            <div className="content-wrapper">
            <p>i am auth</p>
            </div>
            <footer className="footer">
            <div className="container-fluid clearfix">
                <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
                Copyright © {new Date().getFullYear()} All rights reserved.</span>
                <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                made with <i className="mdi mdi-heart text-danger"></i>
                </span>
            </div>
            </footer>
        </div>
        </div>
  </div>
);

export default Dashboard;
