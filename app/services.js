(function () {
'use strict';

angular.module('MovieAPP')
.constant('ApiBasePath', "https://ror-movies.herokuapp.com/api")
.service('DataService', DataService)

DataService.$inject = ['$http', 'ApiBasePath', '$location'];
function DataService($http, ApiBasePath, $location) {
  var service = this;

  service.getMovies = function (id) {
    return $http({
              method: "GET",
              url: (ApiBasePath + "/movies"),
              headers: { 'Accept': 'application/json' }
            }).then(function (response) {
               return response.data
            });
  };

  service.getMovie = function (id) {
    return $http({
              method: "GET",
              url: (ApiBasePath + "/movies/" + id),
              headers: { 'Accept': 'application/json' }
            }).then(function (response) {
               return response.data
            }).catch(function(error) {
               $location.url('/404/');
            });
  };

  service.getCategories = function () {
    return $http({
              method: "GET",
              url: (ApiBasePath + "/categories"),
              headers: { 'Accept': 'application/json' }
            }).then(function (response) {
               return response.data
            });
  };

  service.getCategory = function (id) {
    return $http({
              method: "GET",
              url: (ApiBasePath + "/categories/" + id),
              headers: { 'Accept': 'application/json' }
            }).then(function (response) {
               return response.data
            }).catch(function(error) {
               $location.url('/404/');
            });
  };

}

})();
