import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
// import API from '../../api';
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
                            <div class="row">
                                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
                                <div class="card card-statistics">
                                    <div class="card-body">
                                    <div class="clearfix">
                                        <div class="float-left">
                                        <i class="mdi mdi-cube text-danger icon-lg"></i>
                                        </div>
                                        <div class="float-right">
                                        <p class="mb-0 text-right">Total Revenue</p>
                                        <div class="fluid-container">
                                            <h3 class="font-weight-medium text-right mb-0">$65,650</h3>
                                        </div>
                                        </div>
                                    </div>
                                    <p class="text-muted mt-3 mb-0">
                                        <i class="mdi mdi-alert-octagon mr-1" aria-hidden="true"></i> 65% lower growth
                                    </p>
                                    </div>
                                </div>
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
                                <div class="card card-statistics">
                                    <div class="card-body">
                                    <div class="clearfix">
                                        <div class="float-left">
                                        <i class="mdi mdi-receipt text-warning icon-lg"></i>
                                        </div>
                                        <div class="float-right">
                                        <p class="mb-0 text-right">Orders</p>
                                        <div class="fluid-container">
                                            <h3 class="font-weight-medium text-right mb-0">3455</h3>
                                        </div>
                                        </div>
                                    </div>
                                    <p class="text-muted mt-3 mb-0">
                                        <i class="mdi mdi-bookmark-outline mr-1" aria-hidden="true"></i> Product-wise sales
                                    </p>
                                    </div>
                                </div>
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
                                <div class="card card-statistics">
                                    <div class="card-body">
                                    <div class="clearfix">
                                        <div class="float-left">
                                        <i class="mdi mdi-poll-box text-success icon-lg"></i>
                                        </div>
                                        <div class="float-right">
                                        <p class="mb-0 text-right">Sales</p>
                                        <div class="fluid-container">
                                            <h3 class="font-weight-medium text-right mb-0">5693</h3>
                                        </div>
                                        </div>
                                    </div>
                                    <p class="text-muted mt-3 mb-0">
                                        <i class="mdi mdi-calendar mr-1" aria-hidden="true"></i> Weekly Sales
                                    </p>
                                    </div>
                                </div>
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
                                <div class="card card-statistics">
                                    <div class="card-body">
                                    <div class="clearfix">
                                        <div class="float-left">
                                        <i class="mdi mdi-account-location text-info icon-lg"></i>
                                        </div>
                                        <div class="float-right">
                                        <p class="mb-0 text-right">Employees</p>
                                        <div class="fluid-container">
                                            <h3 class="font-weight-medium text-right mb-0">246</h3>
                                        </div>
                                        </div>
                                    </div>
                                    <p class="text-muted mt-3 mb-0">
                                        <i class="mdi mdi-reload mr-1" aria-hidden="true"></i> Product-wise sales
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
