'use client'
import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";



const Animals = () => {
    const [catfacts, setCatFacts] = useState([])
    const [fact, setFact] = useState([])

    const getCatFacts = async () => {
        try {
            const response = await axios.get("https://cat-fact.herokuapp.com/facts");
            console.log(response);

            if (response?.data?.success) {
                setCatFacts(response.data.data);
            }
        } catch (error) {
            console.log(error?.response?.data);
        }
    };

const postCatFact = async () => {
    try {
        const response = await axios.post("https://cat-fact.herokuapp.com/facts", {
            text: fact,
        });

        if (response?.data?.status) {
            getCatFacts();
        }
    } catch (error) {
        console.log(error?.response?.data);
    }
};

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
                <input
                    type="text"
                    value={fact}
                    onChange={(e) => setFact(e.target.value)}
                />
                <button onClick={postCatFact}>Post Cat Fact</button>
                <ul>
                    {catfacts.map((catFact) => (
                        <li key={catFact._id}>{catFact.text}</li>
                    ))}
                </ul>
            </section>
            
        </>
        /*            
                Prøvde å mappe igjennom en liste for å finne id og text
                {JSON.stringify(catfacts)}
        */
    )
}

export default Animals;
