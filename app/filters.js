(function () { 

"use strict";

angular.module('MovieAPP')
.filter('trustUrl', ['$sce', function ($sce) {
  return function(url) {
    return $sce.trustAsResourceUrl(url);
  };
}]);

})();