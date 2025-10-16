import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import SpecializationsSection from "@/components/SpecializationsSection";
import JobsSection from "@/components/JobsSection";
import Footer from "@/components/footer";
import WhyChooseTalentBridge from "@/components/WhyChooseTalentBridge";
import Testimonial from "@/components/Testimonial";
import TrustedCompanies from "@/components/TrustedCompanies";
// import Insights from "@/components/Insights";
import Faq from "@/components/Faq";
import { X } from "lucide-react";

import XBeesHireWorkflowShort from "@/components/XBeesHireWorkflowShort";
import  XBeesHireWorkflow  from "@/components/XBeesHireWorkflow";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <SpecializationsSection />
      <JobsSection />
      <XBeesHireWorkflowShort/>
      <XBeesHireWorkflow/>
      <WhyChooseTalentBridge />
      <Testimonial/>
      <TrustedCompanies/>

      <Faq/>
      <Footer />
    </div>
  );
};

export default Index;