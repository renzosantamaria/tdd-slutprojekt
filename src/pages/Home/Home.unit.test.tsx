import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/testing'
import Home from './Home'
import { makeStore } from '../../store/store'
import { Provider } from 'react-redux'
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  const store = makeStore()
  renderWithRouter(
    <Provider store={store}>
      <Home />
    </Provider>
  )
})

describe('Home integration tests - meetup lists', () => {
  it('renders Home component correctly (smoketest)', () => {})
  it('renders a heading element for the upcoming evets list', () => {
    const upcomingMeetupsHeading = screen.getByRole('heading', {name: /Upcoming meetups/i})
    expect(upcomingMeetupsHeading).toBeInTheDocument()
  })
  it('renders a heading element for the past evets list', () => {
    const pastMeetupsHeading = screen.getByRole('heading', {name: /Past meetups/i})
    expect(pastMeetupsHeading).toBeInTheDocument()
  })
  it('renders a list of 2 coming meetups', async () => {
    const meetups = await screen.findAllByTestId('upcomingMeetup')
    expect(meetups).toHaveLength(2)
  })
  it('renders a list of 2 past meetups', async () => {
    const meetups = await screen.findAllByTestId('pastMeetup')
    expect(meetups).toHaveLength(2)
  })
  it('renders the text PAST on past meetup cards', () => {
    const pastText = screen.getAllByTestId('pastMeetup')

    expect(pastText).toHaveLength(2)
  })
})