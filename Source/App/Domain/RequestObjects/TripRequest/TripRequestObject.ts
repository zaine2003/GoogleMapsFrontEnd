module BuildingBlocksWeb.Domains.RequestObjects.Trip {

    export class TripRequestObject {

        public trip: Domains.Trip.TripModel;

        constructor() {
            this.trip = new Domains.Trip.TripModel();
        }

    }
}
