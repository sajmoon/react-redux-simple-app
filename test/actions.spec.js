import expect from 'expect'
import * as actions from '../src/actions'

describe('actions', () => {
  it('add a question', () => {
    const title = 'My title'
    const newId = 'id1'
    const expectedAction = {
      type: 'ADD_QUESTION',
      title: 'My title',
      id: 'id1'
    }

    expect(actions.addQuestion(title, newId)).toEqual(expectedAction)
  })
})
