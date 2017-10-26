(function () {
'use strict';

angular.module('MovieAPP')
.component('movies', {
  templateUrl: 'templates/movie-list.html',
  bindings: {
    movies: '<'
  }
});

})();
