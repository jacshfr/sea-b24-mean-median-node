'use strict';

require('angular/angular');

var mmmApp = angular.module('mmmApp', []);

require('./mmm/services/mmm_service')(mmmApp);
require('./mmm/controllers/mmm_controller')(mmmApp);
