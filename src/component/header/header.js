import React from 'react';
import './header.css';
import Social_ul_link from './social_ul_link';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
class Header extends React.Component {

    render() {

        return (
            <header>
                <Nav />
            </header>
        )
    }
}

// Navbar

function Nav() {
    return (
        <nav >
            <Top_Nav />
            <Bottom_Nav />
        </nav>
    )
}




function Top_Nav() {
    return (
        <div className="top_nav d-md-flex row no-gutters nav_bg text-white">
            <div className="col-12 col-md-6 align-self-center ">
                <ul className="nav justify-content-center justify-content-md-end py-3 p-md-0 vertical-align-center ">
                    <li className="nav-item">
                        <i className="fa fa-envelope-open pr-2" aria-hidden="true"></i>

                        hello@themnific.com
                        </li>
                    <span className=" px-2 ">|</span>
                    <li className="nav-item  ">
                        <i className="fa fa-phone pr-2" aria-hidden="true"></i>
                        878.331.9559
                        </li>

                </ul>
            </div>
            <div className="col-sm-6 d-none d-md-block ">
                <Social_ul_link />
            </div>
        </div>


    )
}


function Bottom_Nav() {
    const bottom_nav_style = {
        background: '#041a2f'
    }
    return (
        <div className="bottom_nav text-light" style={bottom_nav_style}>
            <nav className="nav justify-content-start">
                <Link to="/" className="nav-link text-light active cursor_pointer"  >

                    <Button variant="contained"  color="primary">
                        Home
      </Button>

                </Link>
                <Link to="/blog" className="nav-link text-light cursor_pointer "  >

                <Button variant="contained"  color="primary">
        Blog
      </Button>
                </Link>
                <Link to="/about" className="nav-link text-light cursor_pointer  "  >
                <Button variant="contained"  color="primary">
        About
      </Button> 
                </Link>
                <Link to="/contact" className="nav-link text-light cursor_pointer  " >
                <Button variant="contained"  color="primary">
        Contact Us
      </Button>  
                </Link>
            </nav>
        </div>
    )
}
export default Header;