import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/footer";
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  BookOpen, 
  TrendingUp, 
  Heart, 
  Share2,
  Filter,
  Eye,
  MessageCircle,
  ChevronRight,
  Star,
  Download,
  Bell,
  Bookmark
} from "lucide-react";

const Blog = () => {
  const [email, setEmail] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visiblePosts, setVisiblePosts] = useState(6);

  // Scroll reveal animation
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-reveal');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.8) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Re-trigger animations when filters change
  useEffect(() => {
    // Reset visible posts when category changes
    setVisiblePosts(6);
    
    // Remove visible class from all elements
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((element) => {
      element.classList.remove('visible');
    });
    
    // Trigger animation check after a small delay to allow DOM update
    const timer = setTimeout(() => {
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.8) {
          element.classList.add('visible');
        }
      });
    }, 100);
    
    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery]);

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed successfully with: ${email}`);
      setEmail("");
    }
  };

  const categories = ["All", "Career Tips", "HR Insights", "Industry News", "Tech Trends", "Leadership", "Remote Work"];

  const featuredArticle = {
    id: 1,
    title: "The Future of Talent Acquisition: AI and Human Connection",
    description: "Discover how artificial intelligence is revolutionizing recruitment while maintaining the essential human touch that makes hiring successful. Explore the latest trends, tools, and strategies that are shaping the future of talent acquisition.",
    image: "/bloghero.png",
    badge: "Featured",
    date: "December 15, 2023",
    author: "Sarah Johnson",
    readTime: "12 min read",
    views: "2.5K",
    comments: 48,
    link: "/blog/featured"
  };

  const articles = [
    {
      id: 2,
      title: "Mastering Remote Work: A Complete Guide for Modern Professionals",
      description: "Essential strategies for thriving in remote work environments, from setting up your home office to maintaining work-life balance and building meaningful connections with your team.",
      image: "/blog1.png",
      badge: "Remote Work",
      date: "December 12, 2023",
      author: "Michael Chen",
      readTime: "8 min read",
      views: "1.8K",
      comments: 32,
      link: "/blog/2",
    },
    {
      id: 3,
      title: "Building Inclusive Teams: Diversity as a Competitive Advantage",
      description: "Learn how diverse and inclusive hiring practices drive innovation, improve company culture, and lead to better business outcomes in today's global marketplace.",
      image: "/blog2.png",
      badge: "HR Insights",
      date: "December 10, 2023",
      author: "Emily Rodriguez",
      readTime: "7 min read",
      views: "2.1K",
      comments: 45,
      link: "/blog/3",
    },
    {
      id: 4,
      title: "Salary Negotiation Mastery: Get the Compensation You Deserve",
      description: "Master the art of salary negotiation with proven strategies, real-world examples, and expert tips that will help you secure better compensation packages.",
      image: "/blog3.jpg",
      badge: "Career Tips",
      date: "December 8, 2023",
      author: "David Kim",
      readTime: "9 min read",
      views: "3.2K",
      comments: 67,
      link: "/blog/4",
    },
    {
      id: 5,
      title: "Leadership in the Digital Age: Adapting to New Challenges",
      description: "Explore how modern leaders are adapting their management styles to lead distributed teams, embrace digital transformation, and drive organizational success.",
      image: "/blog4.jpg",
      badge: "Leadership",
      date: "December 5, 2023",
      author: "Lisa Wang",
      readTime: "6 min read",
      views: "1.9K",
      comments: 38,
      link: "/blog/5",
    },
    {
      id: 6,
      title: "Industry Trends 2024: What Employers Need to Know",
      description: "Stay ahead of the curve with insights into emerging industry trends, skill requirements, and market dynamics that will shape recruitment in 2024 and beyond.",
      image: "/blog5.png",
      badge: "Industry News",
      date: "December 3, 2023",
      author: "Alex Thompson",
      readTime: "10 min read",
      views: "2.7K",
      comments: 52,
      link: "/blog/6",
    },
    {
      id: 7,
      title: "Tech Skills That Matter: Preparing for Tomorrow's Jobs",
      description: "Discover the most in-demand technical skills, emerging technologies, and career paths that will dominate the job market in the coming years.",
      image: "/blog.jpg",
      badge: "Tech Trends",
      date: "December 1, 2023",
      author: "Jennifer Park",
      readTime: "8 min read",
      views: "2.3K",
      comments: 41,
      link: "/blog/7",
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || article.badge === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const loadMore = () => {
    setVisiblePosts(prev => prev + 3);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/30 via-white to-teal-50/30">
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
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-xs text-gray-700 font-semibold">TalentBridge Blog</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block text-gray-900 animate-slideInLeft" style={{ animationDelay: '0.2s' }}>Insights &amp;</span>
                  <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-slideInLeft" style={{ animationDelay: '0.4s' }}>
                    Innovation
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl animate-slideInLeft" style={{ animationDelay: '0.8s' }}>
                  Discover the latest trends in recruitment, career development, and workplace innovation. Expert insights to help you navigate the future of work.
                </p>
              </div>

              {/* Search Bar */}
              <div className="animate-slideInLeft" style={{ animationDelay: '1s' }}>
                <div className="relative max-w-lg">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or authors..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-200 shadow-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-emerald-200 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Quick Stats */}
             
            </div>

            {/* Right Content - Blog Hero Image */}
            <div className="relative flex justify-center items-center animate-slideInRight">
              <div className="relative w-full max-w-lg">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 via-teal-400/20 to-cyan-400/20 rounded-3xl blur-xl transform scale-110"></div>
                
                {/* Image Container */}
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white/50 transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="/blogherosection.png"
                    alt="Blog Insights and Innovation"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/50">
                    <div className="text-center">
                      <h4 className="text-emerald-600 font-bold text-lg mb-1">Stay Informed</h4>
                      <p className="text-gray-600 text-sm">Latest insights from industry experts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 scroll-reveal">
              <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-0 px-4 py-2">
                Featured Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Editor's Pick
              </h2>
            </div>

            <Card className="scroll-reveal overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-white to-emerald-50/30 group hover:shadow-3xl transition-all duration-500">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-80 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Badge Overlay */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 px-3 py-1 shadow-lg">
                      <Star className="w-4 h-4 mr-1" />
                      {featuredArticle.badge}
                    </Badge>
                  </div>

                  {/* Stats Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <div className="flex items-center gap-4 text-white text-sm">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {featuredArticle.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {featuredArticle.comments}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredArticle.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredArticle.readTime}
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                    {featuredArticle.title}
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {featuredArticle.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{featuredArticle.author}</p>
                        <p className="text-sm text-gray-600">Editor-in-Chief</p>
                      </div>
                    </div>

                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 shadow-lg group"
                    >
                      Read Article
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg scale-105'
                    : 'bg-white hover:bg-emerald-50 text-gray-700 hover:text-emerald-700 border border-gray-200 hover:border-emerald-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our collection of insights, tips, and industry knowledge
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.slice(0, visiblePosts).map((article, index) => (
                <Card 
                  key={`${article.id}-${selectedCategory}`} 
                  className="group overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0 px-2 py-1 text-xs">
                        {article.badge}
                      </Badge>
                    </div>

                    {/* Bookmark Icon */}
                    <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-emerald-500 hover:text-white">
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>

                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors leading-tight">
                      {article.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {article.description}
                    </CardDescription>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{article.author}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {article.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          {article.comments}
                        </div>
                      </div>
                    </div>

                    <Button
                      className="w-full mt-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white group/btn"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            {filteredArticles.length > visiblePosts && (
              <div className="text-center mt-12">
                <Button
                  onClick={loadMore}
                  size="lg"
                  variant="outline"
                  className="border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-400 px-8 py-4 transition-all duration-300 group"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Load More Articles
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

     

      {/* Animation Styles */}
      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
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
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default Blog;