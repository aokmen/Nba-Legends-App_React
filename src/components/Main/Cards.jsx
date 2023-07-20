import React, { useState } from 'react'

const Cards = ({img, name, statistics}) => {

    const [show, setShow] = useState(true);
    const handleClick = ()=>{setShow(!show);}
    


  return (
    <div className="cards" onClick={handleClick}>

        {show ? (<img src={img} alt="" />) : 
        
        (<div className="details"><ul>{statistics.map ((veri, index)=>{return <li key={index}>🏀{veri}</li>})}</ul>
        </div>)}
    
        <div className="card-footer names">
            <h4>{name}</h4>   
        </div>
        
    </div>
  )
}

export default Cards