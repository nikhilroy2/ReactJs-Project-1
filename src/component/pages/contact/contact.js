import React from 'react';
export default function Contactpage(){
    return (
        <div className="wrapper">
            <h2 className="text-center py-3">
                Contact Us
            </h2>
         <form action="">
             <div className="row">
                 <div className="col-sm-6 py-2">
                     <input type="text" className="w-100  pl-2 p-3 border border-info " placeholder="Your Name"/>
                 </div>
                 <div className="col-sm-6 py-2">
                     <input type="text" className="w-100  pl-2 p-3 border border-info " placeholder="Your Email"/>
                 </div>
                 <div className="col-sm-12 py-2">
                     <textarea placeholder="Description Here..." className=" border border-info w-100 py-2 px-2" name="" id="" cols="30" rows="10"></textarea>
                 </div>
                 <div className="col-sm-12 pb-2 text-center">
                     <button type="submit" className="btn btn-success rounded-0 ">Submit Now</button>
                 </div>
             </div>
         </form>
        </div>
    )
}