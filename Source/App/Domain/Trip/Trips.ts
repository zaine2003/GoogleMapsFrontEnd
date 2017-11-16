module BuildingBlocksWeb.Domains.Trip {

    export class TripModel {

        public tripId?: number;
        public originAddress: string;
        public destinationAddress: string;
        public mode: string;
        public avoid: string;
        public unit: string;
        public distance: string;
        public duration: string;

    }
}
