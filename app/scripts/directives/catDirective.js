angular.module('styleSageCatsApp')
  .directive('catDirective', function() {
    return {
      restrict: "A",
      templateUrl: "scripts/directives/catDirectiveTemplate.html",
      scope: {
        cat: "=catDirectiveData",
        chooseCat: "&?catDirectiveChooseCallback"
      },
      link: function(scope) {
        scope.clickCat = function(cat) {
          cat.clicks++;
        };
      }
    };
  });
