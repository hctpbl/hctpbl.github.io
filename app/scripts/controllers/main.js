'use strict';

/**
 * @ngdoc function
 * @name styleSageCatsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the styleSageCatsApp
 */
angular.module('styleSageCatsApp')
  .controller('MainCtrl', ['$scope', 'googleCatsService', function ($scope, googleCatsService) {
    $scope.catClicks = 0;

    /*googleCatsService.getCatsFromGoogle()
      .then(function(result) {
        $scope.cat = result.data.responseData.results[0];
      });*/

    $scope.clickCat = function() {
      $scope.catClicks++;
    };

  }]);
