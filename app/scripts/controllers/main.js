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
    $scope.chosenCat = undefined;
    $scope.adminCat = undefined;

    $scope.adminShown = false;

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
      },
      {
        url: "http://www.cgdev.org/sites/default/files/cat8.jpg",
        name: "Cat 3",
        clicks: 0
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_March_2010-1.jpg",
        name: "Cat 4",
        clicks: 0
      },
      {
        url: "https://www.friskies.com/Content/images/headers/cat_wet.png",
        name: "Cat 5",
        clicks: 0
      }
    ];


    googleCatsService.getCatsFromGoogle()
      .then(function(result) {
        $scope.cat = result.data.responseData;
      });

    $scope.clickCat = function(cat) {
      cat.clicks++;
    };

    $scope.chooseCat = function(cat) {
      $scope.chosenCat = cat;
    };

    $scope.showAdmin = function() {
      $scope.adminCat = angular.copy($scope.chosenCat);
      $scope.adminShown = true;
    };

    $scope.hideAdmin = function() {
      $scope.adminShown = false;
    };

    $scope.saveCatChanges = function() {
      $scope.chosenCat.name = $scope.adminCat.name;
      $scope.chosenCat.url = $scope.adminCat.url;
      $scope.chosenCat.clicks = $scope.adminCat.clicks;
      $scope.hideAdmin();
    }

  }]);
