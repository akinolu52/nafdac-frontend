import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import API from '../../api';
import classNames from 'classnames'

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            redirectToReferrer: false,
            error: null
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    login(e) {
        e.preventDefault();
        if (this.state.email && this.state.password) {
            API.post('login', this.state).then(res => {
                if (res.data.error) {
                    this.setState({ 'error': res.data.error.text })
                } else {
                    let response = res.data
                    if (response.email && response.token) {
                        localStorage.setItem('userData', JSON.stringify(response))
                        // userAuth.authenticated(() => {
                            this.setState({redirectToReferrer: true})
                        // })
                    }
                }
                
            })
        }
    }
    render() {
        let emailInputClass = classNames({ 
            "mdi mdi-check-circle-outline" : true,
            "green": this.state.email,
        });
        let passwordInputClass = classNames({ 
            "mdi mdi-check-circle-outline" : true,
            "green": this.state.password,
        });
        if (this.state.redirectToReferrer || localStorage.getItem('userData')) {
            return (<Redirect to={"/dashboard"} />)
        }
        return(
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper auth-page">
                <div className="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one">
                    <div className="row w-100">
                    <div className="col-lg-4 mx-auto">
                    <h2 className="text-center mb-4" style={{ color: '#fff' }}>Login</h2>
                        <div className="auto-form-wrapper">
                        <form action="#">
                            {
                                this.state.error &&
                                <div className="alert alert-danger f-13 alert-dismissible fade show" role="alert">
                                    {this.state.error}
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            }
                            <div className="form-group">
                            <label className="label">Email</label>
                            <div className="input-group">
                                <input type="email" className="form-control" name="email" placeholder="Email" onChange={this.onChange}/>
                                <div className="input-group-append">
                                <span className="input-group-text">
                                    <i className={emailInputClass}></i>
                                </span>
                                </div>
                            </div>
                            </div>
                            <div className="form-group">
                            <label className="label">Password</label>
                            <div className="input-group">
                                <input type="password" className="form-control" name="password" placeholder="*********" onChange={this.onChange}/>
                                <div className="input-group-append">
                                <span className="input-group-text">
                                    <i className={passwordInputClass}></i>
                                </span>
                                </div>
                            </div>
                            </div>
                            <div className="form-group">
                            <button className="btn btn-primary submit-btn btn-block" onClick={this.login} >Login</button>
                            </div>
                            <div className="text-block text-center my-3">
                            <span className="text-small font-weight-semibold">Not a member?</span> 
                            <Link to="register" className="text-black text-small ml-2">Create new account</Link>
                            </div>
                        </form>
                        </div>
                        <ul className="auth-footer">
                        </ul>
                        <p className="footer-text text-center">copyright &copy; {new Date().getFullYear()} Nafdac. All rights reserved.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
};
