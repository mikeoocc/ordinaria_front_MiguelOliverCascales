import favoritos from "../utils/utils.ts";

type Character = {
    id: string
    name: string,
    house: string,
    alive: string
    image: string
}

const FavButton = (props: Character) => {


    const onClick = (char: Character) => {
        if(favoritos.value.find((c) => c.id === char.id)){
            return
        }
        else {
            favoritos.value.push(props)
        }
    }


    return (
        <div>
            <button onClick={() => onClick(props)}></button>
        </div>
    ) 
}

export default FavButton