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
    $scope.catList = [
      {
        url: "http://weknowyourdreams.com/images/cat/cat-01.jpg",
        name: "Cat 1",
        clicks: 0
      },
      {
        url: "http://weknowyourdreams.com/images/cat/cat-06.jpg",
        name: "Cat 2",
        clicks: 0
      }
    ];


    /*googleCatsService.getCatsFromGoogle()
      .then(function(result) {
        $scope.cat = result.data.responseData.results[0];
      });*/

    $scope.clickCat = function(cat) {
      cat.clicks++;
    };

  }]);
