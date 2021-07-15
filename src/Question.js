import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import questions from './data';

const Question = ({title, info}) => {
 const [showInfo, setShowInfo] = useState()
  return <main>
    <header>
    <h4>{title}</h4>
    <button className='btn' onClick={()=> setShowInfo(!showInfo)}>
      {showInfo? <AiOutlineMinus/> : <AiOutlinePlus/>}
    </button>
  {showInfo &&<p> {info}</p>}
  </header>
</main>
};

export default Question;