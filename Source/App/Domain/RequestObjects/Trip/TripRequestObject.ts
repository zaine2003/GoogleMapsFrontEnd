namespace BuildingBlocksWeb.Domains {

    export class TripRequestObject {

        public trips: Array<Trip>;

        constructor() {
            this.trips = new Array<Trip>();
        }

    }
}
