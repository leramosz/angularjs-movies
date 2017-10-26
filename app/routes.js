(function () {  
'use strict';

angular.module('MovieAPP')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // .state('404', {
  //   url:'/404/',
  //   templateUrl: 'templates/error.html'
  // })

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'HomeController as homeCtrl',
    resolve: {
      movies: ['DataService', function (DataService) {
        return DataService.getMovies().
          then(function (result) {
            return result;
          });
      }]
    }
  })

  .state('category', {
    url: '/category/{id}',
    templateUrl: 'templates/category.html',
    controller: 'CategoryController as categoryCtrl',
    resolve: {
      category: ['DataService', '$stateParams', function (DataService, $stateParams) {
        return DataService.getCategory($stateParams['id']).
          then(function (result) {
            return result;
          });
      }]
    }
  })

  .state('movie', {
    url: '/movie/{id}',
    templateUrl: 'templates/movie.html',
    controller: "MovieController as movieCtrl",
    resolve: {
      movie: ['DataService', '$stateParams', function (DataService, $stateParams) {
        return DataService.getMovie($stateParams['id']).
          then(function (result) {
            return result;
          });
      }]
    }
  })

}

})();
