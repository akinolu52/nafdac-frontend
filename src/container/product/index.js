import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import API from '../../api';
import {userData} from '../../auth'
import Sidebar from '../Common/sidebar'
import Topbar from '../Common/topbar'
import Footer from '../Common/footer'

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: userData(),
            products: null,
        }
        this.getProducts();
    }
    getProducts() {
        const self = this;
        API.get('/products/mine', {
            headers: {
                X_TOKEN: this.state.userData.token
            }
        }).then(response => {
            if (response !== false) {
                self.setState({ products: response })
            }
        }).catch(e =>{
            console.log(e);
        })
    }
    render() {
        if (!this.state.userData) {
            return (<Redirect to={"/login"} />)
        }
        return (
            <div className="container-scroller">
               <Topbar />
               <div className="container-fluid page-body-wrapper">
                    <Sidebar />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="col-lg-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">All Products</h4>
                                        <div className="table-responsive">
                                            <table className="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            User
                                                        </th>
                                                        <th>
                                                            First name
                                                        </th>
                                                        <th>
                                                            Progress
                                                        </th>
                                                        <th>
                                                            Amount
                                                        </th>
                                                        <th>
                                                            Deadline
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="py-1">
                                                            <img src="../../images/faces-clipart/pic-1.png" alt="image" />
                                                        </td>
                                                        <td>
                                                            Herman Beck
                                                        </td>
                                                        <td>
                                                            <div className="progress">
                                                            <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            $ 77.99
                                                        </td>
                                                        <td>
                                                            May 15, 2015
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
    
}