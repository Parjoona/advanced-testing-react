import React from 'react'
import { mount } from 'enzyme'

import List from 'Components/List/List'
import Store from 'Store'

let wrapper

beforeEach(() => {
  const initialState = {
    comments: [
      'Comment one',
      'Comment two',
      'Comment three'
    ]
  }

  wrapper = mount(
    <Store initialState={initialState}>
      <List />
    </Store>
  )
})

it('Should create one LI per comment', () => {
  expect(wrapper.find('li').length).toEqual(3)
})

it('Should show text from each comment is visible', () => {
  expect(wrapper.render().text()).toContain('Comment one')
  expect(wrapper.render().text()).toContain('Comment two')
  expect(wrapper.render().text()).toContain('Comment three')
})