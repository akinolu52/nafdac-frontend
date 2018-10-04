import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import {userData} from '../../auth'
import API from '../../api';
import Quagga from 'quagga';
var Barcode = require('react-barcode');
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
                    <li style={{padding: '8px'}}>
                        <Link to="register" title="Register">Register</Link>
                    </li>
                    <li>
                        <Link classNameName="btn" to="login" title="Log In">Login</Link>
                    </li> 
                </Fragment>
                 
            );
        } else {
            return(
                <Fragment>
                    <li style={{padding: '8px'}}>
                        <Link to="dashboard">Welcome, {this.state.userData.name}</Link>
                    </li>
                    <li>
                        <Link to="dashboard" classNameName="btn">Dashboard</Link>
                    </li>
                </Fragment>
            )
        }
    }

    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-transparent navbar-dark bg-dark py-4">
                    <div className="container">
                        <a className="navbar-brand" href="../"><strong>Nafdac</strong> - for food & drugs</a>
                        <button className="navbar-toggler" type="button" data-action="offcanvas-open" data-target="#navbar_main" aria-controls="navbar_main" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse offcanvas-collapse" id="navbar_main">
                        <ul className="navbar-nav ml-auto align-items-lg-center">
                            <h6 className="dropdown-header font-weight-600 d-lg-none px-0">Menu</h6>
                            { !localStorage.getItem('userData') &&
                            <Fragment>
                                <li className="nav-item ">
                                <a className="nav-link" href="/login">Login</a>
                                </li>
                                <li className="nav-item ">
                                <a className="nav-link" href="/register">Register</a>
                                </li>
                            </Fragment>
                            }{ localStorage.getItem('userData') &&
                            <Fragment>
                                <li className="nav-item ">
                                <a className="nav-link" href="/dashboard">Dashboard</a>
                                </li>
                            </Fragment>
                            }
                            <li className="nav-item ">
                            <a className="nav-link" href="/products">Products</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link nav-link-icon" href="#" target="_blank"><i className="fab fa-facebook"></i><span className="ml-2 d-lg-none">Facebook</span></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link nav-link-icon" href="#" target="_blank"><i className="fab fa-dribbble"></i><span className="ml-2 d-lg-none">Dribbble</span></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link nav-link-icon" href="#" target="_blank"><i className="fab fa-github"></i><span className="ml-2 d-lg-none">Github</span></a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
                <main>
                    <section className="slice slice-lg">
                        <div className="container">
                            <div className="mb-md text-center">
                                <br />
                                <br />
                                <h3 className="heading h3" style={{marginBottom: "10px"}}>All products</h3>
                                {/* <div className="form-group">
                                <input type="number" name="q" className="form-control" onChange={this.onChange} style={{height: "45px", width: "80%", margin: "0 auto"}} />
                                </div> */}
                            </div>
                            <div className="row cols-xs-space cols-sm-space cols-md-space">
                                {this.state.products.map(function(product, index){
                                    return (
                                        <div className="col-lg-4" key={ index }>
                                            
                                                <div className="card border-0">
                                                    <img className="rounded z-depth-3 img-fluid" src="../images/bg_header5.jpeg" alt="Image description" />
                                                    <div className="p-4">
                                                    <h5 className="card-title">{ product['name'] }</h5>
                                                    <p className="card-text">{ product['description'] }</p>
                                                    </div>
                                                    
                                                </div>
                                                <br />
                                                {/* <a href={"/product/" + product['nafdac_no'] } className="btn btn-block btn-lg mt-4">
                                                    View
                                                </a> */}
                                                <Barcode value={ product['name'] } />
                                            
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                </main>
            </Fragment>
        )
    }
}
