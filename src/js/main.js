import angular from 'angular';

// import $ from 'jquery';

import { routerConfig } from './routes';
import { LayoutController } from './controllers/layout';
import { AboutController } from './controllers/about';
import { HomeController } from './controllers/home';
import { ArtController } from './controllers/groom'
// import { VinueController } from './controllers/vinu'
import  'angular-ui-router';

angular
.module('app',['ui.router'])
.config(routerConfig)
.controller('LayoutController', LayoutController)
.controller('AboutController', AboutController)
.controller('HomeController', HomeController)
.controller('ArtController', ArtController)
// .controller('VinueController', VinueController)

;
