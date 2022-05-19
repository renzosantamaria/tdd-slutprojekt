import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithRouter } from '../../utils/testing'
import Login from './Login'
import { makeStore } from '../../store/store'
import { Provider } from 'react-redux'

beforeEach(() => {
  const store = makeStore()
  renderWithRouter(
    <Provider store={store}>
      <Login />
    </Provider>
  )
})

describe('Login unit tests', () => {
  it('renders login component correctly (smoke test', () => {})
  it('renders a log in button', () => {
    const loginBtn = screen.getByTestId('login-btn')
    expect(loginBtn).toBeInTheDocument()
  })
  it('updates values in email input when typing', () => {
    const emailInput = screen.getByLabelText(/email/i)

    userEvent.type(emailInput, 'hannah@gmail.com')

    expect(screen.getByRole('form')).toHaveFormValues({
      email: 'hannah@gmail.com',
      password: '',
    })
  })
  it('updates values in password input when typing', () => {
    const passwordInput = screen.getByLabelText(/password/i)

    userEvent.type(passwordInput, 'hannahIsBest')

    expect(screen.getByRole('form')).toHaveFormValues({
      email: '',
      password: 'hannahIsBest',
    })
  })
})
