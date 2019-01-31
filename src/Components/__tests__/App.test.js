import React from 'react'

import App from 'Components/App'
import Box from 'Components/Box/Box'
import List from 'Components/List/List'

import { shallow } from 'enzyme'

let wrapper

beforeEach(() => {
  wrapper = shallow(<App />) 
})

it('Should render the correct amount of Boxes', () => {
  expect(wrapper.find(Box).length).toEqual(1)
})

it('Should render one list', () => {
  expect(wrapper.find(List).length).toEqual(1)
})