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
        url: "http://s.hswstatic.com/gif/whiskers-sam.jpg",
        name: "Cat 1",
        clicks: 0
      },
      {
        url: "http://s3-static-ak.buzzfed.com/static/campaign_images/webdr05/2013/9/11/6/the-location-of-londons-first-cat-cafe-has-finall-1-8314-1378896387-0_big.jpg",
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
