import { TreeSpecies } from "./TreeSpecies"

export class Tree {
    constructor(
        public species: TreeSpecies,
        public branches: number,
        public x: number,
        public y: number
    ) {}

    draw() {
        this.species.draw(this.branches, this.x, this.y)
    }
}