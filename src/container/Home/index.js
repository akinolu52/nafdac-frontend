import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import {userData} from '../../auth'
import API from '../../api';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            userData: userData(),
            products: [],
            q: null
        }
        this.getProducts()
        this.onChange = this.onChange.bind(this)
        this.search = this.search.bind(this)
    }

    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    search (e) {
        e.preventDefault();
        let url = `/search/${this.state.q}`;
        API.get(url)
        .then(response => {
            if (response !== false) {
                this.setState({ products: response.data })
                console.log(this.state.products)
            }
        }).catch(e =>{
            console.log(e);
        })
    }

    getProducts () {
        API.get('/products/all')
        .then(response => {
            if (response !== false) {
                this.setState({ products: response.data })
                console.log(this.state.products)
            }
        }).catch(e =>{
            console.log(e);
        })
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
                        <input type="search" placeholder="Where do you want to go?" name="q" onChange={this.onChange} />
                        <input type="submit" value="Search" onClick={this.search} />
                    </form>
                    <div id="madeby">
                        <span>
                            Photo by <span>Ben Blennerhassett</span>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
