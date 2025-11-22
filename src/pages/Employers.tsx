import React, { useEffect, useRef, useState } from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import Navigation from "@/components/Navigation";

import Footer from "@/components/footer";

import { Button } from "@/components/ui/button";

import axios from "axios";

import {

  FileText,

  Search,

  Users,

  UserCheck,

  Download,

  Star,

  Building,

  Target,

  Clock,

  CircleCheck,

  ArrowRight,

  CheckCircle,

  TrendingUp,

  Award,

  Briefcase,

  Calendar,

  HeartHandshake,

  Eye,

  Shield

} from "lucide-react";



const Employers = () => {

  const [testimonials, setTestimonials] = useState([]);

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

          if (entry.target.classList.contains('service-item-wrapper')) {

            entry.target.classList.add('slide-in-from-right');

          }

        }

      });

    }, observerOptions);



    document.querySelectorAll('.service-item-wrapper, .scroll-reveal').forEach(el => {

      observer.observe(el);

    });



    // Fetch testimonials from backend

    axios

      .get("http://16.171.117.2:3000/testimonials")

      .then((response) => {

        setTestimonials(response.data);

      })

      .catch((error) => {

        console.error("Error fetching testimonials:", error);

      });



    return () => {

      window.removeEventListener('scroll', handleScroll);

      observer.disconnect();

    };

  }, []);



  const services = [

    {

      icon: Search,

      title: "Executive Search",

      price: "Custom Quote",

      description: "Find senior-level executives and leadership talent for critical roles with our comprehensive executive search services.",

      features: [

        "C-level positions and board members",

        "VP & Director level recruitment",

        "Confidential and discreet searches",

        "Cultural fit assessment and validation"

      ],

      iconBg: "bg-blue-500"

    },

    {

      icon: Users,

      title: "Volume Hiring Solutions",

      price: "Starting at $1,200 per hire",

      description: "Scale your team quickly with our efficient bulk recruitment solutions designed for rapid growth and expansion.",

      features: [

        "Multiple positions simultaneously",

        "Fast turnaround and delivery",

        "Streamlined hiring process",

        "Quality assurance and guarantees"

      ],

      iconBg: "bg-emerald-500"

    },

    {

      icon: Target,

      title: "Specialized Role Recruitment",

      price: "Starting at $2,000 per placement",

      description: "Expert recruitment for niche and technical positions requiring specific industry knowledge and expertise.",

      features: [

        "Technical specialists and experts",

        "Healthcare professionals",

        "Finance and accounting experts",

        "Industry veterans and consultants"

      ],

      iconBg: "bg-purple-500"

    },

    {

      icon: UserCheck,

      title: "Managed Recruitment Programs",

      price: "$1,500 per month per program",

      description: "End-to-end recruitment program management with dedicated support and comprehensive talent pipeline development.",

      features: [

        "Dedicated recruitment teams",

        "Talent pipeline development",

        "Performance tracking and analytics",

        "Compliance and risk management"

      ],

      iconBg: "bg-orange-500"

    }

  ];



  const hiringSteps = [

    {

      number: "01",

      icon: FileText,

      title: "Requirements Analysis",

      description: "We work with you to understand your role requirements, company culture, and ideal candidate profile."

    },

    {

      number: "02",

      icon: Search,

      title: "Candidate Sourcing",

      description: "Our team searches through our network and actively recruits top talent that matches your needs."

    },

    {

      number: "03",

      icon: Users,

      title: "Screening & Vetting",

      description: "We conduct thorough interviews and assessments to ensure candidates meet your standards."

    },

    {

      number: "04",

      icon: UserCheck,

      title: "Presentation & Hire",

      description: "We present qualified candidates and support you through the interview and hiring process."

    }

  ];



  return (

    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">

      {/* Navigation */}

      <Navigation />



      {/* Hero Section */}

      <section className="pt-24 pb-10 min-h-[95vh] relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">

        {/* Background Elements */}

        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute top-20 right-10 w-48 h-48 bg-gradient-to-br from-emerald-400/20 to-teal-400/15 rounded-full filter blur-3xl animate-pulse" />

          <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-tl from-teal-400/15 to-cyan-400/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        </div>

       

        <div className="container mx-auto px-6 h-full relative z-10 flex items-center">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">

           

            {/* Left Content */}

            <div className="space-y-6">

              {/* Badge */}

              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-200 shadow-lg animate-slideInLeft">

                <div className="flex items-center gap-2">

                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>

                  <Building className="w-4 h-4 text-emerald-600" />

                </div>

                <span className="text-xs text-gray-700 font-semibold">Employer Solutions</span>

              </div>



              {/* Main Headline */}

              <div className="space-y-3">

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">

                  <span className="block text-gray-900 animate-slideInLeft" style={{ animationDelay: '0.2s' }}>Find Top Talent for</span>

                  <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-slideInLeft" style={{ animationDelay: '0.4s' }}>

                    Your Growing Team

                  </span>

                </h1>

               

                <p className="text-lg text-gray-600 leading-relaxed max-w-xl animate-slideInLeft" style={{ animationDelay: '0.8s' }}>

                  Access our curated network of skilled professionals across tech, finance, healthcare, and more. Build your perfect team with our comprehensive recruitment solutions.

                </p>

              </div>



              {/* Key Benefits */}

              <div className="space-y-4 animate-slideInLeft" style={{ animationDelay: '1s' }}>

                <div className="flex items-center gap-3">

                  <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">

                    <CheckCircle className="w-3 h-3 text-white" />

                  </div>

                  <span className="text-gray-700">10,000+ Active Candidates</span>

                </div>

                <div className="flex items-center gap-3">

                  <div className="w-6 h-6 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center">

                    <CheckCircle className="w-3 h-3 text-white" />

                  </div>

                  <span className="text-gray-700">95% Success Rate</span>

                </div>

                <div className="flex items-center gap-3">

                  <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">

                    <CheckCircle className="w-3 h-3 text-white" />

                  </div>

                  <span className="text-gray-700">48hr Average Match Time</span>

                </div>

              </div>



              {/* CTAs */}

              <div className="flex flex-col sm:flex-row gap-3 pt-2">

                <Button

                  size="lg"

                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 shadow-lg shadow-emerald-200 transform hover:scale-105 transition-all duration-300 animate-slideInLeft group"

                  style={{ animationDelay: '1.5s' }}

                >

                  <Search className="mr-2 w-4 h-4" />

                  Hire Talent

                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />

                </Button>

                <Button

                  size="lg"

                  variant="outline"

                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-emerald-400 hover:text-emerald-600 px-6 py-3 transition-all duration-300 animate-slideInLeft"

                  style={{ animationDelay: '1.7s' }}

                >

                  <Eye className="mr-2 w-4 h-4" />

                  View CVs

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

                    <span className="font-semibold text-gray-900">500+</span> companies served

                  </div>

                </div>

              </div>

            </div>



            {/* Right Content - Hero Image */}

            <div className="relative lg:h-[550px] flex justify-center items-center">

              <div className="relative w-full max-w-[500px] animate-slideInRight">

                {/* Glow Effect Behind Image */}

                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 via-teal-400/20 to-cyan-400/20 rounded-2xl blur-xl transform scale-110"></div>

               

                {/* Main Image Container */}

                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-white/50">

                  <img

                    src="/herocompaniespage.png"

                    alt="Employer Solutions and Recruitment Services"

                    className="w-full h-full] object-contain"

                  />

                 

                  {/* Overlay Gradient */}

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent"></div>

                </div>



               

               

              </div>

            </div>

          </div>

        </div>

      </section>





      {/* Stats Section */}

      <section className="py-20 bg-white relative overflow-hidden">

        <div className="container mx-auto px-6">

          <div className="text-center mb-16 scroll-reveal">

            <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-0 px-4 py-2">

              Why Choose Us

            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">

              Trusted by Leading Companies

            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">

              Our track record speaks for itself - delivering exceptional talent acquisition results

            </p>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {[

              {

                icon: Users,

                value: "10,000+",

                label: "Active Candidates",

                color: "from-emerald-500 to-teal-600"

              },

              {

                icon: Building,

                value: "500+",

                label: "Companies Served",

                color: "from-blue-500 to-cyan-600"

              },

              {

                icon: Target,

                value: "95%",

                label: "Success Rate",

                color: "from-purple-500 to-pink-600"

              },

              {

                icon: Clock,

                value: "48hrs",

                label: "Average Match Time",

                color: "from-orange-500 to-red-600"

              }

            ].map((stat, index) => {

              const Icon = stat.icon;

              return (

                <div

                  key={index}

                  className="text-center scroll-reveal bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 group"

                  style={{ animationDelay: `${index * 0.1}s` }}

                >

                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>

                    <Icon className="w-8 h-8 text-white" />

                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">

                    {stat.value}

                  </h3>

                  <p className="text-gray-600">{stat.label}</p>

                </div>

              );

            })}

          </div>

        </div>

      </section>



      {/* Services Section with Right-to-Left Scroll Animations */}

      <section ref={servicesRef} className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">

        <div className="container mx-auto px-6">

          <div className="text-center mb-32 scroll-reveal">

            <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-0 px-4 py-2">

              Our Recruitment Services

            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">

              Complete Hiring Solutions

            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">

              Comprehensive recruitment services tailored to your business needs and growth objectives

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

                          <span className="service-number block text-[8rem] lg:text-[10rem] font-black leading-none bg-gradient-to-br from-emerald-200 via-teal-300 to-cyan-300 bg-clip-text text-transparent select-none">

                            {String(index + 1).padStart(2, '0')}

                          </span>

                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 blur-3xl opacity-30 -z-10"></div>

                        </div>

                      </div>

                    </div>



                    {/* Service Card on Right */}

                    <div className="lg:col-span-9">

                      <Card

                        className="service-card-enhanced bg-white border border-gray-200 hover:border-emerald-300 shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden group relative"

                      >

                        {/* Animated Background Gradient */}

                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                       

                        {/* Decorative Corner */}

                        <div className={`absolute top-0 right-0 w-24 h-24 ${service.iconBg} opacity-10 rounded-bl-full transform group-hover:scale-150 transition-transform duration-700`}></div>

                       

                        <CardHeader className="pb-4 relative z-10">

                          <div className="flex items-start gap-4">

                            <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 flex-shrink-0`}>

                              <Icon className="w-8 h-8 text-white" />

                            </div>

                            <div className="flex-1">

                              <CardTitle className="text-2xl lg:text-3xl mb-2 text-gray-900 group-hover:text-emerald-700 transition-colors duration-500">

                                {service.title}

                              </CardTitle>

                              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-200">

                                <span className="text-emerald-700 font-semibold text-sm">

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

                                className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:from-emerald-50 hover:to-teal-50 transition-all duration-500 border border-gray-100 hover:border-emerald-200 group/feature"

                              >

                                <div className={`w-8 h-8 rounded-lg ${service.iconBg} flex items-center justify-center flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-300`}>

                                  <CheckCircle className="w-4 h-4 text-white" />

                                </div>

                                <span className="text-gray-700 text-sm font-medium">{feature}</span>

                              </div>

                            ))}

                          </div>

                         

                          <Button

                            className="bg-emerald-600 hover:bg-emerald-700 text-white group/btn px-6 shadow-lg hover:shadow-xl transition-all duration-300"

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






      {/* Company Showcase Sections */}
      
      {/* Fortune 500 Companies Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Content */}
              <div className="space-y-8">
                <div>
                  <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-0 px-4 py-2">
                    <Building className="w-4 h-4 mr-2" />
                    Fortune 500 Partners
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Trusted by Global <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Industry Leaders</span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    We partner with Fortune 500 companies across diverse industries to build world-class teams. Our expertise in executive search and strategic hiring has helped global corporations transform their workforce and achieve unprecedented growth.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Target, text: "C-Suite Executive Placement", desc: "Senior leadership recruitment for strategic positions" },
                    { icon: TrendingUp, text: "Scalable Hiring Solutions", desc: "End-to-end recruitment for rapid expansion" },
                   
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-emerald-100 hover:border-emerald-300 transition-all duration-300 group">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.text}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

             
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white/50 transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="/companies1.jpg"
                    alt="Fortune 500 Companies Partnership"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent"></div>
                  
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Startups Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Image */}
              <div className="relative order-2 lg:order-1">
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white/50 transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="/companies2.jpg"
                    alt="Tech Startups and Innovation"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 via-transparent to-transparent"></div>
                  
           
                </div>
              </div>

              {/* Content */}
              <div className="space-y-8 order-1 lg:order-2">
                <div>
                  <Badge className="mb-4 bg-teal-100 text-teal-700 border-0 px-4 py-2">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Startup Ecosystem
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Fueling <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Innovation</span> & Growth
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    From seed-stage startups to unicorn companies, we understand the unique talent needs of fast-growing tech companies. Our agile recruitment approach helps startups build exceptional teams while scaling rapidly in competitive markets.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Users, text: "Founding Team Assembly", desc: "Building core teams for early-stage startups" },
                    { icon: Briefcase, text: "Technical Talent Acquisition", desc: "Engineers, developers, and tech specialists" },
                  
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50/70 backdrop-blur-sm rounded-xl border border-gray-200 hover:border-teal-300 transition-all duration-300 group">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.text}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

             
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare & Life Sciences Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Content */}
              <div className="space-y-8">
                <div>
                  <Badge className="mb-4 bg-cyan-100 text-cyan-700 border-0 px-4 py-2">
                    <HeartHandshake className="w-4 h-4 mr-2" />
                    Healthcare Excellence
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Advancing <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Healthcare</span> Innovation
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    We specialize in recruiting top-tier healthcare professionals, from clinical specialists to biotech researchers. Our deep understanding of healthcare regulations, compliance requirements, and industry trends ensures perfect matches for critical roles.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: UserCheck, text: "Clinical Specialists", desc: "Board-certified physicians and healthcare practitioners" },
                    { icon: Search, text: "Research & Development", desc: "Scientists, researchers, and R&D professionals" },
                  
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-cyan-100 hover:border-cyan-300 transition-all duration-300 group">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.text}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

              
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white/50 transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="/companies3.jpg"
                    alt="Healthcare and Life Sciences"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 via-transparent to-transparent"></div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Services Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Image */}
              <div className="relative order-2 lg:order-1">
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white/50 transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="/companies4.jpg"
                    alt="Financial Services and Banking"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
                  
               
                </div>
              </div>

              {/* Content */}
              <div className="space-y-8 order-1 lg:order-2">
                <div>
                  <Badge className="mb-4 bg-blue-100 text-blue-700 border-0 px-4 py-2">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Financial Services
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Excellence in <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Financial</span> Recruitment
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    From investment banking to fintech startups, we connect financial institutions with exceptional talent. Our expertise spans traditional banking, wealth management, insurance, and emerging financial technologies, ensuring compliance and cultural fit.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Target, text: "Investment Banking", desc: "Senior bankers, analysts, and portfolio managers" },
                    { icon: Shield, text: "Risk & Compliance", desc: "Risk management and regulatory compliance experts" },
                    
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50/70 backdrop-blur-sm rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 group">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.text}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

             
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Process Section */}

      <section className="py-20 bg-white relative overflow-hidden">

        <div className="container mx-auto px-6">

          {/* Header */}

          <div className="text-center mb-16 scroll-reveal">

            <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-0 px-4 py-2">

              Our Process

            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">

              Streamlined Hiring Process

            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">

              A proven approach to finding the perfect candidates for your team

            </p>

          </div>



          {/* Steps */}

          <div className="max-w-5xl mx-auto">

            {hiringSteps.map((step, index) => {

              const Icon = step.icon;

              return (

                <div

                  key={index}

                  className="flex items-start mb-16 last:mb-0 scroll-reveal group"

                  style={{ animationDelay: `${index * 0.2}s` }}

                >

                  {/* Step number and icon */}

                  <div className="flex-shrink-0 mr-8">

                    <div className="relative">

                      <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-all duration-300">

                        {step.number}

                      </div>

                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>

                    </div>

                  </div>



                  {/* Step content */}

                  <div className="flex-1 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/20 rounded-2xl p-8 border border-gray-100 hover:border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300">

                    <div className="flex items-center mb-4">

                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-4 shadow-md">

                        <Icon className="w-6 h-6 text-white" />

                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">

                        {step.title}

                      </h3>

                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed">

                      {step.description}

                    </p>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </section>
     



     



      {/* Animation Styles */}

      <style>{`

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

       

        .animate-float {

          animation: float 3s ease-in-out infinite;

        }

       

        .animate-slideInLeft {

          animation: slideInLeft 0.8s ease-out forwards;

        }

       

        .animate-slideInRight {

          animation: slideInRight 0.8s ease-out forwards;

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

       

        .service-item-wrapper:nth-child(1) { transition-delay: 0.1s; }

        .service-item-wrapper:nth-child(2) { transition-delay: 0.2s; }

        .service-item-wrapper:nth-child(3) { transition-delay: 0.3s; }

        .service-item-wrapper:nth-child(4) { transition-delay: 0.4s; }

       

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

      `}</style>



      <Footer />

    </div>

  );

};



export default Employers;



