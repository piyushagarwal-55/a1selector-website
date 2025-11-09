import React, { useState, useEffect } from "react";
import { BarChart3, Zap, Clock } from "lucide-react";

const XBeesHireWorkflowShort = () => {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    { icon: Clock, value: "67%", label: "Time Saved", color: "text-cyan-400" },
    { icon: BarChart3, value: "3.2x", label: "ROI Increase", color: "text-emerald-400" },
    { icon: Zap, value: "94%", label: "Automation Rate", color: "text-blue-400" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [metrics.length]);

  return (
    <div className="min-h-[300px] bg-slate-50 flex items-center justify-center p-4">
      <style>{`
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in-up {
          animation: slide-in-up 0.6s ease-out forwards;
        }
        .gradient-text {
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <div className="w-full max-w-6xl mx-auto p-8">
        {/* Centered Heading */}
        <div className="text-center mb-3 animate-slide-in-up">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-1">
            Our <span className="gradient-text">Streamlined</span> Workflow
          </h1>
          <p className="text-lg text-slate-500">
            Automate every step from job post to hire.
          </p>
        </div>

        {/* Two Images Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/recruitmentJourney.jpg"
            alt="Contract Hiring Professional"
            className="w-full h-[350px] lg:h-[400px] object-contain"
          />
          <img
            src="/recruitmentJourney2.jpg"
            alt="Recruitment Journey"
            className="w-full h-[350px] lg:h-[400px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default XBeesHireWorkflowShort;
