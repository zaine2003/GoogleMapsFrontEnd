
namespace BuildingBlocksWeb.Services {

    export interface IBuildingBlocksWebService {
        Distance(origin: string, destination: string): ng.IPromise<any>;
        DistanceInImperial(origin: string, destination: string): ng.IPromise<any>;
        DistanceViaMode(origin: string, destination: string, mode: string): ng.IPromise<any>;
        DistanceAvoiding(origin: string, destination: string, avoid: string): ng.IPromise<any>;

        post(): ng.IPromise<any>;
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
                url: '/Distance/' + this.origin + '/' + this.destination,
            };
            return this.$http(requestObject);
        }

        DistanceInImperial = (origin: string, destination: string): ng.IPromise<any[]> => {
            const requestObject: ng.IRequestConfig = {
                method: 'GET',
                responseType: 'json',
                url: '/Distance/' + this.origin + '/' + this.destination,
            };
            return this.$http(requestObject);
        }

        DistanceViaMode = (origin: string, destination: string, mode: string): ng.IPromise<any[]> => {
            const requestObject: ng.IRequestConfig = {
                method: 'GET',
                responseType: 'json',
                url: '/DistanceViaMode/' + this.origin + '/' + this.destination + '/' + this.mode,
            };
            return this.$http(requestObject);
        }

        DistanceAvoiding = (origin: string, destination: string, avoid: string): ng.IPromise<any[]> => {
            const requestObject: ng.IRequestConfig = {
                method: 'GET',
                responseType: 'json',
                url: '/DistanceAvoiding/' + this.origin + '/' + this.destination + '/' + this.avoid,
            };
            return this.$http(requestObject);
        }
        // -----------------------------------------------------------------------------------
        // Post Requests
        // -----------------------------------------------------------------------------------
        post = (): ng.IPromise<any> => {
            const requestObject = {
                data: new Array(),
                headers: {
                    'Content-type': 'application/json',
                },
                method: 'POST',
                responseType: 'json',
                url: '/api/quotation/getVehicleManufacturers/',
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
                url: '/api/quotation/getVehicleManufacturers/',
            };

            return this.$http(requestObject);
        }

    }

    angular.module('BuildingBlocksWebModule').service('BuildingBlocksWebService', BuildingBlocksWebService);

}

