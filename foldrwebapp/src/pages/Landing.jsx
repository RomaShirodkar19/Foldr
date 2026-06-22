import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Pricing from '../components/landing/Pricing';
import Testimonials from '../components/landing/Testimonials';
import Cta from '../components/landing/Cta';
import Footer from '../components/landing/Footer';
import { useClerk, useUser } from '@clerk/react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Landing = () => {
    const { openSignIn, openSignUp } = useClerk();
    const { isSignedIn } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSignedIn) {
            navigate('/dashboard');
        }
    }, [isSignedIn, navigate]);


    return (
        <div className="landing-page bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Navbar */}
            <Navbar />
            
            {/* Hero Section */}
            <Hero openSignIn={openSignIn} openSignUp={openSignUp} />
            
            {/* Features Section */}
            <Features />

            {/* Pricing Section */}
            <Pricing  openSignUp={openSignUp} />

            {/* Testimonials Section */}
            <Testimonials />

            {/* Call to Action Section */}
            <Cta openSignUp={openSignUp} />

            {/* Footer */}
            <Footer />


        </div>
    )
}

export default Landing;