angular.module('project', ['ngResource', 'ngRoute'])

  .provider('Project', function () {

    this.$get = function ($resource) {
      var Project = $resource('/api/projects/:_id', {}, {
        update: {
          method: 'PUT'
        }
      });

      return Project;
    };

  })

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        controller:'ListCtrl',
        templateUrl:'partials/list.html'
      })
      .when('/edit/:_id', {
        controller:'EditCtrl',
        templateUrl:'partials/detail.html'
      })
      .when('/new', {
        controller:'CreateCtrl',
        templateUrl:'partials/detail.html'
      })
      .otherwise({
        redirectTo:'/'
      });
  })

  .controller('ListCtrl', function ($scope, Project) {
    $scope.projects = Project.query();
  })

  .controller('CreateCtrl', function ($scope, $location, Project) {
    $scope.project = new Project();
    $scope.save = function () {
      $scope.project.$save(function () {
        $location.path('/');
        $scope.project = new Project();
      });
    };
  })

  .controller('EditCtrl', function($scope, $routeParams, $location, Project) {
    $scope.project = Project.get({ _id: $routeParams._id });

    $scope.save = function() {
      $scope.project.$update({ _id: $routeParams._id });
      $location.path('/');
    };

    $scope.destroy = function() {
      $scope.project.$remove({ _id: $routeParams._id });
      $location.path('/');
    };
  });
