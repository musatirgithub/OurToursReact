import React, { useState } from 'react';

const Tour = ({id, name, info, image, price, handleRemove}) => {
  const [less, setLess] = useState(true);

  return (
  <article className='single-tour'>
    <img src={image} alt={name} />
    <footer>
    <div className="tour-info">
    <h4>{name}</h4>
    <h4 className='tour-price'>${price}</h4>
    </div>
    <p>{less ? info.slice(0,200) + "...":info}<button onClick={()=>setLess(!less)}>{less ? "Show more":"Show less"}</button></p>
    <button className='delete-btn' onClick={()=>handleRemove(id)} >not interested</button>
    </footer>
  </article>
    );
};

export default Tour;
