namespace BuildingBlocksWeb.Modules {

    angular.module('BuildingBlocksDistanceMatrixDemo', ['angularSpinner', 'ngRoute', 'BuildingBlocksDistanceMatrixDemo'])
    .config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
        $routeProvider.when('/', { template: './App/Home.html' });

        $routeProvider.otherwise({ templateUrl: './App/Home.html' });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
        });
    },
    ]);
}
