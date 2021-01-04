import React from "react";
import "./card-list.css"
import {Card} from '../card/card'


function CardList(props){
    return (<div className='card-list'>{props.monsters.map(monster => 
    <Card monster={monster}/>)}</div>)
}

export {CardList}
