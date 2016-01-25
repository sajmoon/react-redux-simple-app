const initalState = [{
    id: 1,
    title: "First Question"
  }]

function reducers(state = initalState, action) {
  if (action.type == 'ADD_QUESTION') {
    return [
        ...state,
        {
          id: state.reduce((maxId, question) => Math.max(question.id, maxId), -1) + 1,
          title: action.title
        }
      ]
  }

  return state
}

export default reducers
