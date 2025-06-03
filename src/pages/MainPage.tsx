import Footer from "../components/Footer/Footer"
import HeroSection from "../components/MainPage/HeroSection"
import AboutSection from "../components/MainPage/AboutSection"
import ClassSection from "../components/MainPage/ClassSection"
import ShowcaseSection from "../components/MainPage/ShowcaseSection"
import JoinSection from "../components/MainPage/JoinSection"
import Header from "../components/Header/Header"

function MainPage() {
    return <>
        <Header />
        <HeroSection />
        <AboutSection />
        <ClassSection />
        <ShowcaseSection />
        <JoinSection />
        <Footer />
    </>
}

export default MainPage
