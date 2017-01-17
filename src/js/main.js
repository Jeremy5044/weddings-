import angular from 'angular';

import { routerConfig } from './routes';
import { LayoutController } from './controllers/layout';
import { AboutController } from './controllers/about';
import { HomeController } from './controllers/home';
import  'angular-ui-router';

angular
.module('app',['ui.router'])
.config(routerConfig)
.controller('LayoutController', LayoutController)
.controller('AboutController', AboutController)
.controller('HomeController', HomeController)
