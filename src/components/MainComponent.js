import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Banner from './BannerComponent';
import About from './AboutComponent';
import VipForm from './FormComponent';


class Main extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <div>
                <Header />
                <Banner />
                <About />
                <VipForm />
                <Footer />
            </div>

        );
    }
}
export default Main;