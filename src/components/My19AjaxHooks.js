import React, {useEffect, useState} from "react";

function Pokemon({avatar, name}){
    return(
        <figure>
            <img src={avatar} alt={name} />
            <figcaption> {name} </figcaption>
        </figure>
    )
}

export default function My19AjaxHooks(){

    const [pokemons, setPokemons] = useState([])

    // Promises
    /*
    useEffect(() => {
        let url = "https://pokeapi.co/api/v2/pokemon/"
        fetch(url)
        .then((res) => res.json()) // full response
        .then((json) => { // all pokemon list in json format
            // console.log(json)
            json.results.forEach((el) => {
                fetch(el.url)
                .then((res) => res.json())
                .then((json) => {
                    let pokemon = {
                        id: json.id,
                        name: json.name,
                        avatar: json.sprites.front_default
                    }
                    // console.log(pokemon)
                    setPokemons((pokemons) => [...pokemons, pokemon]);
                })
            })
        });
    }, [])
    */

    // Async - await
    useEffect(() => {
        const getPokemons = async(url) => {
            let res = await fetch(url) // full response
            let json = await res.json() // all pokemon list in json format
            // console.log(json)
            json.results.forEach( async(el) => {
                let res = await fetch(el.url)
                let json = await res.json()
                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default
                }
                // console.log(pokemon)
                setPokemons((pokemons) => [...pokemons, pokemon]);
            })
        }

        getPokemons("https://pokeapi.co/api/v2/pokemon/")
    }, [])

    return(
        <>
            <h2> Async requests in hooks </h2>
            {
                pokemons.length === 0 ? (
                    <h3> Loading ... </h3>
                ) : (
                    pokemons.map((pok) => (
                        <Pokemon key={pok.id} avatar={pok.avatar} name={pok.name}/>
                    ))
                )
            }
        </>
    )
}