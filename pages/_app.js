import '../public/css/bootstrap.min.css';
import '../public/css/animate.min.css';
import '../public/css/icofont.min.css';
import '../public/css/pe-icon-7-stroke.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-image-lightbox/style.css';
// import '../public/css/style.css';
import '../public/css/style.scss';
import '../public/css/responsive.css';

import App from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
// import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';

export default class MyApp extends App {
    // Preloader
    state = {
        loading: true
    };
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }
    
    render () {
        const { Component, pageProps } = this.props

        return (
            <React.Fragment>
                <DefaultSeo
                    title="Rey Vera - Software Engineer, musician, husband, and father...You can say I'm a super-hero!"
                    description="Rey Vera - Software Engineer, musician, husband, and father...You can say I'm a super-hero!"
                    openGraph={{
                        type: 'website',
                        locale: 'en_IE',
                        url: 'https://reyvera.com/',
                        site_name: 'Rey Vera - Software Engineer, musician, husband, and father...You can say I\'m a super-hero!',
                    }}
                />

                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                </Head>

                <Component {...pageProps} />
                
                {/* Preloader */}
                {/* <Loader loading={this.state.loading} /> */}

                {/* Go Top Button */}
                <GoTop />
            </React.Fragment>
        );
    }
}