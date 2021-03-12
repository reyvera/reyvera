import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <a href="mailto:mail@reyvera.com">
                                <div className="icon">
                                    <i className="pe-7s-mail"></i>
                                </div>
                                <h3>Mail Here</h3>
                                <p>mail@reyvera.com</p>
                                <br/>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <a href="https://goo.gl/maps/81VFjWycdiYmkonS9" target="_blank">
                                <div className="icon">
                                    <i className="pe-7s-map-2"></i>
                                </div>
                                <h3>Visit Here</h3>
                                <p>Visalia, CA <br/> 93291, USA</p>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="contact-info-box">
                                <a href="tel:+15596407382">
                                <div className="icon">
                                    <i className="pe-7s-call"></i>
                                </div>
                                <h3>Call Here</h3>
                                <p>+‪559 640 7382‬</p>
                                <br/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;