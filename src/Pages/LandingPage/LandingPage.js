import React from 'react';
import BannerSection from './BannerSection';
import ContactFormSection from './ContactFormSection';
import CraftedSectioin from './CraftedSectioin';
import LearnMoreSection from './LearnMoreSection';
import PricingSection from './PricingSection';
import TestimonialSection from './TestimonialSection';


const LandingPage = () => {
    return(
        <>
            <CraftedSectioin/>
            <PricingSection/>
            <LearnMoreSection/>
            <TestimonialSection/>
            <BannerSection/>
            <ContactFormSection/>
        </>
    )
}
export default LandingPage;