import React from 'react';
import QuestionForm from './QuestionForm'
import QuestionList from './QuestionList'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Questions</h1>
        <QuestionForm />
        <QuestionList />
      </div>
    )
  }
}
