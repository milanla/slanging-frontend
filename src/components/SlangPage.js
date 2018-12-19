import React from 'react'

const SlangPage = (props) => {
  // console.log(props.slangObj)
if (props.searchText === '') {
  return <h3>Search some slang</h3>
} else if (props.slangObj.status) {
    return  <h3>No slang found</h3>
} else {
    return (
      <div>
        <h1>{props.slangObj.term.toUpperCase()}</h1>
          <h3>Definition</h3>
            <p>
              {props.slangObj.definition}
            </p>
          <h3>Example</h3>
            <p>
              {props.slangObj.example}
            </p>
      </div>
  )
}
}

export default SlangPage;
