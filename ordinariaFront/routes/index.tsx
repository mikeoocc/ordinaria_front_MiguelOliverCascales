import type { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios"
import FavButton from "../islands/FavButton.tsx";


type Character = {
    id: string
    name: string,
    house: string,
    alive: string,
    image: string,
    ref: string
}

type Data = {
  results: Character[]
}

export const handler: Handlers<Data> = {
  GET: async (_req: Request, ctx: FreshContext) => {
    const response = await Axios.get("https://hp-api.onrender.com/api/characters")
    const characters = response.data.map((char: Character) => ({
      id: char.id,
      name: char.name,
      house: char.house,
      alive: char.alive,
      image: char.image,
      ref: "/characters/"+char.id
    }))
    return ctx.render(characters)
  }
}

const Page = (props: PageProps) => {

  const characters = props.data
  
  return (
    <div>
      {characters && characters.map((c: Character) => (
        <ul>
          <li> <img src={c.image} alt={c.name}></img> </li>
          <a href={c.ref}>{c.name}</a> <p>   </p> <button>Fav</button> 
          <br>----</br>
        </ul>
      ))}
    </div>
  )
}

export default Page