import React from "react"
import Card from "./Component/Card"
import Hero from "./Component/Hero"
import Navbar from "./Component/Navbar"
import data from './/Component/data'

export default function App() {
     
const cards = data.map(item => {
return (
    <Card 
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
    />
)
}) 
 
return (
<div   >
    <Navbar />
    <Hero/>
    <section className="cards-list"> 
        {cards} 
        </section>
     
</div>
)
}