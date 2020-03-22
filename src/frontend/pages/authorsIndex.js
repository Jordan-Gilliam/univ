import react from 'react'
import { Link } from 'react-router-dom'
import { AsyncPage } from './asyncPage.js'
import { Header } from '../components/header.js'
import { Footer } from '../components/footer.js'
import { authors } from '../../data/authors.js'
const h = react.createElement

export class AuthorsIndex extends AsyncPage {
  static async loadData () {
    return { authors }
  }

  render () {
    return h('div', { className: 'container' },
      h(Header),
      this.state.loading
        ? h('div', { className: 'text-center' }, 'Loading ...')
        : h('div', null,
          h('h2', { className: 'text-center' }, 'Books by author'),
          this.state.authors === null
            ? h('div', { className: 'text-center' }, 'Loading ...')
            : h('div', { className: 'row' },
              this.state.data.authors.map(
                (author) => h('div', { key: author.id, className: 'col text-center' },
                  h(Link, { to: `/author/${author.id}` },
                    h('img', { src: `/public/authors/${author.picture}` }),
                    h('p', null, author.name)
                  )
                )
              )
            )
        ),
      h(Footer)
    )
  }
}
