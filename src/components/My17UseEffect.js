import React, { useEffect, useState } from "react";


export default function My17UseEffect(){

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        // console.log("Moviendo Scroll")
        
        const detectScrollY = () => setScrollY(window.pageYOffset)
        window.addEventListener("scroll", detectScrollY)
        
        return () => {
            window.removeEventListener("scroll", detectScrollY)
            // console.log("Desmontaje Scroll")
        }
    }, [scrollY])

    // According to the documentation, since React18 it will mount-update-unmount, and then mount again
    // this is only for DEVELOPMENT, it won't happen in production
    useEffect(() => {
        // console.log("Fase de Montaje")
    }, []);

    useEffect(() => {
        // console.log("Fase de Actualización")
    });

    useEffect(() => {
        return () => {
            // console.log("Fase de Desmontaje")
        }
    });

    return(
        <div>
            <h2> Hook useEffect y ciclo de Vida </h2>
            <p> ScrollY {scrollY} px </p>
        </div>
    );
}