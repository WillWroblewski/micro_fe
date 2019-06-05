import 'zone.js';
import 'reflect-metadata';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import singleSpaAngular from 'single-spa-angular2';
import MainModule from './components/main.module.ts';

const ngLifecycles = singleSpaAngular({
  domElementGetter,
  mainModule: MainModule,
  angularPlatform: platformBrowserDynamic(),
  template: `<HomeApp />`,
})

export const bootstrap = [
  ngLifecycles.bootstrap,
];

export const mount = [
  ngLifecycles.mount,
];

export const unmount = [
  ngLifecycles.unmount,
];

function domElementGetter() {
  return document.getElementById('home');
}