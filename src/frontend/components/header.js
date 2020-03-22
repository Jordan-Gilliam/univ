import react from 'react'
import { Link } from 'react-router-dom'

const h = react.createElement

export class Header extends react.Component {
  render () {
    return (
      h('header', null,
        h('h1', { className: 'text-center' },
          h(Link, { to: '/' }, 'My library')
        )
      )
    )
  }
}
