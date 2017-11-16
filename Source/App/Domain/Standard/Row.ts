module BuildingBlocksWeb.Domains.Standard {

    export class Row {
        public elements: Array<Element>;

        constructor() {
            this.elements = new Array<Element>();
        }
    }
}
