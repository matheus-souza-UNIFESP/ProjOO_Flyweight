export class TreeSpecies {
    constructor(
        public readonly name: string,
        public readonly color: string,
        public readonly texture: string
    ) {}

    draw(branches: number, x: number, y: number) {
        console.log(`Renderizando ${this.name} com ${branches} galhos em (${x}, ${y}`)
    }
}