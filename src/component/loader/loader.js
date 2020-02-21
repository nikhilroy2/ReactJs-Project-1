import React from 'react';
import './loader.css';
import Loading from '../image/loading.png'


export default class extends React.Component{
    constructor(){
        super();
        this.state = {
            display: 'flex'
        }
        this.documentLoader = this.documentLoader
    }
  componentDidMount(){
    
     setTimeout(()=> {
        this.setState({
            display: 'none'
        })
     }, 5000)
      
     
     
  }

  
   
    render(){
       
        return (
            <div  style={{display: this.state.display}} className="loader loaderAnimate fixed-top bg-dark  justify-content-center align-items-center" 
           

            >
                <img src={Loading} alt=""/>
        </div>
        )
    }
}