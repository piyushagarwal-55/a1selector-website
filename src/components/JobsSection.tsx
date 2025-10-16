import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Calendar, FileCheck, Briefcase, Target, Network, BarChart3, CheckCircle2, ArrowRight, Star, UserCheck, Award, Clock, Building2, ChevronDown } from 'lucide-react';

const JobsSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [activeFeature, setActiveFeature] = useState(null);
  const containerRef = useRef(null);
  const [chartData, setChartData] = useState([20, 35, 25, 45, 30, 50, 40]);
  const [flowNodes, setFlowNodes] = useState([
    { x: 20, y: 30, active: false },
    { x: 40, y: 50, active: false },
    { x: 60, y: 20, active: false },
    { x: 35, y: 70, active: false },
    { x: 75, y: 60, active: false }
  ]);

  useEffect(() => {
    const chartInterval = setInterval(() => {
      setChartData(prev => prev.map(() => Math.random() * 50 + 10));
    }, 3000);

    const flowInterval = setInterval(() => {
      setFlowNodes(prev => prev.map((node, idx) => ({
        ...node,
        active: Math.random() > 0.5
      })));
    }, 2000);

    const dots = document.querySelectorAll('.floating-dot');
    dots.forEach((dot, idx) => {
      const duration = 3 + Math.random() * 2;
      const delay = idx * 0.3;
      dot.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
    });

    return () => {
      clearInterval(chartInterval);
      clearInterval(flowInterval);
    };
  }, []);

  const workflowSteps = [
    {
      title: 'Job Creation & Promotion',
      icon: TrendingUp,
      color: 'from-emerald-400 to-emerald-600',
      bgColor: 'bg-emerald-500',
      description: 'AI-powered descriptions, one-click multi-platform posting',
      iconBg: 'bg-emerald-100'
    },
    {
      title: 'Candidate Sourcing & Screening',
      icon: Users,
      color: 'from-cyan-400 to-cyan-600',
      bgColor: 'bg-cyan-500',
      description: 'Smart resume parsing, dual-status tracking, pipeline visualization',
      iconBg: 'bg-cyan-100'
    },
    {
      title: 'Collaborative Interviews',
      icon: Calendar,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-500',
      description: 'Automated scheduling, structured feedback, team collaboration',
      iconBg: 'bg-blue-100'
    },
    {
      title: 'Offer & Onboarding',
      icon: FileCheck,
      color: 'from-teal-400 to-teal-600',
      bgColor: 'bg-teal-500',
      description: 'Digital offer letters, onboarding checklists',
      iconBg: 'bg-teal-100'
    }
  ];

  const features = [
    {
      icon: Briefcase,
      title: 'End-to-End Job Management',
      color: 'bg-blue-500'
    },
    {
      icon: Target,
      title: 'Intelligent Candidate Tracking',
      color: 'bg-purple-500'
    },
    {
      icon: Users,
      title: 'Integrated Client & Prospect CRM',
      color: 'bg-pink-500'
    },
    {
      icon: Calendar,
      title: 'Collaborative Interview Scheduling',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(-10px) translateX(-10px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.4); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
        }
        
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .workflow-card {
          animation: slide-in 0.6s ease-out forwards;
          animation-delay: calc(var(--index) * 0.15s);
          opacity: 0;
        }
        
        .floating-dot {
          animation: float 3s ease-in-out infinite;
        }
        
        .node-pulse {
          animation: node-pulse 1.5s ease-in-out infinite;
        }
        
        @keyframes node-pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-gradient {
          background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 50%, #99f6e4 100%);
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute top-10 right-20 w-4 h-4  rounded-full floating-dot opacity-60"></div>
        <div className="absolute top-32 right-40 w-3 h-3  rounded-full floating-dot opacity-50"></div>
        <div className="absolute bottom-20 left-32 w-5 h-5 bg-cyan-400 rounded-full floating-dot opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 ">
            {/* Left Content */}
            <div className="space-y-8">
             

              <div className=''>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                  Find the <span className="gradient-text">Top Designers</span>
                </h1>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  for your team
                </h1>
                <p className="text-lg text-gray-600 max-w-lg">
                  Connect with top professionals and build your dream team faster than ever before. Join thousands of successful companies.
                </p>
              </div>

            

            
            </div>

            {/* Right Content - Mock Interface */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  {/* Top Card */}
                  <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                          <Award className="w-6 h-6 text-teal-500" />
                        </div>
                        <div>
                          <div className="font-bold">50K+</div>
                          <div className="text-teal-100 text-sm">Successful Hires</div>
                        </div>
                      </div>
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Notification Cards */}
                  <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800">New Application</div>
                        <div className="text-sm text-gray-600">React Developer</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800">Interview Scheduled</div>
                        <div className="text-sm text-gray-600">Senior UI Designer - 2pm</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-pink-50 border-2 border-pink-200 rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800">New Messages</div>
                        <div className="text-sm text-gray-600">From HR Team</div>
                      </div>
                    </div>
                  </div>

                 
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-orange-400 rounded-2xl p-4 shadow-xl transform rotate-12 hover:rotate-0 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Numbers Section */}
     

    

      {/* Key Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful <span className="gradient-text">Features</span> at Your Fingertips
          </h2>
          <p className="text-xl text-gray-600">Everything you need to streamline your hiring process</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-4 transform transition-transform ${activeFeature === index ? 'rotate-12 scale-110' : ''}`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">Streamline your workflow with intelligent automation and insights</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 rounded-3xl p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full transform translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full transform -translate-x-48 translate-y-48"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
              Join thousands of companies who have streamlined their recruitment with XBeesHire
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-teal-600 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="bg-teal-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-teal-800 transition-all duration-300">
                Schedule Demo
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-6 text-teal-50">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>14-day free trial</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}

     
    </div>
  );
};

export default JobsSection;