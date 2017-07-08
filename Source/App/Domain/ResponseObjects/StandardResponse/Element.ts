module BuildingBlocksWeb.Domains {

    export class Element {
        public status: string;
        public duration: Duration;
        public distance: Distance;

        constructor() {
            this.duration = new Duration();
            this.distance = new Distance();
        }
    }
}
