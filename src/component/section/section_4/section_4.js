import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default function Section_4(){
    return (
        <section className="section_4">
            <div className="row no-gutters flex-column align-items-center">
                <p>
                READ AND STAY CALM WITH OUR
                </p>
                <span className="border-top border-dark px-5">

                </span>
                <h2 className="py-4">
                Recent News
                </h2>
            </div>
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <div className="card text-black-50 bg_card_white_f7">
                      <img className="card-img-top" src="https://cdn.pixabay.com/photo/2020/01/23/06/41/family-4787014_960_720.jpg" alt=""/>
                       <div className="card-body">
                            <h4 className="card-title">
                                
                                <Link target="_blank" className="text-black-50" to="/news_post_1">
                            Why Read The Old Testament?
                            </Link></h4>
                            
                            <S4_subTitle/>
                            <h5 className="mt-2">
                            However hand participate close by, the underhanded will not be unpunished: yet the seed of the exemplary will be conveyed.
                            </h5>
                            <Link variant="contained" target="_blank"
                                className=" outline-none text-white d-inline-block "
                                to="/blog_post_1">
                                 <Button style={{outline: 'none', }} variant="contained" color="primary"> Click Me</Button>
                            </Link> 
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="card text-black-50 bg_card_white_f7">
                      <img className="card-img-top" src="https://cdn.pixabay.com/photo/2017/04/26/23/46/morning-2264051_960_720.jpg" alt=""/>
                       <div className="card-body">
                            <h4 className="card-title"><Link
                            target="_blank" className="text-black-50" to="/news_post_2">
                            Everyone Is Going Somewhere!
                            </Link></h4>
                           <S4_subTitle/>
                            
                            <h5 className="mt-2">
                            However hand participate close by, the underhanded will not be unpunished: yet the seed of the exemplary will be conveyed.
                            </h5>
                            <Link variant="contained" target="_blank"
                                className=" outline-none text-white d-inline-block "
                                to="/blog_post_2">
                                 <Button style={{outline: 'none', }} variant="contained" color="primary"> Click Me</Button>
                            </Link> 
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="card text-black-50 bg_card_white_f7">
                      <img className="card-img-top" src="https://cdn.pixabay.com/photo/2017/07/09/19/08/children-2487845_960_720.jpg" alt=""/>
                       <div className="card-body">
                            <h4 className="card-title">
                                <Link target="_blank" className="text-black-50"
                                 to="/news_post_3">
                            God Honors Those Who Honor Him
                            </Link>
                            
                            </h4>
                           <S4_subTitle/>
                            <h5 className="mt-2">
                            Whatever occurs, the Lord has utilized this whole procedure to cultivate further solidarity, love, support, and duty as an assemblage.
                            </h5>
                          

                            <Link variant="contained" target="_blank"
                                className=" outline-none text-white d-inline-block "
                                to="/blog_post_3">
                                 <Button style={{outline: 'none', }} variant="contained" color="primary"> Click Me</Button>
                            </Link> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
function S4_subTitle(){
    return (
        <>

<p 
                            className="card-text py-1 m-0">
                           
                           <i className="fas fa-clock pr-2    "></i>
                           
                           <small>
                             OCT 11•

                           </small>

                            </p>
                            <p className="card-text py-1 m-0">
                                <i className="fas fa-file  pr-2  "></i>
                                <small>
                            DOCTRINE FOR LIFE

                                </small>
                            </p>

        </>
    )
}