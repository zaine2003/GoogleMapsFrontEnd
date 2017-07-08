module BuildingBlocksWeb.Domains.RequestObjects.Trip  {

    export interface ITripRequestObject {
        trips: Array<TripRequestObject>;
    }

    export class TripsRequestObject implements ITripRequestObject {

        public trips: Array<TripRequestObject>;

        constructor() {
            this.trips = new Array<TripRequestObject>();
        }

    }
}
