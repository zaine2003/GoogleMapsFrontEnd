
module BuildingBlocksWeb.Components {

    export class SavedDistancesComponent implements ng.IComponentOptions {
        public bindings: any;
        public controller: any;
        public controllerAs: string;
        public templateUrl: string;

        constructor() {

            this.bindings = {};

            this.controller = SavedDistancesController;
            this.templateUrl = './Build/App/Templates/Components/SavedDistances.html';
        }
    }

    class SavedDistancesController implements ng.IController {

        static $inject = ['BuildingBlocksWebService', 'usSpinnerService'];

        public savedTrips: Array<Domains.Trip.TripModel>;

        constructor(
            private BuildingBlocksWebService: Services.BuildingBlocksWebService,
            private usSpinnerService: ISpinnerService) { }

        $onInit = () => {

            this.getSavedTrips();
         }

        // -----------------------------------------------------------------------------------
        // Service Calls
        // -----------------------------------------------------------------------------------

        private getSavedTrips = () => {

            this.startSpinner('SavedTripsSpinner');
            this.BuildingBlocksWebService.SavedTrips().then((result: ng.IHttpPromiseCallbackArg<Array<Domains.Trip.TripModel>>) => {

                if (result.status === 200) {

                    this.savedTrips = new Array<Domains.Trip.TripModel>();
                    this.savedTrips = result.data;
                }
                this.stopSpinner('SavedTripsSpinner');

            }).catch((error) => {
                this.stopSpinner('SavedTripsSpinner');
                console.log(error);

            });


        }

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

    angular.module('BuildingBlocksDistanceMatrixDemo').component('bbSavedDistances', new SavedDistancesComponent());

}
