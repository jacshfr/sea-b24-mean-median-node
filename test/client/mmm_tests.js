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

  describe('rest request', function() {
    beforeEach(angular.mock.inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should make a post to /mmm', function() {
      $httpBackend.expectPOST('/mmm').respond(200, {'mean': 2, 'median': 3, 'mode': [1, 2, 3]});

      $controllerConstructor('mmmCtrl', {$scope: $scope});
      $scope.rawNums = {};
      $scope.rawNums.nums = '123';
      $scope.findMMM();

      $httpBackend.flush();

      expect($scope.mmm.mean).toBe(2);
      expect($scope.mmm.median).toBe(3);
      expect($scope.mmm.mode).toEqual([1, 2, 3]);
    });
  });
});
