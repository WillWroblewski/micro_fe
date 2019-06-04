import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import App from './components/app'

const domElementGetter = () => {
  let el = document.getElementById('react')
  if (!el) {
    el = document.createElement('div')
    el.id = 'contacts'
    document.body.appendChild(el)
  }

  return el
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter,
})

export const bootstrap = props => reactLifecycles.bootstrap(props)

export const mount = props => reactLifecycles.mount(props)

export const unmount = props => reactLifecycles.unmount(props)