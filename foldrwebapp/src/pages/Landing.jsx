import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Pricing from '../components/landing/Pricing';
import Testimonials from '../components/landing/Testimonials';
import Cta from '../components/landing/Cta';
import Footer from '../components/landing/Footer';

const Landing = () => {
    return (
        <div className="landing-page bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Hero Section */}
            <Hero />
            
            {/* Features Section */}
            <Features />

            {/* Pricing Section */}
            <Pricing />

            {/* Testimonials Section */}
            <Testimonials />

            {/* Call to Action Section */}
            <Cta />

            {/* Footer */}
            <Footer />


        </div>
    )
}

export default Landing;