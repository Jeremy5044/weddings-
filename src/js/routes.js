function routerConfig ($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('root', {
    abstract: true,
    templateUrl: 'templates/layout.tpl.html',
    controller: 'LayoutController as layout'
  })
  .state('root.home', {
    url:'/',
    templateUrl: 'templates/home.tpl.html',
    controller: 'HomeController as home'
  })
  .state('root.about',{
    url: '/about',
    templateUrl: 'templates/about.tpl.html',
    controller: 'AboutController as about'
  });

$urlRouterProvider.otherwise('/');
};
routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };
