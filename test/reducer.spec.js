import expect from 'expect'
import questions from '../src/reducers.js'
import * as actions from '../src/actions'

describe('basic reducer', () => {
  it('should return inital state', () => {
    expect(questions(undefined, {}))
    .toEqual([{
        id: 1,
        title: "First Question"
      }]
    )
  })

  it('add question', () => {
    expect(questions(undefined, actions.addQuestion('title')))
    .toEqual([
      {
        id: 1,
        title: "First Question"
      },
      {
        id: 2,
        title: 'title'
      }
    ])
  })
})
