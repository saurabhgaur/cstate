'use strict';

angular.module('cstateApp')
  .controller('AccordionCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    //gaurs: this is set to false so that the filters and visualizations pane can stay open at the same time and the
    //effect of applying filters can be seen dynamically
    $scope.oneAtATime = false; 

    $scope.status = {
      filesOpen: false,
      filtersOpen: false,
      visualizationOpen: true
    };
  });