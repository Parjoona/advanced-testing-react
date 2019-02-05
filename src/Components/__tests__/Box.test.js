import React from 'react'
import { mount } from 'enzyme'

import Box from 'Components/Box/Box'
import Store from 'Store'

let wrapper

beforeEach(() => wrapper = mount(<Store><Box /></Store>))
afterEach(() => wrapper.unmount())

it('Should have a textarea and a button', () => {
  expect(wrapper.find('textarea').length).toEqual(1)
  expect(wrapper.find('button').length).toEqual(1)
})

describe('Text area tests', () => {
  beforeEach(() => {
    wrapper
      .find('textarea')
      .simulate('change', {
        target: { value: 'New Comment' }
    })
    wrapper
      .update()
  })

  it('Should have a textarea that users can edit input in', () => {

  
    expect(wrapper.find('textarea').prop('value')).toEqual('New Comment')
  })
  
  it('Should submit textarea and empty its value', () => {
    wrapper.find('form').simulate('submit')
    wrapper.update()
    expect(wrapper.find('textarea').prop('value')).toEqual('')
  })
})
