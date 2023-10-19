'use client'
import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";



const Animals = () => {
    const [catfacts, setCatFacts] = useState([])

const getCatFacts = async () => {
    try {
    const response = await axios.get("https://cat-fact.herokuapp.com/facts")
    console.log(response)

    if (response?.data?.success) {
        setCatFacts(response.data.data)
    }
}   catch(error) {
    console.log(error?.response?.data)
    }
}

useEffect(() => {
    getCatFacts();
}, []);

    return (
        <>
        <Head>
            <title>Animals</title>
        </Head>
            <h1>ANIMALS</h1>
            <section>                      
                {catfacts.map((fact) => (
                    <li key={fact._id}>{fact.text}</li>
                ))}
                {JSON.stringify(catfacts)}
            </section>
            
        </>
        /*            
                Prøvde å mappe igjennom en liste for å finne id og text
                {JSON.stringify(catfacts)}
        */
    )
}

export default Animals;