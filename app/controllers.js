(function () {
  
'use strict';

angular.module('MovieAPP')
.controller('HeadController', HeadController)
.controller('HomeController', HomeController)
.controller('CategoryController', CategoryController)
.controller('MovieController', MovieController);

HeadController.$inject = ['DataService'];
function HeadController (DataService) {
  var headCtrl = this;

  DataService.getCategories()
  	.then(function (result) {
  	  headCtrl.categories = result
  	});
  	
}

HomeController.$inject = ['DataService', 'movies'];
function HomeController (DataService, movies) {
  var homeCtrl = this;
  homeCtrl.movies = movies;
}

CategoryController.$inject = ['DataService', 'category'];
function CategoryController (DataService, category) {
  var categoryCtrl = this;
  categoryCtrl.category = category;
}

MovieController.$inject = ['DataService', 'movie'];
function MovieController (DataService, movie) {
  var movieCtrl = this;
  movieCtrl.movie = movie;
}

})();
