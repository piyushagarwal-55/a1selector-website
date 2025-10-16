import { Button } from "@/components/ui/button";
import { Search, ArrowRight, CheckCircle, Users, Briefcase, Star, Calendar, Mail, Trophy, TrendingUp, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  const heroRef = useRef(null);
  const [typedText, setTypedText] = useState("");
  const words = useMemo(() => ["Perfect Talent", "Best Developer", "Top Designers", "Expert Manager"], []);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation effect
  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setTypedText(
          isDeleting
            ? currentWord.substring(0, typedText.length - 1)
            : currentWord.substring(0, typedText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex, words]);

  useEffect(() => {
    // Enhanced GSAP animations
    const tl = gsap.timeline();
    
    tl.from(".hero-badge", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    .from(".hero-title", {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.4")
    .from(".hero-subtitle", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6")
    .from(".hero-stats", {
      y: 30,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.4")
    .from(".hero-buttons", {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out"
    }, "-=0.3")
    .from(".hero-image", {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    }, "-=0.8")
    .from(".hero-card", {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "elastic.out(1, 0.5)"
    }, "-=0.6");

    // Continuous floating animation for cards
    gsap.to(".hero-card", {
      y: "random(-15, 15)",
      x: "random(-5, 5)",
      rotation: "random(-3, 3)",
      duration: "random(3, 5)",
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 2,
        from: "random"
      }
    });

    // Parallax effect on background blobs
    gsap.to(".bg-blob", {
      y: "random(-30, 30)",
      x: "random(-30, 30)",
      scale: "random(0.95, 1.05)",
      duration: "random(6, 8)",
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 3,
        from: "random"
      }
    });

  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative bg-white pt-20 pb-16"
    >
      {/* Hero-specific gradient background - contained */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50"></div>
      {/* Animated background elements - HERO ONLY */}
      <div className="absolute inset-0 z-0">
        {/* Large gradient orbs - constrained within hero */}
        <div 
          className="bg-blob absolute top-[10%] left-[10%] w-[30vw] h-[25vh] bg-gradient-to-br from-emerald-400/30 to-teal-400/20 rounded-full blur-3xl"
        />
        <div 
          className="bg-blob absolute bottom-[10%] right-[10%] w-[25vw] h-[20vh] bg-gradient-to-tl from-teal-400/25 to-emerald-300/20 rounded-full blur-3xl"
        />
        <div 
          className="bg-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20vw] h-[15vh] bg-gradient-to-r from-emerald-200/20 to-teal-200/20 rounded-full blur-2xl"
        />
        
        {/* Grid pattern overlay with better visibility */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98120_1px,transparent_1px),linear-gradient(to_bottom,#10b98120_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-500/40 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-teal-500/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-emerald-400/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center w-full">
          
          {/* Left Column - Content */}
          <div className="max-w-2xl space-y-6 md:space-y-8 relative z-10">
            {/* Badge */}
            <motion.div
              className="hero-badge inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-emerald-100"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Trusted by 50K+ Companies</span>
            </motion.div>

            {/* Main Headline with Typing Effect */}
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Find the
              <br />
              <span className="relative inline-block min-w-[280px] md:min-w-[350px] lg:min-w-[420px]">
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  {typedText}
                  <motion.span
                    className="inline-block w-1 h-[0.9em] bg-gradient-to-b from-emerald-600 to-teal-600 ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </span>
                <motion.div
                  className="absolute -inset-3 bg-gradient-to-r from-emerald-100/40 to-teal-100/40 rounded-2xl -z-10 blur-xl"
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.4, 0.6, 0.4]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </span>
              <br />
              for your team
            </h1>
            
            <motion.p 
              className="hero-subtitle text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed"
              animate={{
                y: [0, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Connect with top professionals and build your dream team faster than ever before. Join thousands of successful companies.
            </motion.p>
            
            {/* Stats Row */}
            <div className="flex flex-wrap gap-6">
              <motion.div 
                className="hero-stats flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">98%</p>
                  <p className="text-sm text-gray-600">Success Rate</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="hero-stats flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center shadow-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">24h</p>
                  <p className="text-sm text-gray-600">Avg. Hire Time</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="hero-stats flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">10K+</p>
                  <p className="text-sm text-gray-600">Active Talents</p>
                </div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-buttons flex flex-col sm:flex-row gap-3 md:gap-4">
              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  onClick={() => (window.location.href = '/employers')}
                  className="px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 rounded-xl relative overflow-hidden group"
                >
                  <motion.span
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                    animate={{
                      x: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </span>
                </Button>
              </motion.div>
              
              
            </div>

            {/* Trust Indicators */}
            <motion.div 
              className="flex items-center gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 border-2 border-white shadow-lg flex items-center justify-center text-white font-semibold text-sm">
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">2,500+</span> companies hired this week
              </p>
            </motion.div>
          </div>

          {/* Right Column - Enhanced Professional Design */}
          <div className="relative flex justify-center lg:justify-end z-10">
            <div className="relative w-full max-w-[450px] mx-auto">
              
              {/* Background Elements */}
              <div className="absolute inset-0">
                {/* Animated gradient orbs behind image */}
                <motion.div 
                  className="absolute top-[-10%] left-[-10%] w-32 h-32 bg-gradient-to-br from-emerald-400/40 to-teal-400/30 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 10, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute bottom-[-10%] right-[-10%] w-40 h-40 bg-gradient-to-tl from-blue-400/30 to-purple-400/20 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -15, 0],
                    y: [0, 15, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>

              {/* Main Image Container with Enhanced Styling */}
              <motion.div 
                className="relative w-full h-[520px] group"
                animate={{ 
                  y: [0, -8, 0],
                  rotateY: [0, 2, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                whileHover={{ scale: 1.02, y: -12 }}
              >
                {/* Glow effect behind image */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/15 to-blue-500/20 rounded-3xl blur-xl opacity-60"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.6, 0.8, 0.6]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Main Professional Image */}
                <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl border-4 border-white/50 bg-gradient-to-br from-gray-50 to-gray-100">
                  <motion.img
                    src="/candidate1.png"
                    alt="Professional"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  
                  {/* Overlay gradient for better card visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                </div>

                {/* Enhanced Floating Success Cards */}
                
                {/* Top Left - Success Stats with Animation */}
                <motion.div 
                  className="absolute top-[8%] left-[-12%] bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/50 min-w-[180px]"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 2,
                    y: -5,
                    boxShadow: "0 25px 50px rgba(16, 185, 129, 0.3)"
                  }}
                  initial={{ opacity: 0, x: -50, y: -20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <Users className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <motion.div 
                        className="text-2xl font-bold text-gray-900"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        50K+
                      </motion.div>
                      <div className="text-sm text-gray-600">Successful Hires</div>
                    </div>
                  </div>
                  <motion.div 
                    className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360] 
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <CheckCircle className="w-4 h-4 text-white" />
                  </motion.div>
                </motion.div>

                {/* Top Right - Achievement Badge with Pulse */}
                <motion.div 
                  className="absolute top-[12%] right-[-8%] w-20 h-20 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 rounded-2xl shadow-2xl flex items-center justify-center border-4 border-white"
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 15,
                    y: -8
                  }}
                  initial={{ opacity: 0, scale: 0, rotate: 45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                >
                  <motion.div
                    animate={{ 
                      y: [0, -3, 0],
                      rotate: [0, -5, 5, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Trophy className="w-10 h-10 text-white drop-shadow-lg" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-yellow-300/50 to-orange-300/50 rounded-2xl"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>

                {/* Middle Right - Interview Scheduling Card */}
                <motion.div 
                  className="absolute top-[40%] right-[-15%] bg-white/95 backdrop-blur-xl px-5 py-4 rounded-2xl shadow-2xl border border-white/50 min-w-[240px]"
                  whileHover={{ 
                    scale: 1.05, 
                    x: -8,
                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
                  }}
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg"
                      animate={{ 
                        boxShadow: [
                          "0 0 20px rgba(59, 130, 246, 0.3)",
                          "0 0 30px rgba(59, 130, 246, 0.5)",
                          "0 0 20px rgba(59, 130, 246, 0.3)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Calendar className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">Interview Scheduled</div>
                      <div className="text-sm text-gray-600">Senior Developer Role</div>
                    </div>
                  </div>
              
                  
                </motion.div>

                {/* Bottom Left - Job Application Card */}
                <motion.div 
                  className="absolute bottom-[20%] left-[-18%] bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/50 min-w-[220px]"
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 25px 50px rgba(16, 185, 129, 0.3)"
                  }}
                  initial={{ opacity: 0, y: 50, x: -30 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ delay: 2.0, duration: 0.8, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Briefcase className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <div className="font-semibold text-gray-900">New Application</div>
                      <div className="text-sm text-gray-600">React Developer</div>
                    </div>
                  </div>
                  <motion.button 
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-2 px-4 rounded-lg text-sm font-medium shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                  </motion.button>
                </motion.div>

                {/* Bottom Right - Rating & Reviews */}
                <motion.div 
                  className="absolute bottom-[12%] right-[-10%] bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/50"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: -2,
                    boxShadow: "0 25px 50px rgba(234, 179, 8, 0.3)"
                  }}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 2.4, duration: 0.8, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <motion.div 
                      className="flex"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {[1, 2, 3, 4, 5].map((star) => (
                        <motion.div
                          key={star}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 2.4 + star * 0.1 }}
                        >
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </motion.div>
                    <motion.span 
                      className="text-lg font-bold text-gray-900"
                      animate={{ color: ["#1f2937", "#059669", "#1f2937"] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      4.9
                    </motion.span>
                  </div>
                  <div className="text-sm text-gray-600">Perfect Match Rate</div>
                </motion.div>

                {/* Bottom Center - Message Notification */}
                <motion.div 
                  className="absolute bottom-[5%] left-[20%] bg-white/95 backdrop-blur-xl p-3 rounded-xl shadow-2xl border border-white/50 flex items-center gap-3"
                  whileHover={{ scale: 1.05, y: -3 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: [0, -2, 0],
                    x: [0, 1, 0]
                  }}
                  transition={{ 
                    opacity: { delay: 2.8, duration: 0.8, ease: "easeOut" },
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    x: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <motion.div 
                    className="relative w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg"
                    animate={{ 
                      boxShadow: [
                        "0 0 0 0 rgba(6, 182, 212, 0.4)",
                        "0 0 0 8px rgba(6, 182, 212, 0)",
                        "0 0 0 0 rgba(6, 182, 212, 0.4)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Mail className="w-5 h-5 text-white" />
                    <motion.span
                      className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        backgroundColor: ["#ef4444", "#f97316", "#ef4444"]
                      }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <span className="text-xs text-white font-bold">3</span>
                    </motion.span>
                  </motion.div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">New Messages</div>
                    <div className="text-xs text-gray-600">From HR Teams</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;