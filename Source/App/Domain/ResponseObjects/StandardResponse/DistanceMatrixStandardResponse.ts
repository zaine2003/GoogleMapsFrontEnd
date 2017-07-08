module BuildingBlocksWeb.Domains {

    export interface IDistanceMatrixStandardResponse {
        status: string;
        originAddresses: Array<string>;
        destinationAddresses: Array<string>;
        rows: Array<Row>;
    }

    export class DistanceMatrixStandardResponse implements IDistanceMatrixStandardResponse {
        public status: string;
        public originAddresses: Array<string>;
        public destinationAddresses: Array<string>;
        public rows: Array<Row>;
        constructor() {
            this.originAddresses = new Array<string>();
            this.destinationAddresses = new Array<string>();
            this.rows = new Array<Row>();
        }
    }
}
