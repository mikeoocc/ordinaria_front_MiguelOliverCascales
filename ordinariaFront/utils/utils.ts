import { signal } from "@preact/signals";

type Character = {
    id: string
    name: string,
    house: string,
    alive: string
    image: string
}

const favoritos = signal<Character[]>([])

export default favoritos