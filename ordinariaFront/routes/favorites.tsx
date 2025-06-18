import favoritos from "../utils/utils.ts";

const Page = () => {

    const favs = favoritos.value

    return (
        <div>
            {favs && favs.map((c) => (
                <ul>
                    <li> <img src={c.image} alt={c.name}></img> </li>
                    <p>{c.name}</p> <p>   </p><button>Fav</button>
                    <br>----</br>
                </ul>
            ))}
        </div>
    )
}

export default Page