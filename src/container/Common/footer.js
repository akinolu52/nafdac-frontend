import React from 'react'

const Footer = () => (
    <footer className="footer">
        <div className="container-fluid clearfix">
            <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
            Copyright &copy; {new Date().getFullYear()} All rights reserved.</span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
            made with <i className="mdi mdi-heart text-danger"></i>
            </span>
        </div>
    </footer>
)
   
export default Footer 