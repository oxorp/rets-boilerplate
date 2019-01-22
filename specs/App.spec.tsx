import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../src/components/App/App'
import renderer from 'react-test-renderer'

Enzyme.configure({ adapter: new Adapter() })

describe('App', () => {
  test('should render', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
