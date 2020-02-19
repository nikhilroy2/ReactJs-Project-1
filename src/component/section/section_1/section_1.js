import React from 'react';
import './section_1.css'

export default function Section_1(){
    return(
        <section className="section_1  pb-3">
            <div className="row">
                <div className="col-sm-6 col-md-4 mb-5 mb-sm-0">
                    <div className="card text-left border-0 px-2">
                      <img className="card-img-top w-50 mx-auto mx-sm-0  my-2" src={require("./img/002-choir-b.png")} alt=""/>
                      <div className="card-body p-2">
                        <div className="card-title">
                            <h5><a href="#" className="text-dark">Worship</a></h5>
                        <p className="text-primary">What to Expect</p>
                        </div>

                      <span className="d-inline-block pr-5  border-bottom border-dark"></span>
                        <p className="card-text pt-3">
                        When we speak of “worship,” we are referring to the life of our congregation: attending worship services, creating music, honoring life.
                        </p>
                      </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 mb-5 mb-sm-0">
                    <div className="card text-left border-0 px-2">
                      <img className="card-img-top w-50 mx-auto mx-sm-0  my-2" src={require("./img/005-child-b.png")} alt=""/>
                      <div className="card-body p-2">
                        <div className="card-title">
                            <h5>
                            <a href="#" className="text-dark">Connect</a>

                            </h5>
                        <p className="text-primary">Contacts and Members</p>
                        </div>
                      <span className="d-inline-block pr-5  border-bottom border-dark"></span>

                        <p className="card-text pt-3">
                        Church life means faith, relationship, discipline, service, responsibilities of church leaders and members, and much more.
                        </p>
                      </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 mb-5 mb-sm-0">
                    <div className="card text-left border-0 px-2">
                      <img className="card-img-top w-50 mx-auto mx-sm-0  my-2" src={require("./img/006-church-b.png")} alt=""/>
                      <div className="card-body p-2">
                        <div className="card-title">
                            <h5>
                            <a href="#" className="text-dark">God's Love</a>
                            </h5>
                        <p className="text-primary">Beliefs and History</p>
                        </div>
                      <span className="d-inline-block pr-5  border-bottom border-dark"></span>

                        <p className="card-text pt-3">
                        Church life means faith, relationship, discipline, service, responsibilities of church leaders and members, and much more.
                        </p>
                      </div>
                    </div>
                </div>
            </div>
            <Section_1_child/>
        </section>
    )
}

function Section_1_child(){
    return (
        <div className="section_1_child row no-gutters text-light p-3 mt-3 rounded-lg shadow-lg">
            <div className="col-12">
                <h5>
                We gather for inspiration, fellowship, and guidance in the meaning of Christian discipleship.
                </h5>
                <p className="text-white-50">
                We share God’s love in various ways in our homes, places of work, local community, and throughout the world.
                </p>
            </div>
        </div>
    )
}