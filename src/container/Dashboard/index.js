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
                        <p>i am auth</p>
                    </div>
                    <Footer />
                </div>
                </div>
            </div>
        )
    }
    
}
