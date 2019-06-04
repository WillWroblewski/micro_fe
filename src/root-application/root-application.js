import { start, registerApplication } from 'single-spa'

const hashPrefix = prefix => location => location.hash.startsWith(`#${prefix}`)

registerApplication('main', () => import('../contacts/index.js'), hashPrefix('/'))
registerApplication('nav', () => import('../nav/index.js'), hashPrefix('/'))

start()
