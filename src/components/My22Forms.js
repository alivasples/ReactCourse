import React, { useState } from "react";

// export default function My22Forms(){

//     const [name, setName] = useState("")
//     const [flavor, setFlavor] = useState("")
//     const [language, setLanguage] = useState("")
//     const [termsAccepted, setTermsAccepted] = useState(false)

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         alert("Form succesfully sent!")
//     }

//     return (
//         <>
//             <h2> Form </h2>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="nombre">Nombre: </label>
//                 <input 
//                     type="text" 
//                     id="nombre" 
//                     name={name} 
//                     onChange={(e) => {setName(e.target.value)}}
//                 />
//                 <p>Choose your favourite icecream flavor</p>
//                 <label htmlFor="vanilla"> Vanilla </label>
//                 <input 
//                     type="radio"
//                     id="vanilla"
//                     name="flavor"
//                     value="vanilla"
//                     onChange={(e) => {setFlavor(e.target.value)}}
//                     defaultChecked
//                 />
//                 <label htmlFor="chocolate"> Chocolate </label>
//                 <input 
//                     type="radio"
//                     id="chocolate"
//                     name="flavor"
//                     value="chocolate"
//                     onChange={(e) => {setFlavor(e.target.value)}}
//                 />

//                 <p> Choose your favourite programming language </p>
//                 <select 
//                     name="language" 
//                     onChange={(e) => {setLanguage(e.target.value)}}
//                     defaultValue={language}
//                 >
//                     <option value="">---</option>
//                     <option value="js">Javascript</option>
//                     <option value="python">Python</option>
//                     <option value="go">Go</option>
//                     <option value="java">Java</option>
//                 </select>
//                 <br />
//                 <label htmlFor="terms">Accept terms and conditions</label>
//                 <input
//                     type="checkbox"
//                     id="terms"
//                     name="terms"
//                     value={termsAccepted}
//                     onChange={(e) => setTermsAccepted(e.target.checked)}
//                 />
//                 <br />
//                 <button type="submit">Send</button>
//             </form>
//         </>
//     )
// }


export default function My22Forms(){

    const [form, setForm] = useState({})

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleChecked = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Form succesfully sent!")
    }

    return (
        <>
            <h2> Form </h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre: </label>
                <input 
                    type="text" 
                    id="nombre" 
                    name={form.name} 
                    onChange={handleChange}
                />
                <p>Choose your favourite icecream flavor</p>
                <label htmlFor="vanilla"> Vanilla </label>
                <input 
                    type="radio"
                    id="vanilla"
                    name="flavor"
                    value="vanilla"
                    onChange={handleChange}
                    defaultChecked
                />
                <label htmlFor="chocolate"> Chocolate </label>
                <input 
                    type="radio"
                    id="chocolate"
                    name="flavor"
                    value="chocolate"
                    onChange={handleChange}
                />

                <p> Choose your favourite programming language </p>
                <select 
                    name="language" 
                    onChange={handleChange}
                    defaultValue={form.language}
                >
                    <option value="">---</option>
                    <option value="js">Javascript</option>
                    <option value="python">Python</option>
                    <option value="go">Go</option>
                    <option value="java">Java</option>
                </select>
                <br />
                <label htmlFor="terms">Accept terms and conditions</label>
                <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    value={form.termsAccepted}
                    onChange={handleChecked}
                />
                <br />
                <button type="submit">Send</button>
            </form>
        </>
    )
}