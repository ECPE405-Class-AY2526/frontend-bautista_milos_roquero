import Hero from "../components/hero/Hero";
import Keyfeatures from "../components/keyfeatures/Keyfeatures";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function Home(){
    return(
        <>
        <Navbar/>  
        <Hero/>
        <Keyfeatures/>
        <Footer/>
        </>
    )
}

export default Home;