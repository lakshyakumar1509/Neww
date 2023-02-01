import React, { Component } from 'react';
import "../styles/payby.css";
import {Link, redirect} from 'react-router-dom';
import {Navigate} from 'react-router-dom';

class Payby extends Component {
render() {
  return (
   <div className='paybybg'>
   <div className='bxs1'>
   <div className='bxs2'><div className='pp'>Payment Method</div></div>
   <div className='so'>
    <div className='oc1'>
    <Link to="/cod"><button className="b"></button></Link>
    <label className='t'>&emsp;Cash on Delivery</label></div><br></br>
    
    <div className='oc3'>
        <Link to="/dc"> <button className='b'></button></Link>
    <label className='t'>&emsp;Pay by Debit Card</label></div><br></br>
    <div className='oc4'>
        <Link to="/nb"><button className='b'></button></Link>
    <label className='t'>&emsp;Pay by net banking</label></div><br></br></div>
   </div>
   </div>
  );
}
}

export default Payby;