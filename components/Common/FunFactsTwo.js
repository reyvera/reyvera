import React, { Component } from 'react';
import Link from 'next/link';

class FunFactsTwo extends Component {
    render() {
        return (
            <section className="funfacts-area ptb-100 bg-fcfbfb">
                <div className="container">
                    <div className="section-title">
                        <h2>I always try to understand users expectation</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="funfact">
                                <i className="icofont-checked"></i>
                                <h3>423+</h3>
                                <p>Completed Websites</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="funfact">
                                <i className="icofont-ui-love"></i>
                                <h3>30+</h3>
                                <p>Apps Developed</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="funfact">
                                <i className="icofont-tasks"></i>
                                <h3>284+</h3>
                                <p>Embedded Projects</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="funfact">
                                <i className="icofont-win-trophy"></i>
                                <h3>4+</h3>
                                <p>Guitars Built</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-cta-box">
                        <h3>Have any questions about me?</h3>
                        <p>Don't hesitate to get in touch</p>

                        <Link href="/contact">
                            <a className="btn btn-primary">Contact Me</a>
                        </Link>
                    </div>

                    <div className="map-bg">
                        <img src="/images/map.png" alt="map" />
                    </div>
                </div>
            </section>
        );
    }
}

export default FunFactsTwo;