import React from 'react';

const divstyle = {
  color: "DodgerBlue",
  padding: "20px",
  border: "solid",
};

function List(props) {
  return (
    <div>
      <p  style={divstyle}>
      {props.name}
      </p>
    </div>
  )
}

export default List;