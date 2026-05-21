import { TreeSpecies } from "./TreeSpecies";

export class TreeFactory {
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