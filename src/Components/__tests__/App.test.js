import React from 'react'

import App from '../App'
import Box from '../Box/Box'
import List from '../List/List'

import { shallow } from 'enzyme'

it('Should render the correct amount of Boxes', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find(Box).length).toEqual(1)
})

it('Should render one list', () => {
  const wrapper = shallow(<App/>)
  expect(wrapper.find(List).length).toEqual(1)
})