import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async(url) => {
            try{
                let res = await fetch(url) // full response
                // In case response is not success
                if(!res.ok){
                    throw new Error({
                        err: true,
                        status: res.status,
                        statusText: !res.statusText ? "There is an error" : res.statusText
                    })
                }
                // successfull response
                let json = await res.json() // all pokemon list in json format
                setData(json)
                setIsPending(false)
                setError({err: false})
            } catch (err){
                setIsPending(false)
                setError(true)
            }
        };

        getData(url)
    }, [url])
    
    return [data, isPending, error]
}