
module BuildingBlocksWeb.Components {

    export class DistanceMatrixSearchComponent implements ng.IComponentOptions {
        public bindings: any;
        public controller: any;
        public controllerAs: string;
        public templateUrl: string;

        constructor() {

            this.bindings = {};

            this.controller = DistanceMatrixSearchController;
            this.templateUrl = './Build/App/Templates/Components/DistanceMatrixSearch.html';
        }
    }

    class DistanceMatrixSearchController implements ng.IController {

        static $inject = ['BuildingBlocksWebService', 'usSpinnerService'];

        public x: string;

        constructor(
            private BuildingBlocksWebService: Services.BuildingBlocksWebService,
            private usSpinnerService: ISpinnerService) { }

             $onInit = () => {}

        // -----------------------------------------------------------------------------------
        // Service Calls
        // -----------------------------------------------------------------------------------

        // -----------------------------------------------------------------------------------
        //  Event handlers
        // -----------------------------------------------------------------------------------

        // -----------------------------------------------------------------------------------
        //   Page Events
        // -----------------------------------------------------------------------------------

        // -----------------------------------------------------------------------------------
        // Private methods
        // -----------------------------------------------------------------------------------

        private startSpinner = (spinnerName: string) => {
            this.usSpinnerService.spin(spinnerName);
        }

        private stopSpinner = (spinnerName: string) => {
            this.usSpinnerService.stop(spinnerName);
        }

    }

    angular.module('BuildingBlocksDistanceMatrixDemo').component('bbDistanceMatrixSearch', new DistanceMatrixSearchComponent());

}
