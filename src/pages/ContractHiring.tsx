import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, Code, FileText, ArrowRight, TrendingUp, Zap, CheckCircle, Calendar, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Footer from '@/components/footer';
import Navigation from '@/components/Navigation';

const ContractHiring = () => {
  const [scrollY, setScrollY] = useState(0);
  const servicesRef = useRef(null);
  const serviceRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Add specific animation class for service items
          if (entry.target.classList.contains('service-item-wrapper')) {
            entry.target.classList.add('slide-in-from-right');
          }
        }
      });
    }, observerOptions);

    // Observe all service items and scroll reveal elements
    document.querySelectorAll('.service-item-wrapper, .scroll-reveal').forEach(el => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const services = [
    {
      icon: Briefcase,
      title: "Agile Workforce Deployment",
      price: "Custom Quote",
      description: "Rapidly scale your team for the exact duration and scope of any project—from weeks to months.",
      features: [
        "Flexible contract durations",
        "Quick ramp-up & ramp-down",
        "Project-focused resourcing",
        "No long-term commitments"
      ],
      iconBg: "bg-teal-500"
    },
    {
      icon: Users,
      title: "Niche & Specialized Talent",
      price: "Starting at $1,200 per contract",
      description: "Access experts in IT, finance, marketing, compliance, and more—qualified technically and culturally.",
      features: [
        "Industry-specific candidate pools",
        "Technical & soft-skills assessments",
        "Culture-fit screening",
        "On-demand availability"
      ],
      iconBg: "bg-blue-500"
    },
    {
      icon: Code,
      title: "Volume & Bulk Contracts",
      price: "Volume discounts available",
      description: "Fill multiple roles simultaneously with streamlined bulk hiring, assessments, and onboarding.",
      features: [
        "Fast-track shortlisting",
        "Group assessments",
        "Consolidated onboarding",
        "Team deployments"
      ],
      iconBg: "bg-purple-500"
    },
    {
      icon: FileText,
      title: "Managed Onboarding & Compliance",
      price: "$500 per month (per contractor)",
      description: "We handle documentation, payroll, and legal compliance so you can focus on project delivery.",
      features: [
        "Background & compliance checks",
        "Contract drafting & payroll",
        "Orientation support",
        "Seamless handovers & conversions"
      ],
      iconBg: "bg-amber-500"
    }
  ];

  const stats = [
    { number: "98%", label: "Success Rate", icon: TrendingUp },
    { number: "24h", label: "Avg. Hire Time", icon: Zap },
    { number: "10K+", label: "Active Talents", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
      {/* Navigation */}
      <Navigation/>

      <section className="pt-24 pb-10 min-h-[95vh] relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        {/* Simplified Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-48 h-48 bg-gradient-to-br from-emerald-400/20 to-teal-400/15 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-tl from-blue-400/15 to-cyan-400/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container mx-auto px-6 h-full relative z-10 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
            
            {/* Left Content - Contract Hiring Focused */}
            <div className="space-y-6">
              {/* Badge with Contract Focus */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-200 shadow-lg animate-slideInLeft">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <Briefcase className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-xs text-gray-700 font-semibold">Contract & Temporary Staffing Experts</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="block text-gray-900 animate-slideInLeft" style={{ animationDelay: '0.2s' }}>Scale Your</span>
                  <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-slideInLeft" style={{ animationDelay: '0.4s' }}>
                    Team Instantly
                  </span>
                  <span className="block text-gray-900 animate-slideInLeft" style={{ animationDelay: '0.6s' }}>with Contract Talent</span>
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl animate-slideInLeft" style={{ animationDelay: '0.8s' }}>
                  Access specialized professionals on-demand. From short-term projects to seasonal scaling, get the exact talent you need, exactly when you need it.
                </p>
              </div>

              {/* Contract-Specific Stats */}
              <div className="grid grid-cols-3 gap-4 py-4">
                {[
                  { number: "48h", label: "Contract Start", icon: Zap, color: "emerald" },
                  { number: "95%", label: "Project Success", icon: TrendingUp, color: "teal" },
                  { number: "5K+", label: "Contract Pros", icon: Users, color: "blue" }
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="animate-slideInUp" style={{ animationDelay: `${1 + index * 0.15}s` }}>
                      <div className={`w-10 h-10 bg-${stat.color}-500 rounded-lg flex items-center justify-center mb-2 shadow-lg`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              {/* Contract-Focused CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 shadow-lg shadow-emerald-200 transform hover:scale-105 transition-all duration-300 animate-slideInLeft group"
                  style={{ animationDelay: '1.5s' }}
                >
                  <Briefcase className="mr-2 w-4 h-4" />
                  Hire Contract Talent
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-emerald-400 hover:text-emerald-600 px-6 py-3 transition-all duration-300 animate-slideInLeft"
                  style={{ animationDelay: '1.7s' }}
                >
                  <Calendar className="mr-2 w-4 h-4" />
                  Schedule Consultation
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-4 pt-4 animate-slideInLeft" style={{ animationDelay: '1.9s' }}>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 border-2 border-white shadow-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xs">{i}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-700">
                    <span className="font-semibold text-gray-900">1,200+</span> active contract placements
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Professional Contract Image */}
            <div className="relative lg:h-[400px] flex justify-center items-center">
              <div className="relative w-full max-w-[450px] animate-slideInRight">
                {/* Glow Effect Behind Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 via-teal-400/20 to-blue-400/20 rounded-2xl blur-xl transform scale-110"></div>
                
                {/* Main Image Container */}
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-white/50">
                  <img
                    src="/contact-hiring1.png"
                    alt="Contract Hiring Professional"
                    className="w-full h-auto object-cover"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent"></div>
                </div>

                {/* Essential Contract Metrics */}
                <div className="absolute top-4 -left-4 bg-white/95 backdrop-blur-xl rounded-xl shadow-lg p-3 border border-white/50 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-md">
                      <Calendar className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">3-12</div>
                      <div className="text-xs text-gray-600">Month Contracts</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 -right-4 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg p-3 text-white animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                      <Zap className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">48hr</div>
                      <div className="text-xs text-blue-100">Deployment</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Right-to-Left Scroll Animations */}
      <section ref={servicesRef} className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-32 scroll-reveal">
            <Badge className="mb-4 bg-teal-100 text-teal-700 border-0 px-4 py-2">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contract Recruitment Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible, on-demand staffing for projects of any size
            </p>
          </div>

          {/* Service Items with Right-to-Left Scroll Animations */}
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              
              return (
                <div
                  key={index}
                  className="service-item-wrapper scroll-reveal"
                  data-index={index}
                  ref={el => serviceRefs.current[index] = el}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                    {/* Large Number on Left */}
                    <div className="lg:col-span-3 relative">
                      <div className="lg:sticky lg:top-32">
                        <div className="relative h-32 lg:h-40 flex items-center justify-center lg:justify-start">
                          <span className="service-number block text-[8rem] lg:text-[10rem] font-black leading-none bg-gradient-to-br from-teal-200 via-teal-300 to-blue-300 bg-clip-text text-transparent select-none">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-blue-100 blur-3xl opacity-30 -z-10"></div>
                        </div>
                      </div>
                    </div>

                    {/* Service Card on Right */}
                    <div className="lg:col-span-9">
                      <Card 
                        className="service-card-enhanced bg-white border border-gray-200 hover:border-teal-300 shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden group relative"
                      >
                        {/* Animated Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-white to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        
                        {/* Decorative Corner */}
                        <div className={`absolute top-0 right-0 w-24 h-24 ${service.iconBg} opacity-10 rounded-bl-full transform group-hover:scale-150 transition-transform duration-700`}></div>
                        
                        <CardHeader className="pb-4 relative z-10">
                          <div className="flex items-start gap-4">
                            <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 flex-shrink-0`}>
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-2xl lg:text-3xl mb-2 text-gray-900 group-hover:text-teal-700 transition-colors duration-500">
                                {service.title}
                              </CardTitle>
                              <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 rounded-full border border-teal-200">
                                <span className="text-teal-700 font-semibold text-sm">
                                  {service.price}
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="relative z-10 pt-2">
                          <p className="text-gray-600 text-base mb-4 leading-relaxed">
                            {service.description}
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            {service.features.map((feature, i) => (
                              <div 
                                key={i} 
                                className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:from-teal-50 hover:to-blue-50 transition-all duration-500 border border-gray-100 hover:border-teal-200 group/feature"
                              >
                                <div className={`w-8 h-8 rounded-lg ${service.iconBg} flex items-center justify-center flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-300`}>
                                  <CheckCircle className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-gray-700 text-sm font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                          
                          <Button 
                            className="bg-teal-600 hover:bg-teal-700 text-white group/btn px-6 shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            Learn More
                            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* New Right-to-Left Scroll Animation */
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(100px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .scroll-reveal {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .scroll-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Right-to-Left Animation for Services */
        .service-item-wrapper {
          opacity: 0;
          transform: translateX(100px) scale(0.95);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-item-wrapper.visible {
          opacity: 1;
          transform: translateX(0) scale(1);
        }

        .service-item-wrapper.slide-in-from-right {
          animation: slideInFromRight 0.8s ease-out forwards;
        }

        .service-item {
          position: relative;
        }

        .service-card {
          transform-origin: center;
        }

        .number-circle {
          position: sticky;
          top: 50vh;
          transform: translateY(-50%);
        }
        
        /* Enhanced hover effects for contract elements */
        .contract-stat:hover {
          transform: scale(1.05) translateY(-2px);
          transition: all 0.3s ease;
        }
        
        /* Gradient text animation */
        .gradient-text {
          background: linear-gradient(45deg, #10b981, #06b6d4, #3b82f6);
          background-size: 300% 300%;
          animation: gradientShift 3s ease infinite;
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Staggered animation delays for service items */
        .service-item-wrapper:nth-child(1) { transition-delay: 0.1s; }
        .service-item-wrapper:nth-child(2) { transition-delay: 0.2s; }
        .service-item-wrapper:nth-child(3) { transition-delay: 0.3s; }
        .service-item-wrapper:nth-child(4) { transition-delay: 0.4s; }
      `}</style>
    </div>
  );
};

export default ContractHiring;