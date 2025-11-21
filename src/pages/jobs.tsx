import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { FileText, Search, Users, UserCheck, Download, Star, Shield, Heart, Award, TrendingUp, CheckCircle2, ArrowRight, MapPin, Clock, DollarSign, Bookmark, Filter, ChevronDown, Briefcase, User, Eye, BarChart3, ExternalLink } from "lucide-react";

const Jobs = () => {
    const [query, setQuery] = useState("");
    const [location, setLocation] = useState("");
    const [jobType] = useState("Job Type");
    const [experience] = useState("Experience");
    const [salary, setSalary] = useState(0);
    const [title, setTitle] = useState("");
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [category, setCategory] = useState("");
    const [scrollY, setScrollY] = useState(0);
    
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-reveal, .job-card').forEach(el => {
            observer.observe(el);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    function onSearch(e) {
        e.preventDefault();
        // replace with your search handling (navigate, API call, etc.)
        console.log("search", { query, location });
    }
    // Dummy static jobs data
  
const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $160k",
    description: "We're looking for an experienced frontend developer to join our growing team and build amazing user experiences...",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    remote: true,
    posted: "2 days ago",
    featured: true,
  },
  {
    id: 2,
    title: "Data Scientist",
    company: "Analytics Pro",
    location: "New York, NY",
    type: "Full-time",
    salary: "$100k - $140k",
    description: "Join our data science team to build predictive models and drive insights from complex datasets...",
    tags: ["Python", "Machine Learning", "SQL", "TensorFlow"],
    remote: false,
    posted: "1 day ago",
    featured: false,
  },
  {
    id: 3,
    title: "Product Manager",
    company: "StartupXYZ",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110k - $150k",
    description: "Lead product strategy and work with cross-functional teams to deliver innovative solutions...",
    tags: ["Product Strategy", "Agile", "Analytics", "Leadership"],
    remote: true,
    posted: "3 days ago",
    featured: false,
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "CloudTech Solutions",
    location: "Seattle, WA",
    type: "Contract",
    salary: "$90k - $130k",
    description: "Design and implement scalable infrastructure solutions using modern DevOps practices...",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    remote: true,
    posted: "1 week ago",
    featured: true,
  },
  {
    id: 5,
    title: "UX Designer",
    company: "Design Studio",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$70k - $90k",
    description: "Create intuitive and engaging user experiences for our digital products and platforms...",
    tags: ["Figma", "User Research", "Prototyping", "Design Systems"],
    remote: false,
    posted: "5 days ago",
    featured: false,
  },
  {
    id: 6,
    title: "Backend Developer",
    company: "Enterprise Corp",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$95k - $125k",
    description: "Build robust and scalable backend systems to power our enterprise applications...",
    tags: ["Node.js", "PostgreSQL", "GraphQL", "Microservices"],
    remote: true,
    posted: "4 days ago",
    featured: false,
  }
];

    const handleSubmit = (e) => {
        e.preventDefault();
        const results = jobs.filter(
            (job) =>
                (title ? job.title.toLowerCase().includes(title.toLowerCase()) : true) &&
                (location ? job.location.toLowerCase().includes(location.toLowerCase()) : true)
                // (category ? job.category.toLowerCase().includes(category.toLowerCase()) : true) &&
                // (salary ? job.salary >= salary : true)
        );
        setFilteredJobs(results);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
            <Navigation />
            
            {/* Hero Section with Job Search */}
            <section className="pt-24 pb-16 min-h-[95vh] relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-10 w-48 h-48 bg-gradient-to-br from-emerald-400/20 to-teal-400/15 rounded-full filter blur-3xl animate-pulse" />
                    <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-tl from-teal-400/15 to-cyan-400/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                </div>

                <div className="container mx-auto px-6 h-full relative z-10 flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
                        
                        {/* Left Content - Jobs Focused */}
                        <div className="space-y-6">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-200 shadow-lg animate-slideInLeft">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                    <Briefcase className="w-4 h-4 text-emerald-600" />
                                </div>
                                <span className="text-xs text-gray-700 font-semibold">Career Opportunities</span>
                            </div>

                            {/* Main Heading */}
                            <div className="space-y-3">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                    <span className="block text-gray-900 animate-slideInLeft" style={{ animationDelay: '0.2s' }}>Find Your</span>
                                    <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-slideInLeft" style={{ animationDelay: '0.4s' }}>
                                        Dream Job
                                    </span>
                                    <span className="block text-gray-900 animate-slideInLeft" style={{ animationDelay: '0.6s' }}>Today</span>
                                </h1>
                                
                                <p className="text-lg text-gray-600 leading-relaxed max-w-xl animate-slideInLeft" style={{ animationDelay: '0.8s' }}>
                                    Discover thousands of opportunities from top companies across various industries and locations. Your perfect career match awaits.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 py-4">
                                {[
                                    { number: "2.5K+", label: "Active Jobs", icon: Briefcase, color: "emerald" },
                                    { number: "500+", label: "Companies", icon: Users, color: "teal" },
                                    { number: "95%", label: "Success Rate", icon: TrendingUp, color: "cyan" }
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

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                <Button 
                                    size="lg" 
                                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 shadow-lg shadow-emerald-200 transform hover:scale-105 transition-all duration-300 animate-slideInLeft group"
                                    style={{ animationDelay: '1.5s' }}
                                >
                                    <Search className="mr-2 w-4 h-4" />
                                    Browse Jobs
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button 
                                    size="lg" 
                                    variant="outline" 
                                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-emerald-400 hover:text-emerald-600 px-6 py-3 transition-all duration-300 animate-slideInLeft"
                                    style={{ animationDelay: '1.7s' }}
                                >
                                    <Users className="mr-2 w-4 h-4" />
                                    For Employers
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
                                        <span className="font-semibold text-gray-900">10K+</span> successful job matches
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Job Hero Image */}
                        <div className="relative lg:h-[500px] flex justify-center items-center">
                     
                                {/* Glow Effect Behind Image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 via-teal-400/20 to-cyan-400/20 rounded-2xl blur-xl transform scale-110"></div>
                                
                                {/* Main Image Container */}
                                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-white/50">
                                  <img
  src="/Jobsherosection.png"
  alt="Job Search Professional"
  className="w-full h-[550px] object-cover"
/>

                                    
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent"></div>
                                </div>

                                {/* Floating Job Metrics */}
                              

                        
                        </div>
                    </div>
                </div>

                {/* Search Card Section */}
                <div className="container mx-auto px-6 relative z-10 mt-16">
                    <div className="max-w-5xl mx-auto animate-slideInUp" style={{ animationDelay: '2.2s' }}>
                        <Card className="bg-white/90 backdrop-blur-sm border border-emerald-200 shadow-2xl">
                            <CardContent className="p-6">
                                {/* Main Search Inputs */}
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                                    {/* Job Title Input */}
                                    <div className="md:col-span-2">
                                        <div className="relative">
                                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-emerald-500" />
                                            <input
                                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 bg-white"
                                                placeholder="Job title, keywords, or company"
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    {/* Location Input */}
                                    <div>
                                        <div className="relative">
                                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-emerald-500" />
                                            <input
                                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 bg-white"
                                                placeholder="Location"
                                                value={location}
                                                onChange={(e) => setLocation(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    {/* Search Button */}
                                    <Button 
                                        onClick={handleSubmit}
                                        className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                                    >
                                        <Search className="w-5 h-5 mr-2" />
                                        Search Jobs
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>

                                {/* Filter Buttons */}
                                <div className="flex flex-wrap gap-3">
                                    <Button variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                                        Job Type
                                        <ChevronDown className="ml-2 h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                                        Experience
                                        <ChevronDown className="ml-2 h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                                        Salary Range
                                        <ChevronDown className="ml-2 h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" className="border-emerald-500 text-emerald-600 hover:bg-emerald-50">
                                        <Filter className="mr-2 h-4 w-4" />
                                        More Filters
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Jobs Listing Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    {/* Section Header */}
                    <div className="flex items-center justify-between mb-8 scroll-reveal">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Job Openings</h2>
                            <p className="text-gray-600">Showing {filteredJobs.length > 0 ? filteredJobs.length : jobs.length} jobs</p>
                        </div>
                        <Button variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                            Sort by: Most Recent
                            <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                    </div>

                    {/* Jobs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {(filteredJobs.length > 0 ? filteredJobs : jobs).map((job, index) => (
                            <Card
                                key={job.id}
                                className={`job-card bg-white border hover:border-emerald-300 hover:shadow-xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-1 ${
                                    job.featured ? 'border-emerald-200 shadow-lg ring-2 ring-emerald-100' : 'border-gray-200 shadow-sm'
                                }`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Featured Badge */}
                                {job.featured && (
                                    <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                                        ⭐ Featured
                                    </div>
                                )}
                                
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        {/* Header */}
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <h3 className="text-lg font-bold text-gray-900 hover:text-emerald-600 cursor-pointer transition-colors duration-300 group-hover:text-emerald-600 line-clamp-1">
                                                        {job.title}
                                                    </h3>
                                                    {job.remote && (
                                                        <Badge className="bg-green-100 text-green-700 text-xs px-2 py-0.5">
                                                            Remote
                                                        </Badge>
                                                    )}
                                                </div>
                                                <p className="text-emerald-600 font-semibold text-base mb-1">
                                                    {job.company}
                                                </p>
                                            </div>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 p-1"
                                            >
                                                <Bookmark className="h-4 w-4" />
                                            </Button>
                                        </div>

                                        {/* Job Details */}
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-1 text-gray-600">
                                                <MapPin className="h-4 w-4 text-emerald-500" />
                                                <span className="text-sm">{job.location}</span>
                                            </div>
                                            <div className="flex items-center justify-between text-gray-600">
                                                <div className="flex items-center gap-1">
                                                    <Clock className="h-4 w-4 text-emerald-500" />
                                                    <span className="text-sm">{job.type}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <DollarSign className="h-4 w-4 text-emerald-500" />
                                                    <span className="text-sm font-medium">{job.salary}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                            {job.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1">
                                            {job.tags.slice(0, 3).map((tag, i) => (
                                                <Badge
                                                    key={i}
                                                    variant="outline"
                                                    className="text-xs border-emerald-200 text-emerald-700 hover:bg-emerald-50 transition-colors duration-300"
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                            {job.tags.length > 3 && (
                                                <Badge variant="outline" className="text-xs text-gray-500">
                                                    +{job.tags.length - 3}
                                                </Badge>
                                            )}
                                        </div>

                                        {/* Footer */}
                                        <div className="pt-2 border-t border-gray-100">
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs text-gray-500">{job.posted}</span>
                                                <div className="flex gap-2">
                                                    <Button 
                                                        size="sm"
                                                        className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs px-3 py-1.5 shadow-md hover:shadow-lg transition-all duration-300"
                                                    >
                                                        Apply Now
                                                    </Button>
                                                    <Button 
                                                        size="sm"
                                                        variant="outline" 
                                                        className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 text-xs px-3 py-1.5"
                                                    >
                                                        View
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="text-center mt-12 scroll-reveal">
                        <Button 
                            variant="outline" 
                            size="lg"
                            className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-8 py-3"
                        >
                            Load More Jobs
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Career Success Section */}
            <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/15 to-teal-400/10 rounded-full filter blur-2xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-teal-400/15 to-cyan-400/10 rounded-full filter blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        
                        {/* Left Content */}
                        <div className="space-y-6 scroll-reveal">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-200 shadow-lg animate-slideInLeft">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                                </div>
                                <span className="text-xs text-gray-700 font-semibold">Career Success Guide</span>
                            </div>

                            {/* Main Content */}
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
                                    Take Your Career to the 
                                    <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                                        Next Level
                                    </span>
                                </h2>
                                
                                <p className="text-lg text-gray-600 leading-relaxed animate-slideInLeft" style={{ animationDelay: '0.4s' }}>
                                    Get expert guidance, personalized career advice, and access to exclusive opportunities. Our comprehensive platform connects you with the right employers and helps you build a successful career path.
                                </p>
                            </div>

                            {/* Features List */}
                            <div className="space-y-4 animate-slideInLeft" style={{ animationDelay: '0.6s' }}>
                                {[
                                    {
                                        icon: CheckCircle2,
                                        title: "Personalized Job Matches",
                                        description: "AI-powered recommendations based on your skills and preferences"
                                    },
                                    {
                                        icon: Users,
                                        title: "Career Coaching",
                                        description: "Expert guidance from industry professionals and career advisors"
                                    },
                                    {
                                        icon: TrendingUp,
                                        title: "Skill Development",
                                        description: "Access to courses and resources to advance your professional skills"
                                    }
                                ].map((feature, index) => {
                                    const Icon = feature.icon;
                                    return (
                                        <div key={index} className="flex items-start gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-emerald-100 hover:border-emerald-200 hover:bg-white/80 transition-all duration-300">
                                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                                                <Icon className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                                                <p className="text-sm text-gray-600">{feature.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* CTA Buttons */}

                        </div>

                        {/* Right Image */}
                        <div className="relative flex justify-center items-center animate-slideInRight">
                            <div className="relative w-full max-w-[500px]">
                                {/* Glow Effect Behind Image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 via-teal-400/20 to-cyan-400/20 rounded-3xl blur-xl transform scale-110"></div>
                                
                                {/* Main Image Container */}
                                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white/50">
                                    <img
                                        src="/2.b1d2dea1.webp"
                                        alt="Career Success and Professional Growth"
                                        className="w-full h-auto object-cover"
                                    />
                                    
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 via-transparent to-transparent"></div>
                                </div>

                                {/* Floating Success Metrics */}
                             
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Professional Profile Section */}
            <section className="py-20 bg-gradient-to-br from-white via-emerald-50 to-teal-50 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-32 right-20 w-36 h-36 bg-gradient-to-br from-teal-400/20 to-emerald-400/15 rounded-full filter blur-3xl animate-pulse" />
                    <div className="absolute bottom-32 left-20 w-44 h-44 bg-gradient-to-tl from-cyan-400/15 to-teal-400/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        
                        {/* Left Image */}
                        <div className="relative flex justify-center items-center animate-slideInLeft">
                            <div className="relative w-full max-w-[520px]">
                                {/* Glow Effect Behind Image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/25 via-teal-400/20 to-cyan-400/25 rounded-3xl blur-2xl transform scale-110"></div>
                                
                                {/* Main Image Container */}
                                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white/60 backdrop-blur-sm">
                                    <img
                                        src="/profileshow.png"
                                        alt="Professional Profile Showcase Platform"
                                        className="w-full h-auto object-cover"
                                    />
                                    
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/3 via-transparent to-transparent"></div>
                                </div>

                                {/* Floating Profile Stats */}
                             

                             

                             
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="space-y-6 scroll-reveal">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-teal-200 shadow-lg animate-slideInRight">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                                    <User className="w-4 h-4 text-teal-600" />
                                </div>
                                <span className="text-xs text-gray-700 font-semibold">Profile Showcase</span>
                            </div>

                            {/* Main Content */}
                            <div className="space-y-5">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight animate-slideInRight" style={{ animationDelay: '0.2s' }}>
                                    Build Your 
                                    <span className="block bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                                        Professional Profile
                                    </span>
                                </h2>
                                
                                <p className="text-lg text-gray-600 leading-relaxed animate-slideInRight" style={{ animationDelay: '0.4s' }}>
                                    Create a compelling professional profile that showcases your skills, experience, and achievements. Stand out to recruiters with our advanced profile builder and get discovered by top employers.
                                </p>
                            </div>

                            {/* Benefits List */}
                            <div className="space-y-4 animate-slideInRight" style={{ animationDelay: '0.6s' }}>
                                {[
                                    {
                                        icon: Award,
                                        title: "Skill Verification",
                                        description: "Get your skills verified and showcase authentic certifications to employers"
                                    },
                                    {
                                        icon: Eye,
                                        title: "Enhanced Visibility",
                                        description: "Optimize your profile for search algorithms and increase recruiter discovery"
                                    },
                                    {
                                        icon: BarChart3,
                                        title: "Profile Analytics",
                                        description: "Track profile performance and see who's viewing your professional showcase"
                                    },
                                    {
                                        icon: Briefcase,
                                        title: "Portfolio Integration",
                                        description: "Showcase your work, projects, and achievements in a professional format"
                                    }
                                ].map((benefit, index) => {
                                    const Icon = benefit.icon;
                                    return (
                                        <div key={index} className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-teal-100 hover:border-teal-200 hover:bg-white/90 transition-all duration-300 hover:shadow-md">
                                            <div className="w-11 h-11 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                                                <Icon className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Action Buttons */}
                         
                            
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            {/* Animations Styles */}
            <style>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
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
                
                .animate-slideInUp {
                    animation: slideInUp 0.8s ease-out forwards;
                    opacity: 0;
                }

                .animate-slideInLeft {
                    animation: slideInLeft 0.8s ease-out forwards;
                    opacity: 0;
                }

                .animate-slideInRight {
                    animation: slideInRight 0.8s ease-out forwards;
                    opacity: 0;
                }

                .scroll-reveal {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.6s ease-out;
                }

                .scroll-reveal.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .job-card {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.6s ease-out;
                    position: relative;
                }

                .job-card.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .job-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                }

                .job-card:hover .group-hover\\:text-emerald-600 {
                    color: #059669;
                }

                .line-clamp-1 {
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                /* Staggered animation for grid items */
                .job-card:nth-child(1) { animation-delay: 0.1s; }
                .job-card:nth-child(2) { animation-delay: 0.2s; }
                .job-card:nth-child(3) { animation-delay: 0.3s; }
                .job-card:nth-child(4) { animation-delay: 0.4s; }
                .job-card:nth-child(5) { animation-delay: 0.5s; }
                .job-card:nth-child(6) { animation-delay: 0.6s; }

                /* Gradient hover effect */
                .job-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #059669, #0d9488);
                    transform: scaleX(0);
                    transition: transform 0.3s ease;
                }

                .job-card:hover::before {
                    transform: scaleX(1);
                }
            `}</style>
        </div>
    );

        

};

export default Jobs;