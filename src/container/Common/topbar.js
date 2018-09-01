import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {userData} from '../../auth'

export default class Topbar extends Component {
    constructor() {
        super();
        this.state = {
            userData: userData()
        }
    }
    render() {
        return (
            <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
                    <Link className="navbar-brand brand-logo" to="/" style={{'width': 'calc(255px - 130px)', 'maxWidth': '100%', color: '#000','height': '28px', 'margin': 'auto', 'verticalAlign': 'middle', }}>
                    Nafdac
                    </Link>
                    <Link className="navbar-brand brand-logo-mini" to="/" style={{'width': 'calc(255px - 130px)', 'maxWidth': '100%', 'height': '28px', 'margin': 'auto', 'verticalAlign': 'middle', }}>
                    Nafdac
                    </Link>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-center">
                
                    <ul className="navbar-nav navbar-nav-right">
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
                        <li className="nav-item d-none d-xl-inline-block">
                            <a className="nav-link " id="UserDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                            <span className="profile-text">Hello, { this.state.userData.name } !</span>
                            <img className="img-xs rounded-circle" src="./../images/faces-clipart/pic-1.png" alt="Profile image" />
                            </a>
                        </li>
                    </ul>
                    {/* <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                    <span className="icon-menu"></span>
                    </button> */}
                </div>
            </nav>
                
        )
    }
}