
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
        public basicSearch: boolean = false;
        public modeSearch: boolean = false;
        public avoidSearch: boolean = false;


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

        private distanceInImperialSearch = (tripSearch: Domains.Trip.TripModel) => {

            this.startSpinner('DataSpinner');
            this.BuildingBlocksWebService.DistanceInImperial(tripSearch.originAddress, tripSearch.destinationAddress).then((result: ng.IHttpPromiseCallbackArg<Domains.ResponseObjects.BaseResponse<Domains.ResponseObjects.Standard.DistanceMatrixStandardResponse>>) => {

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

        private distanceViaModeSearch = (tripSearch: Domains.Trip.TripModel) => {

            this.startSpinner('DataSpinner');
            this.BuildingBlocksWebService.DistanceViaMode(tripSearch.originAddress, tripSearch.destinationAddress, tripSearch.mode).then((result: ng.IHttpPromiseCallbackArg<Domains.ResponseObjects.BaseResponse<Domains.ResponseObjects.Standard.DistanceMatrixStandardResponse>>) => {

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

        private distanceAvoidingSearch = (tripSearch: Domains.Trip.TripModel) => {

            this.startSpinner('DataSpinner');
            this.BuildingBlocksWebService.DistanceAvoiding(tripSearch.originAddress, tripSearch.destinationAddress, tripSearch.avoid).then((result: ng.IHttpPromiseCallbackArg<Domains.ResponseObjects.BaseResponse<Domains.ResponseObjects.Standard.DistanceMatrixStandardResponse>>) => {

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

        private saveTrip = (trip: Domains.RequestObjects.Trip.TripRequestObject) => {

            this.startSpinner('DataSpinner');

            this.BuildingBlocksWebService.SaveTrip(trip).then((result: ng.IHttpPromiseCallbackArg<any>) => {

                if (result.status === 201) {
                    console.log('saved trip');
                }

            }).catch((error) => {
                this.stopSpinner('DataSpinner');
                console.log(error);

            });

        }

        // -----------------------------------------------------------------------------------
        //  Event handlers
        // -----------------------------------------------------------------------------------

        public onDistanceSearch = () => {

            if (this.tripSearch.originAddress && this.tripSearch.destinationAddress) {

                if (this.tripSearch.unit === 'imperial') {
                    this.basicSearch = true;
                    this.distanceInImperialSearch(this.tripSearch);
                    return;
                }

                if (this.tripSearch.mode) {
                    this.modeSearch = true;
                    this.distanceViaModeSearch(this.tripSearch);
                    return;
                }

                if (this.tripSearch.avoid) {
                    this.avoidSearch = true;
                    this.distanceAvoidingSearch(this.tripSearch);
                    return;
                }

                this.basicSearch = true;
                this.distanceSearch(this.tripSearch);

            }

        }

        public onSavetrip = () => {

            if (this.tripSearch != null) {

                const tripRequestObject = new Domains.RequestObjects.Trip.TripRequestObject();

                const distance = this.distanceSearchResult.rows[0].elements[0].distance;
                const duration = this.distanceSearchResult.rows[0].elements[0].duration;


                tripRequestObject.trip.originAddress = this.tripSearch.originAddress;
                tripRequestObject.trip.destinationAddress = this.tripSearch.destinationAddress;
                tripRequestObject.trip.duration = duration.text;
                tripRequestObject.trip.distance = distance.text;

                this.saveTrip(tripRequestObject);

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
