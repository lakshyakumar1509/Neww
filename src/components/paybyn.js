import React, { Component } from 'react';
import "../styles/paybyn.css";
class Paybyn extends Component { 
render() {
 
  return (
   <div className='paybybg'>
   <div className='bxs1'>
   <div className='bxs2'><div className='pp'>Payment Method</div></div>
   <div className='so'>
    <div className='oc1'><input className='oc1sb' type="radio" name="0c1"></input><label>State Bank of India</label></div>
    <label></label><br></br>
    <div className='oc2'><input className='oc1 ic' type="radio" name="0c1" ></input>
    <label>ICIC</label></div><br></br><label></label><br></br>
    <div className='bt1'><button >next</button></div>
   </div>
   </div>
   </div>
   
  );
}
}

export default Paybyn;