import React from 'react';

const SlangCard = (props) => {
  // console.log(props)

  const colors = [
    "#ffc94c",
    "#ffb758",
    "#ffa767",
    "#ff9976",
    "#ff8e85",
    "#F4847B",
    "#FFC7C7",
  ]

  const randomColor = colors[Math.floor(Math.random()*colors.length)]

  return (
    <div className="slangCard" style={{color: randomColor}}>
      {props.slang.term}
    </div>
  )
}
export default SlangCard;
