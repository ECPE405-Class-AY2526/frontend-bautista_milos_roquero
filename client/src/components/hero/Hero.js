import "./HeroStyles.css";
import TextType from "./Reactbits/TextType/TextType"

function Hero(){
    return(<>
        <div className="hero">  
            <div className="hero-title">
                <TextType 
                    text={["Optimizing Post-Harvest Rice Drying: A Real-Time IoT System for Time Reduction and Quality Control"]}
                      typingSpeed={75}
                        pauseDuration={1500}
                          showCursor={true}
                            cursorCharacter="|"/>
        <div className='hero-text'>
        <p>The aforementioned problem motivated the researchers to develop an alternative to traditional post-harvest rice grain dryers, utilizing IoT-based monitoring devices.</p>
        <div className="btn">
            <buttontext>Explore Project</buttontext>
            </div>
        </div>
        </div>
        </div>
    </>)
}

export default Hero;