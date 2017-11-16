module BuildingBlocksWeb.Domains.RequestObjects.Trip  {

    export interface ITripRequestObject {
        trips: Array<Domains.Trip.TripModel>;
    }

    export class TripsRequestObject implements ITripRequestObject {

        public trips: Array<Domains.Trip.TripModel>;

        constructor() {
            this.trips = new Array<Domains.Trip.TripModel>();
        }

    }
}
