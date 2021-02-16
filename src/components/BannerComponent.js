import React, { Component } from 'react'

class Banner extends Component {
    render() {
        return (
                <div className="container-fluid">
                    <div className="row row-content">
                        <div className="col- lg-12 col-sm-12">
                            <div>
                                <img className="px-2 py-2" src="/assets/images/insidearea.jpg" height="250" width="250" alt="Inside eating area"></img>
                                <img className="px-2 py-2" src="/assets/images/patio.jpg" height="250" width="250" alt="Patio"></img>
                                <img className="px-2 py-2" src="/assets/images/deck.jpg" height="250" width="250" alt="Deck"></img>
                                <h3>Coming Soon</h3>
                                <p className="d-none d-sm-block">Join us with your four-legged friends for some beers and barks!</p>
                            </div>
                        </div>  
                    </div> 
                </div> 
        );
    }
}

export default Banner;