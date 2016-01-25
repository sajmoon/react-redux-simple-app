import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { reduxForm } from 'redux-form'

class QuestionForm extends React.Component {
  render() {
    const { dispatch, fields: {title} } = this.props

    const submitQuestion = () => {
      console.log("submitting question")
      dispatch(actions.submitQuestion(title.value))
    }

    return (
      <div>
        <h2>Add a new question</h2>
        <label> Question title</label>
        <input {...title} />
        <button onClick={submitQuestion}>Submit</button>
      </div>
    )
  }
}

QuestionForm = reduxForm({
  form: 'question',
  fields: ['title']
})(QuestionForm)

export default connect()(QuestionForm)
