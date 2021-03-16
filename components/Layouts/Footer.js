import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {

        let currentYear = new Date().getFullYear();

        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="/">
                                        <a>
                                            <img src="/images/RV_Logo_Black.png" alt="image" width="60" />
                                        </a>
                                    </Link>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <ul className="social-links">
                                    <li>
                                        <Link href="/#">
                                            <a target="_blank" href="https://www.facebook.com/ravera87/"><i className="icofont-facebook"></i></a>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href="/#">
                                            <a target="_blank"><i className="icofont-twitter"></i></a>
                                        </Link>
                                    </li> */}
                                    <li>
                                        <Link href="/#">
                                            <a target="_blank" href="https://www.linkedin.com/in/reyvera"><i className="icofont-linkedin"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a target="_blank" href="https://www.instagram.com/reyvera2012/"><i className="icofont-instagram"></i></a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget ml-4 pl-5">
                                <h3>Explore</h3>

                                <ul className="list">
                                    <li>
                                        <Link href="/">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about">
                                            <a>About</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services">
                                            <a>Services</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/portfolio">
                                            <a>Portfolio</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget ml-4">
                                <h3>Quick Links</h3>

                                <ul className="list">
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact Me</a>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href="/pricing">
                                            <a>Pricing</a>
                                        </Link>
                                    </li> */}
                                    {/* <li>
                                        <Link href="/faq">
                                            <a>Faq</a>
                                        </Link>
                                    </li> */}
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-conditions">
                                            <a>Terms & Conditions</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Get in Touch</h3>

                                <ul className="get-in-touch">
                                    <li><i className="icofont-home"></i> Visalia, CA.</li>
                                    <br/>
                                    <li><a href="tel:+15596407382"><i className="icofont-live-support"></i> +‪559-640-7382</a></li>
                                    <li><a href="mailto:mail@reyvera.com"><i className="icofont-envelope"></i> mail@reyvera.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <p>Copyright &copy;{currentYear} Rey Vera. All Rights Reserved By <a href="https://reyvera.com" target="_blank">Rey Vera</a></p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;