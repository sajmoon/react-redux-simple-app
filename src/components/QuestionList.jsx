import React from 'react'
import { connect } from 'react-redux'

class QuestionList extends React.Component {
  render() {
    const { questions } = this.props
    return (
      <div>
        <h2>List all questions</h2>
        <span>Number of questions: { questions.length }</span>
        <ul>
          { questions.map((question, index) =>
            <li key={index}>{question.title}</li>
          )}
        </ul>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    questions: state.questions
  }
}

export default connect(mapStateToProps)(QuestionList)
