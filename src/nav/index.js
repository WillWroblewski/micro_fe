import 'zone.js'
import 'reflect-metadata'
import singleSpaAngular2 from 'single-spa-angular2'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import MainModule from './main.module.ts'
import { Router } from '@angular/router'

const domElementGetter = () => {
  let el = document.getElementById('nav')
  if (!el) {
    el = document.createElement('div')
    el.id = 'nav'
    document.body.appendChild(el)
  }

  return el
}

const ngLifecycles = singleSpaAngular2({
  domElementGetter,
  mainModule: MainModule,
  angularPlatform: platformBrowserDynamic(),
  template: `<NavApp />`,
  Router,
})

export const bootstrap = props => ngLifecycles.bootstrap(props)

export const mount = props => ngLifecycles.mount(props)

export const unmount = props => ngLifecycles.unmount(props)