import AboutMe from './AboutMe/AboutMe'
import AboutSite from './AboutSite/AboutSite'

const AboutHead = () => {
    return(
        <>
            <div className={"aboutHead"}>
               <AboutMe/>
            </div>
           <AboutSite/>
        </>
    )
}

export default AboutHead