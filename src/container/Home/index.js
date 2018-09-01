import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import {userData} from '../../auth'

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            userData: userData()
        }
    }
    renderSwitch () {
        if (this.state.userData == null) {
            return(
                <Fragment>
                    <li>
                        <Link to="register" title="Register">Register</Link>
                    </li>
                    <li>
                        <Link className="btn" to="login" title="Log In">Login</Link>
                    </li> 
                </Fragment>
                 
            );
        } else {
            return(
                <Fragment>
                    <li>
                        <Link to="dashboard">Welcome, {this.state.userData.name}</Link>
                    </li>
                    <li>
                        <Link to="dashboard" className="btn">Dashboard</Link>
                    </li>
                </Fragment>
            )
        }
    }
    render() {
        return (
            <div className="container">
                <header>
                    <h2><Link to="/"> Nafdac</Link></h2>
                    <nav>
                    <ul>
                        <li>
                        <Link to="#" title="Hotels">Drugs</Link>
                        </li>
                        {/* <li>
                        <Lin to="" title="Flights">Flights</Link>
                        </li> */}
                        { this.renderSwitch() }
                        
                    </ul>
                    </nav>
                </header>
                <div className="cover">
                    <h1>Discover registered drugs.</h1>
                    <form className="flex-form">
                        <label htmlFor="from">
                            <i className="ion-location"></i>
                        </label>
                        <input type="search" placeholder="Where do you want to go?" />
                        <input type="submit" value="Search" />
                    </form>
                    <div id="madeby">
                        <span>
                            Photo by <a href="https://unsplash.com/@benblenner" target="_blank">Ben Blennerhassett</a>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
