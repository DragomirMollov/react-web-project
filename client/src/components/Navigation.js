import { Link } from 'react-router-dom';
import logo from '../images/logo-white.png';
import '../styles/Navigation.scss';

export const Navigation = () =>  {
        
    return(
        <nav className={'navigation navbar navbar-expand-lg'}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} className='logo' alt="logo"/>
                </Link>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="material-icons">menu</i>
                </button>

                <div className="collapse navbar-collapse navigation-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="btn btn-outline-primary">
                                <span>
                                    Home
                                </span>
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to="/about" className="btn btn-outline-primary">
                                <span>
                                    About Us
                                </span>
                            </Link>
                        </li>
                    
                        <li className="nav-item">

                            <Link to="/create/ad" className="btn btn-outline-primary d-flex">
                                {/* <i className="material-icons">add</i> */}
                                
                                <span>
                                    Place Ad
                                </span>
                            </Link>

                            {/* <Link className="nav-link" to="/sign-up">Sign Up</Link> */}
                        </li>

                        <li className="nav-item">
                            <div className="dropdown">
                                <button className="nav-link dropdown-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" data-target="#dropdownMenu" aria-haspopup="true" aria-expanded="false">
                                    <span>
                                        My profile
                                    </span>
                                </button>

                                
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" id="dropdownMenu">
                                    <Link className="dropdown-item" to="/login">
                                        Login
                                    </Link>
                                    <Link className="dropdown-item" to="/register">
                                        Register
                                    </Link>
                                    <Link className="dropdown-item" to="/">
                                        Logout
                                    </Link>
                                    <Link className="dropdown-item" to="/profile">
                                        My Profile
                                    </Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};