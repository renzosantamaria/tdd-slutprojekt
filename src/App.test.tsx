import { screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { makeStore } from './store/store';
import { renderWithRouter } from './utils/testing';


beforeEach(() => {
  const store = makeStore()
  renderWithRouter(
    <Provider store={store}>
      <App />
    </Provider>
  )
})

test('renders App component (smoke test)', () => {})

describe('App integration tests', () => {
  it('Renders home page first', () => {
    const currentMeetupsTitle = screen.getByText(/Upcoming meetups/i)
    expect(currentMeetupsTitle).toBeInTheDocument()
  })
})

