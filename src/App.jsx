import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Data from "./data.js"



export default function App() {

    const cardsData = Data.map((card) => {
        return (
            <Card 
                key={card.id}
                {...card}
            />
        )
    })


    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {cardsData}
            </section>
        </div>
    )
}