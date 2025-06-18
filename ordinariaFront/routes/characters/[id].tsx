import type { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios"

type Character = {
    id: string
    name: string,
    house: string,
    alive: string,
    image: string,
    ref: string
}

export const handler: Handlers<Character> = {
    GET: async (req: Request, ctx: FreshContext) => {
        const url = new URL(req.url)
        const ref = url.href
        const id = ref.toString().replace("http://localhost:8000/characters/", "")
        const response = await Axios.get("https://hp-api.onrender.com/api/character/"+{id})
        return ctx.render(response)
    }
}

const Page = (props: PageProps<Character>) => {
    const c = props.data
    return (
        <div>
            <img src={c.image} alt={c.name}></img>
            <h1>{c.name}</h1> <button>Fav</button>
            <p>{c.house}</p>
            <p>{c.alive==="true"? "Alive" : "Dead"}</p>
            <a href="/">Volver</a>
        </div>
    )
}

export default Page
