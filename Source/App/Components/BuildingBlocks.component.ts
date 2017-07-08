
namespace BuildingBlocksWeb.Components {

    export class BuildingBlocksWebComponent implements ng.IComponentOptions {
        public bindings: any;
        public controller: any;
        public controllerAs: string;
        public templateUrl: string;

        constructor() {

            this.bindings = {
                x: '<',
            };

            this.controller = BuildingBlocksWebController;
            this.templateUrl = '';
        }
    }

    export class BuildingBlocksWebController implements ng.IController {

        static $inject = [];


        public x: string;

        constructor() {}


    }

    angular.module('BuildingBlocksWeb').component('BuildingBlocksWebComponent', new BuildingBlocksWebComponent());

}
