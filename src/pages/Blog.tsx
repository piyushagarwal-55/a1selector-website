import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/footer";
import { FileText, Search, Users, UserCheck,Download,Star ,Shield, Heart, Award, TrendingUp,CheckCircle2 ,ArrowRight,Calendar, Clock, User } from "lucide-react";

const blog = () => {
     const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Add your subscription logic here (e.g., API call)
    alert(`Subscribed with email: ${email}`);
    setEmail(""); // clear input
  };
const articles = [
  {
    id: 2,
    title: "How to Ace Your Remote Job Interview",
    description:
      "Essential tips and best practices for succeeding in virtual interviews and landing remote positions in today's competitive job market.",
    image: "/placeholder.svg?height=200&width=400",
    badge: "Career Tips",
    date: "Dec 12, 2023",
    author: "Michael Chen",
    readTime: "7 min read",
    link: "/blog/2",
  },
  {
    id: 3,
    title: "Building Diverse and Inclusive Teams",
    description:
      "Strategies for employers to create more diverse hiring practices and inclusive workplace cultures that drive innovation and success.",
    image: "/placeholder.svg?height=200&width=400",
    badge: "HR Insights",
    date: "Dec 10, 2023",
    author: "Emily Rodriguez",
    readTime: "6 min read",
    link: "/blog/3",
  },
  {
    id: 4,
    title: "Salary Negotiation: A Complete Guide",
    description:
      "Master the art of salary negotiation with proven strategies, scripts, and tips to get the compensation you deserve.",
    image: "/placeholder.svg?height=200&width=400",
    badge: "Career Tips",
    date: "Dec 8, 2023",
    author: "David Kim",
    readTime: "8 min read",
    link: "/blog/4",
  },
  {
    id: 5,
    title: "The Future of Work: Hybrid vs Remote",
    description:
      "Exploring the evolving workplace landscape and what it means for both employers and employees in the post-pandemic world.",
    image: "/placeholder.svg?height=200&width=400",
    badge: "Industry News",
    date: "Dec 5, 2023",
    author: "Lisa Wang",
    readTime: "6 min read",
    link: "/blog/5",
  },
  {
    id: 6,
    title: "AI in Recruitment: Opportunities and Challenges",
    description:
      "How artificial intelligence is transforming the recruitment industry and what it means for the future of hiring.",
    image: "/placeholder.svg?height=200&width=400",
    badge: "Tech Trends",
    date: "Dec 3, 2023",
    author: "Alex Thompson",
    readTime: "9 min read",
    link: "/blog/6",
  },
];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
 
  <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Career Insights &amp; Industry News
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Stay updated with the latest trends in recruitment, career development, and workplace insights.
          </p>
        </div>

        {/* Search Input */}
        <div className="max-w-2xl mx-auto mb-8 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search articles..."
            className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 pl-10 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 justify-center">
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all shadow-xs h-8 rounded-md gap-1.5 px-3 bg-teal-600 hover:bg-teal-700 text-white">
            All
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all border shadow-xs h-8 rounded-md gap-1.5 px-3 border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent">
            Tech Trends
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all border shadow-xs h-8 rounded-md gap-1.5 px-3 border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent">
            Career Tips
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all border shadow-xs h-8 rounded-md gap-1.5 px-3 border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent">
            HR Insights
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all border shadow-xs h-8 rounded-md gap-1.5 px-3 border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent">
            Industry News
          </button>
        </div>
      </div>
    </section>
 
<section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">Featured Article</h2>

          <div className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
            <div className="md:flex">
              {/* Article Image */}
              <div className="md:w-1/2">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Top 10 Tech Skills in Demand for 2024"
                  className="w-full h-64 md:h-full object-cover bg-teal-100"
                />
              </div>

              {/* Article Content */}
              <div className="md:w-1/2 p-8">
                {/* Badge & Meta */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 bg-teal-100 text-teal-700">
                    Tech Trends
                  </span>

                  <div className="flex items-center text-sm text-slate-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    Dec 15, 2023
                  </div>

                  <div className="flex items-center text-sm text-slate-500">
                    <Clock className="h-4 w-4 mr-1" />
                    5 min read
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-800 mb-4 hover:text-teal-600 cursor-pointer">
                  Top 10 Tech Skills in Demand for 2024
                </h3>

                {/* Description */}
                <p className="text-slate-600 mb-6">
                  Discover the most sought-after technical skills that employers are looking for this year, from AI and machine learning to cloud computing and cybersecurity.
                </p>

                {/* Author & Button */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-slate-400 mr-2" />
                    <span className="text-sm text-slate-600">Sarah Johnson</span>
                  </div>

                  <a href="/blog/1">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 bg-teal-600 text-white hover:bg-teal-700">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
 

 <section className="pb-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800">Latest Articles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover bg-teal-100 hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="px-6">
                <div className="flex items-center gap-4 mb-2">
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 bg-teal-100 text-teal-700">
                    {article.badge}
                  </span>

                  <div className="flex items-center text-sm text-slate-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {article.date}
                  </div>
                </div>

                <div className="leading-none font-semibold text-slate-800 hover:text-teal-600 cursor-pointer line-clamp-2">
                  {article.title}
                </div>

                <div className="text-sm text-slate-600 mb-4 line-clamp-3">
                  {article.description}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-slate-500">
                    <User className="h-4 w-4 mr-1" />
                    {article.author}
                  </div>

                  <div className="flex items-center text-sm text-slate-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>

                <a href={article.link}>
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all h-8 rounded-md gap-1.5 px-3 w-full mt-4 text-teal-600 hover:text-teal-700 hover:bg-teal-50">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
 <section className="py-16 bg-teal-600">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-teal-100 mb-8">
            Get the latest career insights and industry news delivered to your inbox weekly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none bg-white border-white text-slate-800 placeholder:text-slate-400 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
            />
            <button
              onClick={handleSubscribe}
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all shadow-xs h-9 px-4 py-2 bg-white text-teal-600 hover:bg-slate-50 whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
       <Footer />
    </div>
  );
};

export default blog;