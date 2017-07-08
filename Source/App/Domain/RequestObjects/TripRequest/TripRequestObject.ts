module BuildingBlocksWeb.Domains.RequestObjects.Trip {

    export class TripRequestObject {

        public tripId?: number;
        public originAddress: string;
        public destinationAddress: string;
        public mode: string;
        public avoid: string;
        public unit: string;

    }
}
