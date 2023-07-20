import React, { useState } from 'react';
import Cards from './Cards';
import data from "./../../helper/data";

const Main = () => {
  const [input,setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const filteredData = data.filter(item => item.name.toLowerCase().includes(input.toLowerCase()));

  return (
    <div>
       <div className="main-input"><input placeholder=" Search Player..." type="search" onChange={handleChange}/></div>
    <div className="container">

        {filteredData.map ((card, index)=>(
            <Cards {...card} key={index}/>
        ))}

    </div>
    </div>
  )
}

export default Main