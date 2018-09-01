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
                            <img src="./../images/faces-clipart/pic-1.png" alt="profile image"  style={{ width: '100%' }}/>
                            </div>
                            <div className="text-wrapper">
                            <p className="profile-name">{ this.state.userData.name.substr(0, 12) }...</p>
                            <div>
                                <small className="designation text-muted">{ this.state.userData.role }</small>
                                <span className="status-indicator online"></span>
                            </div>
                            </div>
                        </div>
                        <Link to="/products/create" className="btn btn-success btn-block">Submit Product
                            <i className="mdi mdi-plus"></i>
                        </Link>
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
                        <i className="menu-icon mdi mdi-content-copy"></i>
                        <span className="menu-title">Products</span>
                        <i className="menu-arrow"></i>
                        </a>
                        <div className="collapse" id="ui-basic">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                            <a href={"/products"} className="nav-link">My Products</a>
                            </li>
                            <li className="nav-item">
                            <Link to="/products/create" className="nav-link">Submit Product</Link>
                            </li>
                        </ul>
                        </div>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="/products">
                        <i className="menu-icon mdi mdi-sticker"></i>
                        <span className="menu-title">Products</span>
                        </a>
                    </li> */}
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={this.logout}>
                        <i className="menu-icon mdi mdi-sticker"></i>
                        <span className="menu-title">Logout</span>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}