import { FunctionComponent } from "react";
import Footer from "../composed/Footer";
import AboutSection from "../composed/home/sections/AboutSection";
import HeroSection from "../composed/home/sections/HeroSection";
import PricingSection from "../composed/home/sections/PricingSection";
import StepsSection from "../composed/home/sections/StepsSection";
import MainLayout from "../layouts/MainLayout";

interface HomePageProps { }

const HomePage: FunctionComponent<HomePageProps> = () => {

    return (
        <MainLayout>
            <main id="hero">
                <HeroSection />
                <div className="px-2 sm:px-6 lg:px-8 pt-10 pb-20" id="about">
                    <AboutSection />
                    <hr className="my-4 border-gray-200 sm:mx-auto lg:my-6 max-w-3xl" />
                    <StepsSection />
                    <hr className="my-4 border-gray-200 sm:mx-auto lg:my-6 max-w-3xl" id="pricing" />
                    <PricingSection />
                </div>
            </main>
            <Footer />
        </MainLayout>
    );
}


export default HomePage;