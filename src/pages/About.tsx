import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users, 
  ArrowRight, 
  Download, 
  Rocket, 
  Globe, 
  Zap, 
  Coffee, 
  TrendingUp, 
  Award, 
  Shield, 
  Sparkles,
  Target,
  Lightbulb,
  Handshake,
  Building,
  Linkedin,
  Mail,
  Phone,
  
} from "lucide-react";
import Footer from "@/components/footer";
import Navigation from './../components/Navigation';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  // Scroll reveal animation
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-reveal');
      elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.8) {
          setIsVisible(prev => ({ ...prev, [index]: true }));
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Stats data
  const statsData = [
    {
      icon: Users,
      value: "15,000+",
      label: "Successful Placements",
      description: "Connecting top talent with leading companies",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Building,
      value: "500+",
      label: "Partner Companies",
      description: "Trusted by industry leaders worldwide",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Award,
      value: "98%",
      label: "Satisfaction Rate",
      description: "Exceptional service delivery record",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: TrendingUp,
      value: "10+",
      label: "Years Experience",
      description: "Decade of recruitment excellence",
      color: "from-blue-500 to-blue-600"
    }
  ];

  // Journey steps
  const journeySteps = [
    {
      year: "2014",
      title: "The Beginning",
      description: "Founded with a vision to revolutionize recruitment through technology and human connection. What started as a small team with big dreams has grown into something extraordinary. Our founders believed that matching the right talent with the right opportunity required more than just algorithms – it needed genuine human insight, empathy, and understanding of both candidate aspirations and company culture.",
      image: "/aboutus2.png",
      color: "bg-gradient-to-r from-emerald-500 to-emerald-600"
    },
    {
      year: "2017",
      title: "Rapid Growth",
      description: "Expanded our services globally and built strategic partnerships across multiple industries. We achieved our first major milestone of 1000+ successful placements, establishing ourselves as a trusted partner for both startups and Fortune 500 companies. This period marked our evolution from a local recruitment firm to a recognized player in the global talent acquisition landscape, with offices in three major cities.",
      image: "/aboutus3.png",
      color: "bg-gradient-to-r from-teal-500 to-teal-600"
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Pioneered AI-powered matching technology and virtual recruitment processes, adapting to the new world of remote work. We invested heavily in cutting-edge technology platforms, developed proprietary algorithms for skill matching, and created seamless virtual interview experiences. This transformation not only helped us navigate global challenges but positioned us at the forefront of modern recruitment innovation.",
      image: "/aboutus4.png",
      color: "bg-gradient-to-r from-cyan-500 to-cyan-600"
    },
    {
      year: "2024",
      title: "Industry Leader",
      description: "Recognized as a top recruitment agency with global presence and innovative solutions for modern workforce challenges. Today, we're proud to serve over 500 companies worldwide, maintain a 98% client satisfaction rate, and have successfully placed over 15,000 professionals. Our commitment to excellence and innovation continues to drive us forward as we shape the future of talent acquisition.",
      image: "/aboutus5.png",
      color: "bg-gradient-to-r from-blue-500 to-blue-600"
    }
  ];

  // Company values
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We set the highest standards and consistently deliver exceptional results that exceed expectations.",
      color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      textColor: "text-emerald-700"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Trust and transparency guide every interaction, ensuring ethical practices in all our partnerships.",
      color: "bg-gradient-to-br from-teal-500 to-teal-600",
      textColor: "text-teal-700"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technology and creative solutions to solve complex recruitment challenges.",
      color: "bg-gradient-to-br from-cyan-500 to-cyan-600",
      textColor: "text-cyan-700"
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "Building long-term relationships based on mutual success and collaborative growth strategies.",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      textColor: "text-blue-700"
    }
  ];

  // Leadership team
  const leadership = [
    {
      name: "Sarah Johnson",
      position: "Chief Executive Officer",
      image: "/sarahjohnson.png",
      description: "With 15+ years in HR leadership, Sarah drives our strategic vision and company culture.",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      email: "sarah@talentbridge.com"
    },
    {
      name: "Michael Chen",
      position: "Chief Technology Officer",
      image: "/MichaelChen.png",
      description: "Michael leads our tech innovation, developing AI-powered recruitment solutions.",
      linkedin: "https://linkedin.com/in/michaelchen",
      email: "michael@talentbridge.com"
    },
    {
      name: "Emily Rodriguez",
      position: "Head of Talent Acquisition",
      image: "/Emilyrodriguez.png",
      description: "Emily oversees our global recruitment operations and client success initiatives.",
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      email: "emily@talentbridge.com"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
       <Navigation />
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-teal-200 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-cyan-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-200 shadow-lg animate-slideInLeft">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <Heart className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-xs text-gray-700 font-semibold">About TalentBridge</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block text-gray-900 animate-slideInLeft" style={{ animationDelay: '0.2s' }}>Bridging Talent</span>
                  <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-slideInLeft" style={{ animationDelay: '0.4s' }}>
                    With Opportunity
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl animate-slideInLeft" style={{ animationDelay: '0.8s' }}>
                  We're more than a recruitment agency. We're your strategic partners in building exceptional teams that drive innovation, growth, and success in today's competitive landscape.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-slideInLeft" style={{ animationDelay: '1s' }}>
                {[
                  { icon: Rocket, text: "10+ Years Experience" },
                  { icon: Globe, text: "Global Reach" },
                  { icon: Zap, text: "AI-Powered Matching" },
                  { icon: Coffee, text: "Human-Centered Approach" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/50 backdrop-blur-sm rounded-xl border border-emerald-100 hover:border-emerald-300 transition-all duration-300 group">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slideInLeft" style={{ animationDelay: '1.2s' }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 shadow-lg shadow-emerald-200 transform hover:scale-105 transition-all duration-300 group"
                >
                  <Users className="mr-2 w-5 h-5" />
                  Meet Our Team
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-400 px-8 py-4 transition-all duration-300 group"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Company Profile
                </Button>
              </div>
            </div>

            {/* Right Content - Company Image */}
            <div className="relative flex justify-center items-center animate-slideInRight">
              <div className="relative w-full max-w-lg">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 via-teal-400/20 to-cyan-400/20 rounded-3xl blur-xl transform scale-110"></div>
                
                {/* Image Container */}
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white/50 transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="/aboutus1.png"
                    alt="TalentBridge Team"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent"></div>
                  
                  {/* Floating Stats Card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/50">
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="text-emerald-600 font-bold">15,000+</span>
                        <p className="text-gray-600 text-xs">Successful Placements</p>
                      </div>
                      <div className="text-sm text-center">
                        <span className="text-teal-600 font-bold">500+</span>
                        <p className="text-gray-600 text-xs">Partner Companies</p>
                      </div>
                      <div className="text-sm text-right">
                        <span className="text-cyan-600 font-bold">98%</span>
                        <p className="text-gray-600 text-xs">Satisfaction Rate</p>
                      </div>
                    </div>
                  </div>
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
              Our Impact
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Numbers That Tell Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A decade of excellence in connecting top talent with leading organizations worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center scroll-reveal bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {stat.value}
                  </h3>
                  <p className="text-gray-900 font-semibold mb-2">{stat.label}</p>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-0 px-4 py-2">
              Our Journey
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              From Vision to Industry Leader
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how we've evolved from a startup dream to a global recruitment powerhouse
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {journeySteps.map((step, index) => (
              <div key={index} className={`flex items-center mb-16 last:mb-0 scroll-reveal ${index % 2 === 0 ? '' : 'flex-row-reverse'}`} style={{ animationDelay: `${index * 0.2}s` }}>
                
                {/* Image */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <img
                      src={step.image}
                      alt={step.title}
                      className="relative w-full h-80 object-contain rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                  <div className="relative">
                    {/* Year Badge */}
                    <div className={`inline-flex items-center px-4 py-2 rounded-full ${step.color} text-white font-bold text-lg shadow-lg mb-4`}>
                      {step.year}
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-0 px-4 py-2">
              Our Values
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The core principles that guide every interaction and decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="scroll-reveal group hover:shadow-xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-br from-white to-gray-50/50" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Color accent top */}
                  <div className={`h-1 ${value.color.replace('bg-', 'bg-gradient-to-r from-')} to-${value.color.split('-')[1]}-300`}></div>
                  
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className={`text-2xl font-bold mb-2 ${value.textColor} group-hover:scale-105 transition-transform duration-300`}>
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="text-center">
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-0 px-4 py-2">
              Leadership Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced leaders driving innovation and excellence in talent acquisition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="scroll-reveal group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Leader Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Social Links Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <a href={leader.linkedin} className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all duration-300">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={`mailto:${leader.email}`} className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all duration-300">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                    {leader.name}
                  </CardTitle>
                  <p className="text-emerald-600 font-semibold">
                    {leader.position}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {leader.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

   

      {/* Animation Styles */}
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slideInLeft { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slideInRight { animation: slideInRight 0.8s ease-out forwards; }
        .scroll-reveal { 
          opacity: 0; 
          transform: translateY(50px); 
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1); 
        }
        .scroll-reveal.visible { 
          opacity: 1; 
          transform: translateY(0); 
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default About;