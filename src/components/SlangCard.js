import React from 'react'

const SlangCard = (props) => {

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
    <div className="ui segment" style={{ borderColor: randomColor }}>
        <h3>Definition</h3>
          <p>
            {props.slangObj.definition}
          </p>
        <h3>Example</h3>
          <p>
            {props.slangObj.example}
          </p>
          <p>
            <strong>by</strong> {props.slangObj.author}
          </p>
    </div>
  )
}

export default SlangCard;
