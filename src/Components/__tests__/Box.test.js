import React from 'react'
import { mount } from 'enzyme'

import Box from 'Components/Box/Box'

let wrapper

beforeEach(() => wrapper = mount(<Box />))
afterEach(() => wrapper.unmount())

it('Should have a textarea and a button', () => {
  expect(wrapper.find('textarea').length).toEqual(1)
  expect(wrapper.find('button').length).toEqual(1)
})

it('Should have a textarea that users can edit input in', () => {
  wrapper
    .find('textarea')
    .simulate('change', {
      target: { value: 'New Comment' }
  })
  wrapper.update()

  expect(wrapper.find('textarea').prop('value')).toEqual('New Comment')
})

it('Should submit textarea and empty its value', () => {
  wrapper
    .find('textarea')
    .simulate('change', {
      target: { value: 'New Comment' }
  })
  wrapper.update()
  wrapper.find('form').simulate('submit')
  wrapper.update()
  expect(wrapper.find('textarea').prop('value')).toEqual('')
})