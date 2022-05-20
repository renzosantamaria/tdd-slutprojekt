import { screen } from '@testing-library/react'
import Header from './Header'
import { makeStore } from '../../store/store'
import { Provider } from 'react-redux'
import { renderWithRouter } from '../../utils/testing'

beforeEach(() => {
  const store = makeStore()
  renderWithRouter(
    <Provider store={store}>
      <Header />
    </Provider>
  )
})

describe('Header', () => {
  it('renders Header component correctly (smoketest)', () => {})
  it('renders a login button when a user is not logged in', () => {
    const loginBtn = screen.getByRole('link', { name: /Login/i })
    expect(loginBtn).toBeInTheDocument()
  })
})
