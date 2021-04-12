import ContactHead from './ContactHead/ContactHead'
import PortfolioHead from './PortfolioHead/PortfolioHead'
import AboutHead from './AboutHead/AboutHead'

export default function Home(){
    return(
        <main className="main">
           <PortfolioHead/>
           <AboutHead/>
           <ContactHead/>
        </main>
    )
}