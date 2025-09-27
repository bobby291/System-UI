import { Hero } from "../components/Hero"
import { About } from "../components/About"
import { Portfolio } from "../components/Portfolio"
import { Offer } from "../components/Offer"
import { Client } from "../components/Client"
import { Review } from "../components/Review"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"


export default function Layouts() {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Portfolio />
    <Client />
    <Offer />
    <Review />
    <Footer />    
    
    </>
  )
}