import { screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { makeStore } from './store/store';
import { renderWithRouter } from './utils/testing';
import userEvent from '@testing-library/user-event';
import { resetMeetups, resetUsers } from './data';

beforeEach(() => {
  resetMeetups()
  resetUsers()
  const store = makeStore()
  renderWithRouter(
    <Provider store={store}>
      <App />
    </Provider>
  )
})

const login = (email: string, password: string) => {
  const loginBtn = screen.getByRole('link', { name: /Login/i })
  userEvent.click(loginBtn)
  const emailInput = screen.getByLabelText(/email/i)
  const passwordInput = screen.getByLabelText(/password/i)
  const submitBtn = screen.getByTestId('login-btn')
  userEvent.type(emailInput, email)
  userEvent.type(passwordInput, password)
  userEvent.click(submitBtn)
}

test('renders App component (smoke test)', () => {})

describe('App integration tests', () => {
  it('Renders home page first', () => {
    const currentMeetupsTitle = screen.getByText(/Upcoming meetups/i)
    expect(currentMeetupsTitle).toBeInTheDocument()
  })
})

