import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

class About extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <section className="about-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="about-image">
                                <img src="/images/motorcycle_5.jpg" alt="image" className="rounded-10" />

                                {/* <div className="video-box">
                                    <Link href="/#play-video">
                                        <a
                                            onClick={e => {e.preventDefault(); this.openModal()}}
                                            className="video-btn"
                                        > 
                                            <i className="pe-7s-play"></i>
                                        </a>
                                    </Link>
                                </div> */}
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="about-content about-content-two">
                                <div className="section-title">
                                    <h2>About Me</h2>
                                    <p>Software engineer, musician, husband, and father all rolled into one. You can say I'm a super-hero!</p>
                                </div>

                                <div className="about-text">
                                    <h4>Who I Am</h4>
                                    <p>Most of my day consists of being a professional thinker - a contemplator. Considering problems we face, and solutions to overcome them. Maybe the answer is in tech, possibly in music, but almost always it is dependent on the desire to continue.</p>
                                </div>

                                <div className="about-text">
                                    <h4>The History</h4>
                                    <p>As a young boy, there was never anything safe from complete deconstruction, simply because of an insatiable desire to understand it. This desire continued, and carried me through life...</p>
                                    <p>Ended up with degrees in Engineering, Mathematics, and Philosophy (why?). The questions that plagued me seem to go deeper, and I needed to understand them...so the questions needed to be bigger.</p>
                                    <p>Today...I have a successful career in software/embedded development, I am a statup CTO of bartrr.io, and founder of Pandemic Guitar Co.</p>
                                    <p>The goal is to find meaning within this chaos!</p>
                                </div>

                                {/* <div className="about-text">
                                    <h4>The Mission</h4>
                                    <ul>
                                        <li>
                                            <i className="pe-7s-check"></i> 
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </li>
                                        <li>
                                            <i className="pe-7s-check"></i> 
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                        </li>
                                        <li>
                                            <i className="pe-7s-check"></i> 
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.
                                        </li>
                                    </ul>
                                </div> */}
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
            </section>
        );
    }
}

export default About;