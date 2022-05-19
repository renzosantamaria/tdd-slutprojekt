import { screen } from '@testing-library/react';
import { renderWithPath } from '../../utils/testing'
import MeetupDetails from './MeetupDetails'


describe('MeetupDetails integration tests - meetup lists', () => {
  it('renders the meetupDetails component (smoke test)', () => {
    renderWithPath('/meetups/3', <MeetupDetails />, '/meetups/:id')
  })
  it('renders the meetup heading', async () => {
    renderWithPath('/meetups/4', <MeetupDetails />, '/meetups/:id')
    const heading = await screen.findByRole('heading', { name: 'meetup 4' })
    expect(heading).toBeInTheDocument()
  })
  it('renders the host name', () => {
    renderWithPath('/meetups/1', <MeetupDetails />, '/meetups/:id')
    const host = screen.getByText('user 1', { exact: false })
    expect(host).toBeInTheDocument()
  })
  it('renders the meetup description', () => {
    renderWithPath('/meetups/3', <MeetupDetails />, '/meetups/:id')
    const description = screen.getByText('desc 3', { exact: false })
    expect(description).toBeInTheDocument()
  })
  it('renders the start date and time', () => {
    renderWithPath('/meetups/3', <MeetupDetails />, '/meetups/:id')
    const startDate = screen.getByText('Sat Jul 04 2020 19:40', { exact: false })
    expect(startDate).toBeInTheDocument()
  })
  it('renders the end date and time', () => {
    renderWithPath('/meetups/3', <MeetupDetails />, '/meetups/:id')
    const endDate = screen.getByText('Sat Jul 04 2020 19:55', { exact: false })
    expect(endDate).toBeInTheDocument()
  })
  it('displays the address', () => {
    renderWithPath('/meetups/2', <MeetupDetails />, '/meetups/:id')
    const address = screen.getByText('address 2', { exact: false })
    expect(address).toBeInTheDocument()
  })
  it('displays the attendees', () => {
    renderWithPath('/meetups/3', <MeetupDetails />, '/meetups/:id')
    const address = screen.getByText('user 1, user 2.', { exact: false })
    expect(address).toBeInTheDocument()
  })
})