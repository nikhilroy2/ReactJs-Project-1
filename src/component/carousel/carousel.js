import React from 'react';
import './carousel.css'

export default function Carousel(){
    const carouselStyle = {
        minHeight: '400px'
    }
    return (
        <div style={carouselStyle} className="jumbotron jumbotron-fluid bg_img_carousel text-white-50">
            <div className="container">
                <TextTypeEffect/>
                <span className="px-5 border-bottom border-dark"></span>

                <p className="lead mt-3">The Bible is the inspired, inerrant, living, and all-sufficient Word of God. God’s Word is the primary means by which the elect are united to the risen Christ and thereafter, in Him, nourished unto eternal life.</p>
                <hr className="my-2"/>
            </div>
        </div>
    )
}
class TextTypeEffect extends React.Component{
    constructor(){
        super();
        this.state = {
            typeText : "od's love, and forgiveness for all.",
            count: 0,
            txtRun: true,
            txtResult: ''
        }
    }
    componentDidMount(){
        const mystate = {...this.state};
        setInterval(()=> {
        if(mystate.count > Number(mystate.typeText.length + 30)){
            mystate.count--;
            mystate.txtRun = false;
        } 
        else if(mystate.count < 0) {
            mystate.count++;
            mystate.txtRun = true;
        }
        this.setState({
            txtResult: mystate.typeText.slice(0, mystate.count)
        });
        mystate.count+= mystate.txtRun ? 1 : -1;
        },30)
    }
    
    render(){
        return (
            <h1 className="display-5 text-center carousel_jumbo">
                G{this.state.txtResult}
                </h1>

        )
    }
}