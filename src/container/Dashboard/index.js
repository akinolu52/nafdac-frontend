import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

import {userData} from '../../auth'
// import AuthDash from '../Common/authDash'
import Sidebar from '../Common/sidebar'
import Topbar from '../Common/topbar'
import Footer from '../Common/footer'

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: userData()
        }
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
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
                                <div className="card card-statistics">
                                    <div className="card-body">
                                    <div className="clearfix">
                                        <div className="float-left">
                                        <i className="mdi mdi-cube text-danger icon-lg"></i>
                                        </div>
                                        <div className="float-right">
                                        <p className="mb-0 text-right">Total Revenue</p>
                                        <div className="fluid-container">
                                            <h3 className="font-weight-medium text-right mb-0">$65,650</h3>
                                        </div>
                                        </div>
                                    </div>
                                    <p className="text-muted mt-3 mb-0">
                                        <i className="mdi mdi-alert-octagon mr-1" aria-hidden="true"></i> 65% lower growth
                                    </p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
                                <div className="card card-statistics">
                                    <div className="card-body">
                                    <div className="clearfix">
                                        <div className="float-left">
                                        <i className="mdi mdi-receipt text-warning icon-lg"></i>
                                        </div>
                                        <div className="float-right">
                                        <p className="mb-0 text-right">Orders</p>
                                        <div className="fluid-container">
                                            <h3 className="font-weight-medium text-right mb-0">3455</h3>
                                        </div>
                                        </div>
                                    </div>
                                    <p className="text-muted mt-3 mb-0">
                                        <i className="mdi mdi-bookmark-outline mr-1" aria-hidden="true"></i> Product-wise sales
                                    </p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
                                <div className="card card-statistics">
                                    <div className="card-body">
                                    <div className="clearfix">
                                        <div className="float-left">
                                        <i className="mdi mdi-poll-box text-success icon-lg"></i>
                                        </div>
                                        <div className="float-right">
                                        <p className="mb-0 text-right">Sales</p>
                                        <div className="fluid-container">
                                            <h3 className="font-weight-medium text-right mb-0">5693</h3>
                                        </div>
                                        </div>
                                    </div>
                                    <p className="text-muted mt-3 mb-0">
                                        <i className="mdi mdi-calendar mr-1" aria-hidden="true"></i> Weekly Sales
                                    </p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
                                <div className="card card-statistics">
                                    <div className="card-body">
                                    <div className="clearfix">
                                        <div className="float-left">
                                        <i className="mdi mdi-account-location text-info icon-lg"></i>
                                        </div>
                                        <div className="float-right">
                                        <p className="mb-0 text-right">Employees</p>
                                        <div className="fluid-container">
                                            <h3 className="font-weight-medium text-right mb-0">246</h3>
                                        </div>
                                        </div>
                                    </div>
                                    <p className="text-muted mt-3 mb-0">
                                        <i className="mdi mdi-reload mr-1" aria-hidden="true"></i> Product-wise sales
                                    </p>
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
