import { registerApplication, start } from 'single-spa';

// registerApplication(
//   'header',
//   () => import('header/AppBar'),
//   (location) => location.pathname.startsWith('/'),
// );

import('./app.js');

// registerApplication(
//   'navigation',
//   () => import('navigation/Navigation'),
//   (location) => location.pathname.startsWith('/'),
// );

start({
  urlRerouteOnly: true,
});
