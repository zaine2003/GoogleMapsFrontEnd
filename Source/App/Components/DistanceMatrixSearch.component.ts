
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

        public distanceSearchResult: Domains.ResponseObjects.Standard.DistanceMatrixStandardResponse;
        public tripSearch: Domains.Trip.TripModel;

        constructor(
            private BuildingBlocksWebService: Services.BuildingBlocksWebService,
            private usSpinnerService: ISpinnerService) { }

             $onInit = () => {
                 this.tripSearch = new Domains.Trip.TripModel();

             }

        // -----------------------------------------------------------------------------------
        // Service Calls
        // -----------------------------------------------------------------------------------

        private distanceSearch = (tripSearch: Domains.Trip.TripModel) => {

                this.startSpinner('DataSpinner');
                this.BuildingBlocksWebService.Distance(tripSearch.originAddress, tripSearch.destinationAddress).then((result: ng.IHttpPromiseCallbackArg<Domains.ResponseObjects.BaseResponse<Domains.ResponseObjects.Standard.DistanceMatrixStandardResponse>>) => {

                if (result.status === 200) {

                    this.distanceSearchResult = new Domains.ResponseObjects.Standard.DistanceMatrixStandardResponse();
                    this.distanceSearchResult = result.data.data;
                }
                this.stopSpinner('DataSpinner');

            }).catch((error) => {
                    this.stopSpinner('DataSpinner');
                    console.log(error);

                });
        }

        // -----------------------------------------------------------------------------------
        //  Event handlers
        // -----------------------------------------------------------------------------------

        public onDistanceSearch = () => {

            if (this.tripSearch.originAddress != null && this.tripSearch.destinationAddress ) {

            this.distanceSearch(this.tripSearch);

            }

        }

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
