import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Calendar, FileCheck, CheckCircle2, Zap, BarChart3, Clock } from 'lucide-react';

const XBeesHireWorkflowShort = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [activeMetric, setActiveMetric] = useState(0);

  const workflowSteps = [
    {
      title: "Job Creation & Promotion",
      description: "AI-powered descriptions and multi-platform posting.",
      icon: TrendingUp,
      color: "from-emerald-500 to-teal-600",
      iconBg: "bg-emerald-600",
    },
    {
      title: "Candidate Sourcing",
      description: "Smart resume parsing and pipeline visualization.",
      icon: Users,
      color: "from-cyan-500 to-blue-500",
      iconBg: "bg-cyan-600",
    },
    {
      title: "Collaborative Interviews",
      description: "Automated scheduling and structured feedback.",
      icon: Calendar,
      color: "from-blue-500 to-indigo-600",
      iconBg: "bg-blue-600",
    },
    {
      title: "Offer & Onboarding",
      description: "Digital offer letters and onboarding checklists.",
      icon: FileCheck,
      color: "from-teal-500 to-cyan-600",
      iconBg: "bg-teal-600",
    }
  ];

  const metrics = [
    { icon: Clock, value: "67%", label: "Time Saved", color: "text-cyan-400" },
    { icon: BarChart3, value: "3.2x", label: "ROI Increase", color: "text-emerald-400" },
    { icon: Zap, value: "94%", label: "Automation Rate", color: "text-blue-400" }
  ];
  
  const automationFeatures = [
    "Smart Workflow Engine",
    "Data-Driven Analytics",
    "Configurable Triggers & Actions",
    "Real-time Reporting Dashboards",
  ];

  // Cycle through metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric(prev => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [metrics.length]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <style>{`
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .animate-slide-in-up {
          animation: slide-in-up 0.6s ease-out forwards;
        }
        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          background-size: 1000px 100%;
          animation: shimmer 4s infinite;
        }
        .gradient-text {
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <div className="w-full max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8 overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Left Column: Workflow Steps */}
        <div className="animate-slide-in-up" style={{animationDelay: '0.1s'}}>
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
              Our <span className="gradient-text">Streamlined</span> Workflow
            </h1>
            <p className="text-lg text-slate-500">Automate every step from job post to hire.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            {/* Right Column: Automation & Insights */}
        <div className="animate-slide-in-up bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden" style={{animationDelay: '0.3s'}}>
          <div className="absolute inset-0 shimmer-effect opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-6">Intelligent Automation & Insights</h2>
            
            {/* Animated Metrics */}
            <div className="bg-slate-700/50 rounded-xl p-5 mb-6 backdrop-blur-sm text-center">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={index} className={`transition-opacity duration-500 ${activeMetric === index ? 'opacity-100' : 'opacity-0 absolute'}`}>
                    {activeMetric === index && (
                       <div className="flex flex-col items-center">
                         <Icon className={`w-10 h-10 mb-2 ${metric.color}`} />
                         <span className="text-4xl font-bold text-white">{metric.value}</span>
                         <span className="text-slate-300">{metric.label}</span>
                       </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Feature List */}
            <div className="space-y-3">
              {automationFeatures.map((feature, index) => (
                <div key={index} className="flex items-center text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
          </div>
        </div>
 <div className="relative lg:h-[540px] flex justify-center items-center ">
        <div className="relative w-full max-w-[650px]  animate-slideInRight ">
          {/* Glow Effect Behind Image */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 via-teal-400/20 to-blue-400/20 rounded-2xl blur-xl transform scale-110"></div>
          
          {/* Main Image Container */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-white/50 mb-2">
            <img
              src="/recruitmentJourney.jpg"
              alt="Contract Hiring Professional"
              className="w-full h-auto object-cover"
            />
           
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent"></div>
          </div>
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-white/50">
            <img
              src="/recruitmentJourney2.jpg"
              alt="Contract Hiring Professional"
              className="w-full h-auto object-cover"
            />
           
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent"></div>
          </div>
          </div>
          </div>
       
      </div>
    </div>
  );
};

export default XBeesHireWorkflowShort;