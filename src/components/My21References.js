import React, { useRef } from "react";

export default function My21References(){
    const refMenu = useRef();
    const refMenuBtn = useRef();

    const handleToggleMenu = (e) => {
        /* 
        // Javascript 
        const $menu = document.getElementById("menu")
        if(e.target.textContent === "Menú"){
            e.target.textContent = "Cerrar"
            $menu.style.display = "block"
        }
        else{
            e.target.textContent = "Menú"
            $menu.style.display = "none"
        }
        */
        // REACT
        if(refMenuBtn.current.textContent === "Menú"){
            refMenuBtn.current.textContent = "Cerrar"
            refMenu.current.style.display = "block"
        }
        else{
            refMenuBtn.current.textContent = "Menú"
            refMenu.current.style.display = "none"
        }
    }

    return (
        <>
            <h2> References (Dynamic hide - show) </h2>
            {/* In vanilla Javascript we would need an id  
                <button id='menu-btn' onClick={handleToggleMenu}>Menú</button>
                <nav id="menu" style={{display:"none"}}>
            */}
            <button ref={refMenuBtn} onClick={handleToggleMenu}>Menú</button>
            <nav ref={refMenu} style={{display:"none"}}>
                <a href="#home">Sección 1</a>
                <br />
                <a href="#home">Sección 2</a>
                <br />
                <a href="#home">Sección 3</a>
                <br />
                <a href="#home">Sección 4</a>
                <br />
                <a href="#home">Sección 5</a>
            </nav>
        </>
    )
}