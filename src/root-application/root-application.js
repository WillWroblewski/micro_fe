import { start, registerApplication } from 'single-spa'

const hashPrefix = prefix => location => location.hash.startsWith(`#${prefix}`)

registerApplication('nav', () => import('../nav/index.js'), hashPrefix('/'))
registerApplication('main', () => import('../contacts/index.js'), hashPrefix('/'))


start()
