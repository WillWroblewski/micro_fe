import { registerApplication, start } from 'single-spa';

registerApplication('nav', () => import('../nav/index'), () => true);
registerApplication('home', () => import('../home/index'), (location) => location.pathname === "" || location.pathname === "/");
registerApplication('contacts', () => import('../contacts/index'), pathPrefix('/contacts'));

start();

function pathPrefix(prefix) {
  return function (location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}
