import React from 'react';
import Social_ul_link from '../header/social_ul_link';

export default function Footer(){
    return (
        <footer>
        <div className="row no-gutters pt-3 bg-dark text-light">
            <div className="col-sm-6">
                <Social_ul_link/>
            </div>
            <div className="col-sm-6 text-right pr-1 align-self-center">
                <a href="#" className="text-light px-2">EVENT</a>
                <a href="#" className="text-light px-2">NEWS</a>
                <a href="#" className="text-light px-2">SERMONS</a>
                <a href="#" className="text-light px-2">GET INVOICED</a>
            </div>
            <div className="col-12 py-3 border-top border-light text-center">
                <p className="m-0 p-0">Copyright &copy; 2020 | Developed Nikhil Roy (ReactJs Project)</p>
            </div>
        </div>

    </footer>
    )
}