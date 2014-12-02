'use strict';

module.exports = function(app) {
  app.controller('mmmCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.findMMM = function() {
      $http({
        method: 'POST',
        url: '/mmm',
        data: $scope.rawNums
      })
      .success(function(data) {
        $scope.mmm = data;
        console.log($scope.mmm);
      });
    };
  }]);
};
