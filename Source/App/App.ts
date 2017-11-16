namespace BuildingBlocksWeb.Modules {

    angular.module('BuildingBlocksDistanceMatrixDemo', ['angularSpinner', 'ngRoute', 'BuildingBlocksDistanceMatrixDemo'])
    .config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
        $routeProvider.when('/', { templateUrl: './Build/App/Home.html' });

        $routeProvider.otherwise({ templateUrl: './Build/App/Home.html' });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
        });
    },
    ]);
}
