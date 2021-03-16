import React, { Component } from 'react';
import Link from 'next/link';

class Services extends Component {
    render() {
        return (
            <div className="bg-fcfbfb ptb-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Services</h2>
                        <p>I offer a variety of services, depending on your need, and the my desire to help!</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one white-bg text-center radius-10">
                                <i className="pe-7s-global bg-13c4a1"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Embedded Software</a>
                                    </Link>
                                </h3>
                                <p>Creating amazing embedded software for all of the IoT needs. Robotics, Industrial Automation, etc...I can pretty much do it all.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one white-bg text-center radius-10">
                                <i className="pe-7s-display2 bg-6610f2"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Web Development</a>
                                    </Link>
                                </h3>
                                <p>Design custom, responsive, and user friendly websites for Blogs/eCommerce/informational. Wordpress, Squarespace, Drupal, free hosting.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one white-bg text-center radius-10">
                                <i className="pe-7s-phone bg-fc3549"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Mobile App Development</a>
                                    </Link>
                                </h3>
                                <p>Hybrid, Android/iOS...anything cool! I have fun working with technology, currently working on crypto apps with bartrr.io</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;