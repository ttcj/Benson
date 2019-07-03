import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { App } from '../client/App'
import LandingContainer from '../client/containers/LandingPage'

Enzyme.configure({ adapter: new Adapter() })
describe('<App/>', () => {
  it('should render the App', () => {
    const wrapper = shallow(
      <App>
        <LandingContainer />
      </App>
    )
    expect(wrapper.contains(<LandingContainer />)).toEqual(true)
  })
})

