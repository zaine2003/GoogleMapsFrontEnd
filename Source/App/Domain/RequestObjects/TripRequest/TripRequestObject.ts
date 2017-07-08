module BuildingBlocksWeb.Domains {

    export interface ITripRequestObject {
        trips: Array<Trip>;
    }

    export class TripRequestObject implements ITripRequestObject {

        public trips: Array<Trip>;

        constructor() {
            this.trips = new Array<Trip>();
        }

    }
}
