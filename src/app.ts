import { PLATFORM } from 'aurelia-pal';
import { RouterConfiguration, Router } from 'aurelia-router'

export class App {
  router: Router

  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.title = 'Primer app de Aurelia'
    config.options.pushState = true;
    config.options.root = '/'
    config.map([
      { route: ['','home'], name: 'home', moduleId: PLATFORM.moduleName('pages/home') },
      { route: ['about'], name: 'about', moduleId: PLATFORM.moduleName('pages/about') },
      { route: ['tests'], name: 'tests', moduleId: PLATFORM.moduleName('pages/tests') },
    ])

    //config.fallbackRoute('home')
  }
}
