import React from 'react';
import list from '../data';
import '../styles/lunchmate.css';
import Cards from './cards';


const Lunchmate = ({handleClick}) => {
  return (
    <>
    <section className="title">
      Hashtag
    </section>
    <section className='menu'>
      <br></br>
      Menu list
      <br></br>
      <br></br>
    </section>
    <section>
        {
            list.map((item)=>(
             
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
    </>
  )
}

export default Lunchmate