'use strict';

module.exports = function(app) {
  app.controller('mmmCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.findMMM = function() {
      $scope.raw = [];
      $scope.raw.push($scope.rawNums);
      $scope.rawNums = {};
      $http({
        method: 'POST',
        url: '/mmm',
        data: $scope.raw
      })
      .success(function(data) {
        $scope.mmm = data;

      });
    };
  }]);
};
