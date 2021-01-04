import React from "react";
import './card.css'

function Card({monster}){
    return (
        <div className='card-container' key={monster.id}>
        <img alt="monster" src={`https://robohash.org/${monster.id}?set=set2`}/>
    <h2>{monster.name}</h2>
    <h2>{monster.email}</h2>
    </div>)
  }

export {Card}