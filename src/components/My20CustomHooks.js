import React from "react";
import { useFetch } from "../hooks/useFetch";

export default function My20CustomHooks() {
    let url = "https://pokeapi.co/api/v2/pokemon/"
    let [data, isPending, error] = useFetch(url)

    return(
        <>
            <h2> Custom Hooks </h2>
            <p> {JSON.stringify(data)} </p>
            <p> {JSON.stringify(isPending)} </p>
            <p> {JSON.stringify(error)} </p>
        </>
    )
}