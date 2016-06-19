var app=angular.module('myApp', []);
app.directive('message', function() {
    return {
      restrict:'A',
      template: '<div>This message is from div element <b ng-transclude></b></div>',
      transclude: true,
      replace: true
    };
  });