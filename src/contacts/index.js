import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import App from './components/App'

function domElementGetter() {
  return document.getElementById("contacts")
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