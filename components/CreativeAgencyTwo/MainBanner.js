import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import Particles from 'react-particles-js';

const particleOpt = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#fff'
        },
        size: {
            value: 3
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            }
        }
    }
}

class MainBanner extends Component {
    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <React.Fragment>
                <div className="hero-banner overly hero-bg1">
                    <div id="particles-js">
                        <Particles 
                            params={{...particleOpt}}
                        />
                    </div> 

                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="main-banner-content text-center">
                                    <span>The mind of</span>

                                    <h1>Rey Vera</h1>
                                        
                                    <p>uploaded to the internet.</p>
                                
                                    <Link href="/contact">
                                        <a className="btn btn-primary">Get Started</a>
                                    </Link>

                                    {/* <Link href="/#play-video">
                                        <a
                                            onClick={e => {e.preventDefault(); this.openModal()}}
                                            className="btn btn-secondary"
                                        > 
                                            <i className="icofont-ui-play"></i> How it works
                                        </a>
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* If you want to change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='_ysd-zHamjk' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </React.Fragment>
        );
    }
}

export default MainBanner;