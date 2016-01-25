import Firebase from "firebase"
var FireRef = new Firebase("appname.firebaseio.com/questions")

export function addQuestion(title, id) {
  return {
    type: 'ADD_QUESTION',
    title: title,
    id: id
  }
}

export function submitQuestion(title) {
  return dispatch => {
    var newQuestion = FireRef.push({title: title})
    .then( ref => {
      var newId = ref.key()
      dispatch(addQuestion(title, newId))
    })
  }
}

export function initalData(store) {
  FireRef.on('value', (data) => {
    console.log(data.val(), data.key())
    console.log(data.forEach((question) => {
      store.dispatch(addQuestion(question.val().title, question.key()))
    }))
    // data.val().( (question) => {
    // })
  })
}
