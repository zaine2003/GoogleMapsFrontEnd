module BuildingBlocksWeb.Domains {

    export class Trip {

        public tripId?: number;
        public originAddress: string;
        public destinationAddress: string;
        public mode: string;
        public avoid: string;
        public unit: string;

    }
}
