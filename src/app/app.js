angular
  .module('app', [
    'ui.router',
    'ngMaterial'
  ])
  .constant('ENDPOINT_URI','http://letusdecide.firebaseio.com')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        controller: 'MainController as mainCtrl',
        templateUrl: "app/main/main.html"
      });
      $urlRouterProvider.otherwise('/main');
  });
