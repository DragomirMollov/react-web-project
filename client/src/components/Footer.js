
import '../styles/Footer.scss';
import '../styles/List.scss';
import { Link } from 'react-router-dom';
//import Subscribe from './Subscribe';

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__content">
                    <div className="row align-items-top">
                        <div className="col-12 col-sm-12 col-md-3">
                            <h5 className="footer__title">
                                About
                            </h5>
                            
                            <div className="footer__entry">
                                <p>
                                    Here you can find interesting ads and easily contact the seller. If you want to buy something - you can find attractive offers at lower prices in the store. If you want to sell something - you can add an ad easily and for free and sell just about anything you want. Buy and sell at DailySale! 
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-2">
                            <h5 className="footer__title">
                                Our Service
                            </h5>
                            
                            <ul className="list list-links">
                                <li>
                                    <Link to='team'>
                                        Our Team
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/contacts'>
                                        Contact Us
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/about'>
                                        About
                                    </Link>
                                </li>


                                <li>
                                    <Link to='team'>
                                        Services
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/privacy-policy'>
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                        {/* <div className="col-12 col-md-4 col-sm-12">
                            <h5 className="footer__title">
                                Subscribe
                            </h5>

                            <Subscribe />
                        </div> */}
                    </div>
                </div>
                
                <div className="row">
                    <p className='copyright'>
                        Copyright &copy; { new Date().getFullYear() } 
                            
                        All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}