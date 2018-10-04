import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import API from '../../api';
import {userData} from '../../auth'
import Sidebar from '../Common/sidebar'
import Topbar from '../Common/topbar'
import Footer from '../Common/footer'
import classNames from 'classnames'
import StepZilla from 'react-stepzilla'
import Stepper from 'react-stepper-horizontal';
export default class ProductCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: userData(),
            name: null,
            description: null,
            image: null,
            error: null,
            steps: [{
                title: 'Particular of the establishment',
                onClick: (e) => {
                  e.preventDefault()
                }
              }, {
                title: 'Product description',
                onClick: (e) => {
                  e.preventDefault()
                }
              },  {
                title: 'Product confirmation',
                onClick: (e) => {
                  e.preventDefault()
                }
              }],
              currentStep: 0,

        }
        
        this.onClickNext = this.onClickNext.bind(this);
        this.createProduct = this.createProduct.bind(this)
        this.onChange = this.onChange.bind(this);
        
    }

    onClickNext(e) {
        e.preventDefault();
        if (this.state.currentStep === 2) {

            console.log(this.state)

            const formData = new FormData()
            formData.append('image', this.state.image)
            formData.append('name', this.state.name)
            formData.append('description', this.state.description)
            formData.append('business_address', this.state.business_address)
            formData.append('business_number', this.state.business_number)
            formData.append('company_name', this.state.company_name)
            formData.append('date_of_incorporation', this.state.date_of_incorporation)
            formData.append('description', this.state.description)
            formData.append('description_of_manufacturing', this.state.description_of_manufacturing)
            formData.append('email_address', this.state.email_address)
            formData.append('mailing_address', this.state.mailing_address)
            formData.append('product_name', this.state.product_name)
            // formData.append('', this.state.)
            // formData.append('', this.state.)
            // formData.append('', this.state.)
            // formData.append('', this.state.)

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
        this.setState({
          currentStep: this.state.currentStep + 1,
        });
    }

    onChange(e) {
        // console.log('on change');
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
                                        
                                        {/* <form className="forms-sample"> */}
                                        <div className='step-progress'>
                                            <Stepper steps={ this.state.steps } activeStep={ this.state.currentStep } />
                                            { this.state.currentStep === 0  &&
                                                <Step1 onClick={(e) => this.onClickNext(e)} onChange={(e) => this.onChange(e)} />
                                            }{ this.state.currentStep === 1  &&
                                                <Step2 onClick={(e) => this.onClickNext(e)} onChange={(e) => this.onChange(e)} />
                                            }{ this.state.currentStep === 2  &&
                                                <Step3 onClick={(e) => this.onClickNext(e)} onChange={(e) => this.onChange(e)} />
                                            }
                                        </div>
                                            
                                        {/* </form> */}
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

const Step1 = (props) => (
    <div className="forms-sample">
        <br />
        <div className="form-group">
            <label htmlFor="exampleInputName1">Registration type </label> <br />
            <input type="radio" name="reg_type" className="mr-1" /> New <span className="ml-3" />
            <input type="radio" name="reg_type" className="mr-1" /> Renewal
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputName1">Company business number </label> <br />
            <input type="number" name="business_number" className="form-control" onChange={(e) => props.onChange(e)} />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputName1">Name of company</label> <br />
            <input type="text" name="company_name" className="form-control" onChange={(e) => props.onChange(e)} />
        </div>
        {/* <div className="form-group">
            <label htmlFor="exampleInputName1">Tax identification number</label> <br />
            <input type="number" name="tax_number" className="form-control" onChange={(e) => props.onChange(e)} />
        </div> */}
        <div className="form-group">
            <label htmlFor="exampleInputName1">Date of incorporation</label> <br />
            <input type="date" name="date_of_incorporation" className="form-control" onChange={(e) => props.onChange(e)} />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputName1">Business number</label> <br />
            <input type="number" name="business_number" className="form-control" onChange={(e) => props.onChange(e)} />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputName1">Business address</label> <br />
            <input type="text" name="business_address" className="form-control" onChange={(e) => props.onChange(e)} />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputName1">Mailing address of business</label> <br />
            <input type="text" name="mailing_address" className="form-control" onChange={(e) => props.onChange(e)} />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputName1">Telephone</label> <br />
            <input type="tel" name="telephone" className="form-control" onChange={(e) => props.onChange(e)} />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputName1">Email address</label> <br />
            <input type="email" name="email_address" className="form-control" onChange={(e) => props.onChange(e)} />
        </div>
        <button type="button" onClick={(e) => props.onClick(e)} className="btn btn-success mr-2">Next</button> 
    </div>
)
const Step2 = (props) => (
    <div className="forms-sample"> 
        <br />
        <div className="form-group">
            <label htmlFor="exampleInputName1">Product name</label>
            <input type="text" name="product_name" className="form-control" onChange={(e) => props.onChange(e)} />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputName1">Product category</label>
            <select className="form-control" name="product_category">
                <option>food</option>
                <option>drug</option>
            </select>
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
            <label htmlFor="exampleTextarea1">Product Description</label>
            <textarea name="description" className="form-control" onChange={(e) => props.onChange(e)} rows="10"></textarea>
        </div>
        {/* <div className="form-group">
            <label>Quality specification </label>
            <input type="file" name="quality_specification" className="file-upload-default" onChange={this.fileChangedHandler}/>
            <div className="input-group col-xs-12">
                <input type="text" className="form-control file-upload-info" disabled placeholder="Upload Image"/>
                <span className="input-group-append">
                <button className="file-upload-browse btn btn-info" type="button">Upload</button>
                </span>
            </div>
        </div> */}
        {/* <div className="form-group">
            <label>Certificate of analysis from manufacturer </label>
            <input type="file" name="certificate" className="file-upload-default" onChange={this.fileChangedHandler}/>
            <div className="input-group col-xs-12">
                <input type="text" className="form-control file-upload-info" disabled placeholder="Upload Image"/>
                <span className="input-group-append">
                <button className="file-upload-browse btn btn-info" type="button">Upload</button>
                </span>
            </div>
        </div> */}
        <div className="form-group">
            <label htmlFor="exampleTextarea1">Description of manufacturing process</label>
            <textarea name="description_of_manufacturing" className="form-control" onChange={(e) => props.onChange(e)} rows="10"></textarea>
        </div>
        <div className="form-group">
            <label htmlFor="exampleTextarea1">Werehouse/factory address</label>
            <textarea name="warehose_address" className="form-control" onChange={(e) => props.onChange(e)} rows="10"></textarea>
        </div>
        <button type="button" onClick={(e) => props.onClick(e)} className="btn btn-success mr-2">Next</button> 
    </div>
)
const Step3 = (props) => (
    <div className="forms-sample">
        <br />
        <div className="form-group">
            <label htmlFor="exampleInputName1">Type of business</label>
            <select className="form-control">
                <option>Sole Propietorship</option>
                <option>Partnership</option>
                <option>Public</option>
                <option>Limited liability Company</option>
            </select>
        </div>
        {/* <div className="form-group">
            <label>Manufacturing/franchise agreement </label>
            <input type="file" name="manufacturing_agreement" className="file-upload-default" onChange={this.fileChangedHandler}/>
            <div className="input-group col-xs-12">
                <input type="text" className="form-control file-upload-info" disabled placeholder="Upload Image"/>
                <span className="input-group-append">
                <button className="file-upload-browse btn btn-info" type="button">Upload</button>
                </span>
            </div>
        </div> */}
        <div className="form-group">
            <label>Trademark certificate </label>
            <input type="file" name="trademark_certificate" className="file-upload-default" onChange={this.fileChangedHandler}/>
            <div className="input-group col-xs-12">
                <input type="text" className="form-control file-upload-info" disabled placeholder="Upload Image"/>
                <span className="input-group-append">
                <button className="file-upload-browse btn btn-info" type="button">Upload</button>
                </span>
            </div>
        </div>
        {/* <div className="form-group">
            <label>Power of attorney</label>
            <input type="file" name="power_attorney" className="file-upload-default" onChange={this.fileChangedHandler}/>
            <div className="input-group col-xs-12">
                <input type="text" className="form-control file-upload-info" disabled placeholder="Upload Image"/>
                <span className="input-group-append">
                <button className="file-upload-browse btn btn-info" type="button">Upload</button>
                </span>
            </div>
        </div> */}
        <div className="form-group">
            <label>Certificate of free sale</label>
            <input type="file" name="certificate_free_sale" className="file-upload-default" onChange={this.fileChangedHandler}/>
            <div className="input-group col-xs-12">
                <input type="text" className="form-control file-upload-info" disabled placeholder="Upload Image"/>
                <span className="input-group-append">
                <button className="file-upload-browse btn btn-info" type="button">Upload</button>
                </span>
            </div>
        </div>
        <button type="button" onClick={(e) => props.onClick(e)} className="btn btn-success mr-2">Create Product</button> 
    </div>
)