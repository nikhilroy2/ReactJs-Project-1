import React from 'react';
import './section_2.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';




export default function Section_2() {
    return (

        <section className="section_2 ">
            <div className="row ">
                <div className="col-sm-6 col-md-4">
                    READ AND STAY CALM WITH OUR
                </div>
            </div>
            <span className="px-5 d-inline-block border-top border-dark"></span>
            <h2 className="py-3">Latest Sermons</h2>
            <div className="row ">
                <div className="col-sm-6 col-md-4 ">
                    <div className="card text-black-50 bg_card_white_f7">
                        <img  className="card-img-top" src="https://cdn.pixabay.com/photo/2013/05/11/08/28/person-110305__340.jpg" alt="" />
                        <div className="card-body">
                            <h4 className="card-title">


                                <Link target="_blank" className="text-black-50" to="/blog_post_1">
                                    The Legacy We Will Leave Behind
                            </Link>

                            </h4>
                            <p className="card-text">
                                FAITH • YOURSELF

                            </p>
                            <p className="card-text">
                                SPEAKER: MANNY SALVA CRUZ
                            </p>
                            <h5>
                                Christian baptism is the immersion of the believer in water into the name of the triune God.
                            </h5>
                            

                            <Link variant="contained" target="_blank"
                                className=" outline-none text-white d-inline-block "
                                to="/blog_post_1">
                                 <Button style={{outline: 'none', }} variant="contained" color="primary"> Click Me</Button>
                            </Link> 
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 ">
                    <div className="card text-black-50 bg_card_white_f7">
                        <img className="card-img-top" src="https://cdn.pixabay.com/photo/2015/04/15/09/47/person-723557_960_720.jpg" alt="" />
                        <div className="card-body">
                            <h4 className="card-title"><Link target="_blank" className="text-black-50" to="/blog_post_2">
                                God Wants To Do A New Thing In Your Life
                            </Link></h4>
                            <p className="card-text">
                                FAITH • YOURSELF

                            </p>
                            <p className="card-text">
                                SPEAKER: MANNY SALVA CRUZ
                            </p>
                            <h5>
                                Forget the former things; do not dwell on past. I’m doing a new thing! Now it springs up; do you not perceive it?
                            </h5>


                           

                            <Link variant="contained" target="_blank"
                                className=" outline-none text-white d-inline-block "
                                to="/blog_post_2">
                                 <Button style={{outline: 'none', }} variant="contained" color="primary"> Click Me</Button>
                            </Link> 
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 ">
                    <div className="card text-black-50 bg_card_white_f7">
                        <img className="card-img-top" src="https://cdn.pixabay.com/photo/2020/01/23/06/42/family-4787016_960_720.jpg" alt="" />
                        <div className="card-body">
                            <h4 className="card-title"><Link target="_blank" className="text-black-50" to="/blog_post_3">
                                The Power Of Praise And Worship
                            </Link></h4>
                            <p className="card-text">
                                FAITH • YOURSELF

                            </p>
                            <p className="card-text">
                                SPEAKER: MANNY SALVA CRUZ
                            </p>
                            <h5>
                                About the power of praise and worship and highlights the following victory, breakthrough and freedom.
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

