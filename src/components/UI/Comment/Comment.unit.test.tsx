import { screen } from '@testing-library/react'
import { renderWithRouter } from '../../../utils/testing'
import Comment from './Comment'
import { Provider } from 'react-redux'
import { store } from '../../../store/store'

const comment = { name: 'user 2', date: new Date('2021-12-06T11:00:00'), content: 'nice location' }

beforeEach(() => {
  renderWithRouter(
    <Provider store={store}>
      <Comment comment={comment} />
    </Provider>
  )
})

describe('Comment card tests', () => {
  it('renders the commenters name', () => {
    const commentersName = screen.getByTestId('commenters-name')
    expect(commentersName).toBeInTheDocument()
    expect(commentersName).toHaveTextContent('user 2')
  })
  it('renders the date the comment was made', () => {
    const commentDate = screen.getByText('06/12/2021')
    expect(commentDate).toBeInTheDocument()
  })
})
