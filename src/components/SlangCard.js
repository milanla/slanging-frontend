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

  const author = () => {
    if (props.slangObj.author) {
      return <p><strong>by&nbsp;&nbsp;</strong>{props.slangObj.author}</p>
    }
  }

  const deleteButton = () => {
    if (!props.slangObj.author) {
      return (
        <i className="trash alternate icon"></i>
      )
    }
  }

  return (
    <div className="ui teal card" style={{ borderColor: randomColor }}>
      <div className="content">
        <i className="right floated like icon"></i>
        <div className="header">{props.slangObj.term.toUpperCase()}</div>
      </div>
      <div className="content">
        <h3 className="ui sub header">Definition</h3>
          <p>
            {props.slangObj.definition}
          </p>
        <h3 className="ui sub header">Example</h3>
          <p>
            {props.slangObj.example}
          </p>
        </div>
        <div className="extra content">
          {author()}
          {deleteButton()}
        </div>
    </div>
  )
}

export default SlangCard;
