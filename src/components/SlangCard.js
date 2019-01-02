import React from 'react';
import { connect } from 'react-redux';
import { handleDeleteSlang } from '../store/actions/slangActions';
import { handleLikeSlang } from '../store/actions/slangActions'

const SlangCard = (props) => {

  const colors = [
    "ui red card",
    "ui orange card",
    "ui yellow card",
    "ui olive card",
    "ui green card",
    "ui teal card",
    "ui blue card",
    "ui pink card"
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
        <i className="trash alternate icon" onClick={(e) => handleDelete(e)}></i>
      )
    }
  }

  const likeButton = () => {
    if (props.slangObj.author) {
      return (
        <i className="right floated like icon" onClick={(e) => handleLike(e)}></i>
      )
    }
  }

  const handleDelete = (e) => {
    e.preventDefault()
    props.deleteHandler(props.slangObj)
  }

  const handleLike = (e) => {
    e.preventDefault()
    console.log("in handleLike")
    props.likeHandler(props.slangObj, props.user)
  }

  return (
    <div className={randomColor}>
      <div className="content">
        {likeButton()}
        <div className="header">{props.slangObj.term ? props.slangObj.term.toUpperCase() : null}</div>
      </div>
      <div className="content">
        <h3 className="ui sub header">Definition</h3>
          <p>
            {props.slangObj.term ? props.slangObj.definition : null}
          </p>
        <h3 className="ui sub header">Example</h3>
          <p>
            {props.slangObj.term ? props.slangObj.example : null}
          </p>
        </div>
        <div className="extra content">
          {author()}
          {deleteButton()}
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteHandler: (slang) => dispatch(() => {
      handleDeleteSlang(dispatch, slang)
    }),
    likeHandler: (slang, user) => dispatch(() => {
      handleLikeSlang(dispatch, slang, user)
    })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SlangCard);
