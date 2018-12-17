import React from 'react';

const SlangCard = (props) => {
  console.log(props)

  return (
    <div className="slangCard">
      <h2> {props.slang.term.toUpperCase()} </h2>
    </div>
  )
}

export default SlangCard;
