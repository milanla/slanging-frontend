import React from 'react';

const NewSlangForm = () => {
  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="field">
          <input type="text" name="term" placeholder="Your slang" />
        </div>
        <div className="field">
          <input type="text" name="definition" placeholder="Definition" />
        </div>
        <div className="field">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default NewSlangForm;
