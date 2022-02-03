import React from 'react';
import List from './List.js';

function CowList(props) {
  // console.log('cowlist',props.cows)
  return (
    <div>
      {props.cows.map((cow)=>(
      <List key={cow.id} name={cow.name} description={cow.description}/>
      ))}
    </div>


  );
}

export default CowList;