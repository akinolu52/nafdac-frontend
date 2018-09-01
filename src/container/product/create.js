import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import API from '../../api';
import {userData} from '../../auth'
import Sidebar from '../Common/sidebar'
import Topbar from '../Common/topbar'
import Footer from '../Common/footer'
import classNames from 'classnames'

export default class ProductCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: userData(),
            name: null,
            description: null,
            image: null,
            error: null,
        }
        this.createProduct = this.createProduct.bind(this)
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    fileChangedHandler = (event) => {
        const file = event.target.files[0]
        this.setState({image: file})
    }

    createProduct(e) {
        e.preventDefault();

        const formData = new FormData()
        formData.append('image', this.state.image)
        formData.append('name', this.state.name)
        formData.append('description', this.state.description)
        
        if (this.state.name && this.state.description) {
            let req = {
                url: '/products/create',
                method: 'POST',
                headers: { X_TOKEN: this.state.userData.token },
                data: formData
            }
            API(req).then(res => {
                if (res.data === false) {
                    this.setState({ 'error': 'error in submission' })
                } else {
                    alert('Product Created')
                    window.location.href = "/products"
                }
                
            })
        }
    }

    render() {
        let nameInputClass = classNames({ 
            "form-control" : true,
            "green-border": this.state.name,
        });
        let descriptionInputClass = classNames({ 
            "form-control" : true,
            "green-border": this.state.description,
        });
        if (!this.state.userData) {
            return (<Redirect to={"/login"} />)
        }
        return (
            <div className="container-scroller">
               <Topbar />
               <div className="container-fluid page-body-wrapper">
                    <Sidebar />
                    <div className="main-panel">
                        <div className="d-flex justify-content-center content-wrapper">
                            <div className="col-md-8 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title text-center">Product submission form</h4>
                                        <form className="forms-sample">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputName1">Product name</label>
                                                <input type="text" name="name" className={nameInputClass} onChange={this.onChange} placeholder="Name"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Product image </label>
                                                <input type="file" name="image" className="file-upload-default" onChange={this.fileChangedHandler}/>
                                                <div className="input-group col-xs-12">
                                                    <input type="text" className="form-control file-upload-info" disabled placeholder="Upload Image"/>
                                                    <span className="input-group-append">
                                                    <button className="file-upload-browse btn btn-info" type="button">Upload</button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleTextarea1">Description</label>
                                                <textarea name="description" className={descriptionInputClass} onChange={this.onChange} rows="10"></textarea>
                                            </div>
                                            <button type="submit" onClick={this.createProduct} className="btn btn-success mr-2">Submit Product</button>
                                        </form>
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
