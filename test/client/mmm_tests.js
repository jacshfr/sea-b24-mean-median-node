'use strict';

require('../../app/js/client');
require('angular-mocks');

describe('MmmController', function() {
  var $controllerConstructor;
  var $httpBackend;
  var $scope;

  beforeEach(angular.mock.module('mmmApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controllerConstructor = $controller;
  }));

  it('should be able to create a controller', function() {
    var mmmController = $controllerConstructor('mmmCtrl', {$scope: $scope});
    expect(typeof mmmController).toBe('object');
  });

  describe('main mmm functionality', function() {
    it('should get mean, median, and mode', function() {

      $controllerConstructor('mmmCtrl', {$scope: $scope});
      var testArray = ['1', '2', '3'];
      for (var i = 0; i < testArray.length; i++) {
        $scope.rawNums = {};
        $scope.rawNums.nums = testArray[i];
        $scope.findMMM();
      }
      expect($scope.mmm.mean).toBe(2);
      expect($scope.mmm.median).toBe(2);
      expect($scope.mmm.mode).toEqual([1, 2, 3]);
    });
  });
});
