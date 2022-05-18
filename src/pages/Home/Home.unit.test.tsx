import { renderWithRouter } from '../../utils/testing'
import Home from './Home'
import { makeStore } from '../../store/store'
import { Provider } from 'react-redux'

beforeEach(() => {
  const store = makeStore()
  renderWithRouter(
    <Provider store={store}>
      <Home />
    </Provider>
  )
})

describe('Home unit tests - meetup lists', () => {
  it('renders Home component correctly (smoketest)', () => {})
})