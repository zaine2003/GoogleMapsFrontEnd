
namespace BuildingBlocksWeb.Services {

    export interface IBuildingBlocksWebService {
        get(): ng.IPromise<any>;
        post(): ng.IPromise<any>;
        put(): ng.IPromise<any>;
    }


    export class BuildingBlocksWebService implements IBuildingBlocksWebService {

        static $inject: string[] = ['$http'];

        constructor(private $http: ng.IHttpService) { }

        // -----------------------------------------------------------------------------------
        // Get Requests
        // -----------------------------------------------------------------------------------
        get = (): ng.IPromise<any[]> => {
            const requestObject: ng.IRequestConfig = {
                method: 'GET',
                responseType: 'json',
                url: '',
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

