import React from 'react'
import { mount } from 'enzyme'
import Store from 'Store'
import App from 'Components/App'

import moxios from 'moxios'

beforeEach(() => {
  moxios.install()
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{
      name: 'Fetched #1',
    }, {
      name: 'Fetched #2'
    }]
  })
})

afterEach(() => {
  moxios.uninstall()
})

it('Should fetch a list of comments and display them', (done) => {
  const wrapper = mount(
    <Store>
      <App/>
    </Store>
  )

  wrapper.find('.fetch-btn').simulate('click')

  moxios.wait(() => {
    wrapper.update()
    expect(wrapper.find('li').length).toBe(2)
    done()
    wrapper.unmount()
  })
})