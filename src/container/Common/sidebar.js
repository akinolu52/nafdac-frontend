import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {userData, logout} from '../../auth'

export default class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            userData: userData()
        }
        this.logout = this.logout.bind(this)
    }
    logout(e) {
        e.preventDefault();
        logout(userData())
    }
    render() {
        return (
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li className="nav-item nav-profile">
                        <div className="nav-link">
                        <div className="user-wrapper">
                            <div className="profile-image">
                            <img src="./../images/faces-clipart/pic-1.png" alt="profile"  style={{ width: '100%' }}/>
                            </div>
                            <div className="text-wrapper">
                            <p className="profile-name">{ this.state.userData.name.substr(0, 12) }...</p>
                            <div>
                                <small className="designation text-muted">{ this.state.userData.role }</small>
                                <span className="status-indicator online"></span>
                            </div>
                            </div>
                        </div>
                        { this.state.userData.role === 'user' &&
                            <Link to="/products/create" className="btn btn-success btn-block">Submit Product
                            <i className="mdi mdi-plus"></i>
                            </Link>
                        }
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">
                            <i className="menu-icon mdi mdi-television"></i>
                            <span className="menu-title">Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                        <i className="menu-icon mdi mdi-format-list-bulleted-type"></i>
                        <span className="menu-title">Products</span>
                        <i className="menu-arrow"></i>
                        </a>
                        <div className="collapse" id="ui-basic">
                            <ul className="nav flex-column sub-menu">
                                { this.state.userData.role === 'user' &&
                                    <React.Fragment>
                                        <li className="nav-item">
                                        <a href="/products" className="nav-link">My Products</a>
                                        </li>
                                        <li className="nav-item">
                                        <Link to="/products/create" className="nav-link">Submit Product</Link>
                                        </li>
                                    </React.Fragment>
                                }
                                { this.state.userData.role === 'admin' &&
                                    <React.Fragment>
                                        <li className="nav-item">
                                        <a href="/products" className="nav-link">All Products</a>
                                        </li>
                                        <li className="nav-item">
                                        <Link to="/products/create" className="nav-link">Approved Products</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link to="/products/create" className="nav-link">Pending Products</Link>
                                        </li>
                                        {/* <li className="nav-item">
                                        <Link to="/products/create" className="nav-link">Submit Products</Link>
                                        </li> */}
                                    </React.Fragment>
                                }
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link pointer" onClick={this.logout}>
                            <i className="menu-icon mdi mdi-power"></i>
                            <span className="menu-title">Logout</span>
                        </span>
                    </li>
                </ul>
            </nav>
        )
    }
}