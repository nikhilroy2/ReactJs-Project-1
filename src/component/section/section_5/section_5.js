import React from 'react';
import './section_5.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

export default function Section_5() {
    return (
        <section className="section_5">
            <div className="row p-5 justify-content-end">
                <div className="col-sm-8">
                    <div className="card-deck ">
                        <div className="card text-white-50 bg-dark">


                            <div className="">
                                <Paper elevation={3} >

                                    <div className="card-body text-white-50">
                                        <h4 className="card-title">A Christian should live for the glory of God and the well-being of others.</h4>
                                        <p className="card-text">
                                            That his conduct should be blameless before the world; that he should be a faithful steward of his possessions; and that he should seek to realize for himself and others the full stature of maturity in Christ.
                                </p>
                                    </div>


                                </Paper>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}