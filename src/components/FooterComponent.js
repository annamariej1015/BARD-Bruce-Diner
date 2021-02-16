import React from 'react';


function Footer(props) {
    return (
        <footer  className="site-footer" >
            <div className="container-fluid">
                <div className="row bg-warning">
                    
                    <div className="col-6 col-sm-3 offset-1 text-dark px-3">
                        <ol className="list-unstyled px-5">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">VIPList</a></li>
                        </ol>  
                    </div> 

                    
                    
                    <div className="col-6 col-sm-3 offset-1 pt-3">
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a> {' '}
                        <a className="btn btn-social-icon btn-facebook" href="/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="/"><i className="fa fa-twitter" /></a>{' '}
                    </div>

                </div>
            </div>
        </footer>
    );
}
export default Footer;