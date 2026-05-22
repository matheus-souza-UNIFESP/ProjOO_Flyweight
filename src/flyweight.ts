class TreeSpecies {
    public readonly name: string
    public readonly color: string
    public readonly texture: string

    constructor(name: string, color: string, texture: string) {
        this.name = name
        this.color = color
        this.texture = texture
    }

    draw(branches: number, x: number, y: number) {
        console.log(`Renderizando ${this.name} com ${branches} galhos em (${x}, ${y})`)
    }
}

class Tree {
    public species: TreeSpecies
    public branches: number
    public x: number
    public y: number

    constructor(species: TreeSpecies, branches: number, x: number, y: number) {
        this.species = species
        this.branches = branches
        this.x = x
        this.y = y
    }

    draw() {
        this.species.draw(this.branches, this.x, this.y)
    }
}

class TreeFactory {
    private static speciesPool = new Map<string, TreeSpecies>()
    
    static getSpecies(name: string, color: string, texture: string): TreeSpecies {
        const key = `${name}-${color}-${texture}`

        if(!this.speciesPool.has(key)) {
            this.speciesPool.set(
                key,
                new TreeSpecies(name, color, texture)
            )
        }

        return this.speciesPool.get(key)!
    }
}

function main() {
    const species = seed()

    const NUMBER_OF_TREES = 1000    //Número de árvores posicionadas no mapa
    const MAP_SIZE = 40             //Área do mapa: MAP_SIZE^2
    const BURNT_RATE = 0.3          //Chance de uma árvore estar queimada

    let treesPlaced = 0

    const map: boolean[][] = Array.from(
        {length: MAP_SIZE},
        () => Array(MAP_SIZE).fill(false)
    )

    for(let i = 0; i < NUMBER_OF_TREES; i++) {
        if(treesPlaced === MAP_SIZE * MAP_SIZE)
            break

        let x: number
        let y: number
        const branches = Math.floor(Math.random() * 10)

        const type = Math.floor(Math.random() * 20)
        const isBurnt = Math.random() < BURNT_RATE
        const variant = isBurnt? 1 : 0

        const speciesFlyweight = species[type]![variant]!
        
        do {
            x = Math.floor(Math.random() * MAP_SIZE)
            y = Math.floor(Math.random() * MAP_SIZE)
        } while(map[x]![y])

        const tree = new Tree(speciesFlyweight, branches, x, y)
        map[x]![y] = true
        treesPlaced++
        tree.draw()
    }

    console.log(`${treesPlaced} árvores renderizadas.`)
}

function seed(): Array<[TreeSpecies, TreeSpecies]> {
    const trees: Array<[TreeSpecies, TreeSpecies]> = []

    trees[0] = [
        TreeFactory.getSpecies("Amapazeiro", "006000", "amapazeiro_r.png"),
        TreeFactory.getSpecies("Amapazeiro queimado", "202020", "amapazeiro_q.png")
    ]

    trees[1] = [
        TreeFactory.getSpecies("Andiroba", "00a010", "andiroba_r.png"),
        TreeFactory.getSpecies("Andiroba queimada", "202020", "andiroba_q.png")
    ]

    trees[2] = [
        TreeFactory.getSpecies("Angelim", "108040", "angelim_r.png"),
        TreeFactory.getSpecies("Angelim queimada", "202020", "angelim_q.png")
    ]

    trees[3] = [
        TreeFactory.getSpecies("Bacaba", "50a030", "bacaba_r.png"),
        TreeFactory.getSpecies("Bacaba queimada", "202020", "bacaba_q.png")
    ]

    trees[4] = [
        TreeFactory.getSpecies("Castanha-de-cutia", "50a050", "cutia_r.png"),
        TreeFactory.getSpecies("Castanha-de-cutia queimada", "202020", "cutia_q.png")
    ]

    trees[5] = [
        TreeFactory.getSpecies("Castanheira", "008040", "castanheira_r.png"),
        TreeFactory.getSpecies("Castanheira queimada", "202020", "castanheira_q.png")
    ]

    trees[6] = [
        TreeFactory.getSpecies("Cedro", "206010", "cedro_r.png"),
        TreeFactory.getSpecies("Cedro queimado", "202020", "cedro_q.png")
    ]

    trees[7] = [
        TreeFactory.getSpecies("Copaíba", "00a010", "copaiba_r.png"),
        TreeFactory.getSpecies("Copaíba queimada", "202020", "copaiba_q.png")
    ]

    trees[8] = [
        TreeFactory.getSpecies("Cumaru", "208040", "cumaru_r.png"),
        TreeFactory.getSpecies("Cumaru queimada", "202020", "cumaru_q.png")
    ]

    trees[9] = [
        TreeFactory.getSpecies("Ipê-amarelo", "f0ff00", "ipe-amarelo_r.png"),
        TreeFactory.getSpecies("Ipê-amarelo queimado", "202020", "ipe-amarelo_q.png")
    ]

    trees[10] = [
        TreeFactory.getSpecies("Jatobá", "006000", "jatoba_r.png"),
        TreeFactory.getSpecies("Jatobá queimado", "202020", "jatoba_q.png")
    ]

    trees[11] = [
        TreeFactory.getSpecies("Mogno", "106010", "mogno_r.png"),
        TreeFactory.getSpecies("Mogno queimado", "202020", "mogno_q.png")
    ]

    trees[12] = [
        TreeFactory.getSpecies("Palmeira-açaí", "50c030", "acai_r.png"),
        TreeFactory.getSpecies("Palmeira-açaí queimada", "202020", "acai_q.png")
    ]

    trees[13] = [
        TreeFactory.getSpecies("Palmeira-buriti", "50c030", "buriti_r.png"),
        TreeFactory.getSpecies("Palmeira-buriti queimada", "202020", "buriti_q.png")
    ]

    trees[14] = [
        TreeFactory.getSpecies("Pau-rosa", "ff15b0", "pau-rosa_r.png"),
        TreeFactory.getSpecies("Pau-rosa queimado", "202020", "pau-rosa_q.png")
    ]

    trees[15] = [
        TreeFactory.getSpecies("Piquiá-amazônico", "10801+60", "piquia_r.png"),
        TreeFactory.getSpecies("Piquiá-amazônico queimado", "202020", "piquia_q.png")
    ]

    trees[16] = [
        TreeFactory.getSpecies("Samaúma", "009050", "samauma_r.png"),
        TreeFactory.getSpecies("Samaúma queimada", "202020", "samauma_q.png")
    ]

    trees[17] = [
        TreeFactory.getSpecies("Seringueira", "006020", "seringueira_r.png"),
        TreeFactory.getSpecies("Seringueira queimada", "202020", "seringueira_q.png")
    ]

    trees[18] = [
        TreeFactory.getSpecies("Tucumã", "80ff80", "tucuma_r.png"),
        TreeFactory.getSpecies("Tucumã queimado", "202020", "tucuma_q.png")
    ]

    trees[19] = [
        TreeFactory.getSpecies("Ucuúba", "10a010", "ucuuba_r.png"),
        TreeFactory.getSpecies("Ucuúba queimada", "202020", "ucuuba_q.png")
    ]

    return trees
}

main()