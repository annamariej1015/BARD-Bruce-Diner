import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
            <div className="container border-top border-bottom">
                <div className="row row-content">
                    <div className="col">
                        <h2>About Us</h2>
                    </div>
                </div>

                <div className="row row-content"> 
                    <div className="col-6">
                        <p>Welcome to Bruce's Diner, the premier place to play with your best friends. We are an off-leash dog diner that caters to both two-legged and four-legged friends alike – where pups and peeps come to have fun! Come on in. Have a seat. And stay for a while. Become a VIP member and enjoy the benefits of Bruce's community every day!</p>
                    </div>
                    <div className="col-6 pb-5">
                        <img src="/assets/images/entrance.jpg" height="250" width="250" alt="About Us" />
                    </div>
                </div>
            </div>
        )
    }
}
export default About;