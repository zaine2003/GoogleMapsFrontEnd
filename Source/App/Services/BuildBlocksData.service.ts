
module BuildingBlocksWeb.Services {

    export interface IBuildingBlocksWebService {
        Distance(origin: string, destination: string): ng.IPromise<any>;
        DistanceInImperial(origin: string, destination: string): ng.IPromise<any>;
        DistanceViaMode(origin: string, destination: string, mode: string): ng.IPromise<any>;
        DistanceAvoiding(origin: string, destination: string, avoid: string): ng.IPromise<any>;

        SaveTrip(tripRequestObject: Domains.RequestObjects.Trip.TripRequestObject): ng.IPromise<any>;
        SaveTrips(tripRequestObject: Domains.RequestObjects.Trip.TripsRequestObject): ng.IPromise<any>;

        put(): ng.IPromise<any>;
    }


    export class BuildingBlocksWebService implements IBuildingBlocksWebService {

        static $inject: string[] = ['$http'];

        constructor(private $http: ng.IHttpService) { }

        // -----------------------------------------------------------------------------------
        // Get Requests
        // -----------------------------------------------------------------------------------

        Distance = (origin: string, destination: string): ng.IPromise<any[]> => {
            const requestObject: ng.IRequestConfig = {
                method: 'GET',
                responseType: 'json',
                url: '/api/Distance/' + origin + '/' + destination,
            };
            return this.$http(requestObject);
        }

        DistanceInImperial = (origin: string, destination: string): ng.IPromise<any[]> => {
            const requestObject: ng.IRequestConfig = {
                method: 'GET',
                responseType: 'json',
                url: '/api/Distance/' + origin + '/' + destination,
            };
            return this.$http(requestObject);
        }

        DistanceViaMode = (origin: string, destination: string, mode: string): ng.IPromise<any[]> => {
            const requestObject: ng.IRequestConfig = {
                method: 'GET',
                responseType: 'json',
                url: '/api/DistanceViaMode/' + origin + '/' + destination + '/' + mode,
            };
            return this.$http(requestObject);
        }

        DistanceAvoiding = (origin: string, destination: string, avoid: string): ng.IPromise<any[]> => {
            const requestObject: ng.IRequestConfig = {
                method: 'GET',
                responseType: 'json',
                url: '/api/DistanceAvoiding/' + origin + '/' + destination + '/' + avoid,
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
                    'Content-type': 'application/json',
                },
                method: 'POST',
                responseType: 'json',
                url: '/api/SaveTrip/',
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
                url: '/api/SaveTrips/',
            };

            return this.$http(requestObject);
        }


        // -----------------------------------------------------------------------------------
        // Put Requests
        // -----------------------------------------------------------------------------------
        put = (): ng.IPromise<any> => {
            const requestObject = {
                data: new Array(),
                headers: {
                    'Content-type': 'application/json',
                },
                method: 'PUT',
                responseType: 'json',
                url: '/UpdateTrip/',
            };

            return this.$http(requestObject);
        }

    }

    angular.module('BuildingBlocksWebModule').service('BuildingBlocksWebService', BuildingBlocksWebService);

}

