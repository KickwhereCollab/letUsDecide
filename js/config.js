angular
  .module('app')
  .config(function ($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
          url: '/',
          controller: "HomeController as ctrl",
          templateUrl: "../components/home-component/home.html"
      })
      .state('signin', {
          url: '/signin',
          template: '<button>Sign in</button>'
      })
      .state('board', {
          url: '/board',
          controller: "BoardController as ctrl",
          templateUrl: "../components/board-component/board.html"
      });
      $urlRouterProvider.otherwise('/');
  });
