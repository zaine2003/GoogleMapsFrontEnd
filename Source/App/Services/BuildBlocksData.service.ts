
module BuildingBlocksWeb.Services {

    export interface IBuildingBlocksWebService {
        Distance(origin: string, destination: string): ng.IPromise<any>;
        DistanceInImperial(origin: string, destination: string): ng.IPromise<any>;
        DistanceViaMode(origin: string, destination: string, mode: string): ng.IPromise<any>;
        DistanceAvoiding(origin: string, destination: string, avoid: string): ng.IPromise<any>;
        SavedTrips(): ng.IPromise<Array<Domains.Trip.TripModel>>;

        SaveTrip(tripRequestObject: Domains.RequestObjects.Trip.TripRequestObject): ng.IPromise<any>;
        SaveTrips(tripRequestObject: Domains.RequestObjects.Trip.TripsRequestObject): ng.IPromise<any>;

        UpdateTrip(trip: Domains.Trip.TripModel): ng.IPromise<any>;

    }

    export class BuildingBlocksWebService implements IBuildingBlocksWebService {

        static $inject: string[] = ['$http'];

        constructor(private $http: ng.IHttpService) {



         }

        // -----------------------------------------------------------------------------------
        // Get Requests
        // -----------------------------------------------------------------------------------

        Distance = (origin: string, destination: string): ng.IPromise<any[]> => {
            const requestObject: ng.IRequestConfig = {
                method: 'GET',
                responseType: 'json',
                url: 'http://localhost:5000/api/DistanceMatrix/Distance/' + origin + '/' + destination,
            };
            return this.$http(requestObject);
        }

        DistanceInImperial = (origin: string, destination: string): ng.IPromise<any[]> => {
            const requestObject: ng.IRequestConfig = {
                method: 'GET',
                responseType: 'json',
                url: 'http://localhost:5000/api/DistanceMatrix/DistanceInImperial/' + origin + '/' + destination,
            };
            return this.$http(requestObject);
        }

        DistanceViaMode = (origin: string, destination: string, mode: string): ng.IPromise<any[]> => {
            const requestObject: ng.IRequestConfig = {
                method: 'GET',
                responseType: 'json',
                url: 'http://localhost:5000/api/DistanceMatrix/DistanceViaMode/' + origin + '/' + destination + '/' + mode,
            };
            return this.$http(requestObject);
        }

        DistanceAvoiding = (origin: string, destination: string, avoid: string): ng.IPromise<any[]> => {
            const requestObject: ng.IRequestConfig = {
                method: 'GET',
                responseType: 'json',
                url: 'http://localhost:5000/api/DistanceMatrix/DistanceAvoiding/' + origin + '/' + destination + '/' + avoid,
            };
            return this.$http(requestObject);
        }

        SavedTrips = (): ng.IPromise<Array<Domains.Trip.TripModel>> => {
            const requestObject: ng.IRequestConfig = {
                method: 'GET',
                responseType: 'json',
                url: 'http://localhost:5000/api/DistanceMatrix/SavedTrips/',
            };
            return this.$http(requestObject);
        }
        // -----------------------------------------------------------------------------------
        // Post Requests
        // -----------------------------------------------------------------------------------
        SaveTrip = (tripRequestObject: Domains.RequestObjects.Trip.TripRequestObject): ng.IPromise<any> => {
            const requestObject = {
                data: tripRequestObject,
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                method: 'POST',
                responseType: 'json',
                url: 'http://localhost:5000/api/DistanceMatrix/SaveTrip/',
            };

            return this.$http(requestObject);
        }
        SaveTrips = (tripRequestObject: Domains.RequestObjects.Trip.TripsRequestObject): ng.IPromise<any> => {
            const requestObject = {
                data: tripRequestObject,
                headers: {
                    'Content-type': 'application/json',
                },
                method: 'POST',
                responseType: 'json',
                url: 'http://localhost:5000/api/DistanceMatrix/SaveTrips/',
            };

            return this.$http(requestObject);
        }

        // -----------------------------------------------------------------------------------
        // Put Requests
        // -----------------------------------------------------------------------------------
        UpdateTrip = (trip: Domains.Trip.TripModel): ng.IPromise<any> => {
            const requestObject = {
                data: trip,
                headers: {
                    'Content-type': 'application/json',
                },
                method: 'PUT',
                responseType: 'json',
                url: 'http://localhost:5000/api/DistanceMatrix/UpdateTrip/',
            };

            return this.$http(requestObject);
        }

    }

    angular.module('BuildingBlocksDistanceMatrixDemo').service('BuildingBlocksWebService', BuildingBlocksWebService);

}

