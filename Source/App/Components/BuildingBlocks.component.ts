
namespace BuildingBlocksWeb.Components {

    export class BuildingBlocksWebComponent implements ng.IComponentOptions {
        public bindings: any;
        public controller: any;
        public controllerAs: string;
        public templateUrl: string;

        constructor() {

            this.bindings = {
                x: '<', // one way!
            };

            this.controller = BuildingBlocksWebComponentController;
            this.templateUrl = '../Templates/Components/BuildingBlocksWeb.html';
        }
    }

    class BuildingBlocksWebComponentController implements ng.IController {

        static $inject = ['BuildingBlocksWebService', 'usSpinnerService'];

        public x: string;

        constructor(
            private BuildingBlocksWebService: Services.BuildingBlocksWebService,
            private usSpinnerService: ISpinnerService) { }

             $onInit = () => {
                 this.x = '';
              }

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

    angular.module('BuildingBlocksWeb').component('BuildingBlocksWebComponent', new BuildingBlocksWebComponent());

}
