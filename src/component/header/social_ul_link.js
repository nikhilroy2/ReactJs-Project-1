import React from 'react';

export default function Social_ul_link(){
    const aStyle = {
        borderRadius: '40px'
    }
    return (
        <ul className="nav justify-content-end pr-3">
                        <li className="nav-item">
                            <a style={aStyle} className="nav-link p-2 py-1 text-white nav_link_hover facebook font_15 active" href="#">
                            <i className="fab fa-facebook-f pr-2"></i>
                                FACEBOOK</a>
                        </li>
                        <li className="nav-item">
                            <a style={aStyle} className="nav-link p-2 py-1 text-white nav_link_hover instagram font_15" href="#">
                            <i className="fab fa-instagram pr-2"></i>
                                INSTAGRAM</a>
                        </li>
                        <li className="nav-item">
                        <a style={aStyle} className="nav-link p-2  py-1 text-white  nav_link_hover youtube font_15" href="#">
                         <i className="fab fa-youtube   pr-2  "></i>
                                YOUTUBE</a>
                        </li>
                    </ul>
    )
}