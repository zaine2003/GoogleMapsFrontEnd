module BuildingBlocksWeb.Domains {

    export class Row {
        public elements: Array<Element>;

        constructor() {
            this.elements = new Array<Element>();
        }
    }
}
