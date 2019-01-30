import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

it('Should render application', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)

  expect(div.innerHTML).toContain('Box')

  ReactDOM.unmountComponentAtNode(div)
})