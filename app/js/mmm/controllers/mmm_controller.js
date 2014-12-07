'use strict';

module.exports = function(app) {
  app.controller('mmmCtrl', ['$scope', '$http', 'MmmService', function($scope, $http, MmmService) {
    var mmm = new MmmService();

    $scope.raw = [];
    $scope.findMMM = function() {
      $scope.raw.push(parseInt($scope.rawNums.nums));
      $scope.rawNums = {};
      var mean = mmm.mean($scope.raw);
      var median = mmm.median($scope.raw);
      var mode = mmm.mode($scope.raw);
      var data = { mean: mean, median: median, mode: mode };
      $scope.mmm = data;
    };
  }]);
};
