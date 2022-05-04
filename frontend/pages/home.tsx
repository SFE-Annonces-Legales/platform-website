import AboutSection from '@/components/composed/home/sections/AboutSection';
import HeroSection from '@/components/composed/home/sections/HeroSection';
import PricingSection from '@/components/composed/home/sections/PricingSection';
import StepsSection from '@/components/composed/home/sections/StepsSection';
import UserLayout from '@/components/layouts/UserLayout';

const Home = () => {
    return (
      <UserLayout>
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
      </UserLayout>
  );
}

export default Home
