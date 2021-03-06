import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import BlogLeftSidebar from '../components/Blog/BlogLeftSidebar';
import Footer from '../components/Layouts/Footer';

class Blog3 extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="Blog Left Sidebar" 
                />  
                <BlogLeftSidebar />
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Blog3;