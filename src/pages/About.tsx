
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { FileText, Search, Users, UserCheck,Download,Star ,Shield, Heart, Award, TrendingUp,CheckCircle2 ,ArrowRight } from "lucide-react";
const About = () => {
  const statsData = [
  { value: "10+", label: "Years of Experience" },
  { value: "15,000+", label: "Successful Placements" },
  { value: "500+", label: "Partner Companies" },
  { value: "98%", label: "Client Satisfaction" },
];

 
  const stats = [
    {
      number: "10+",
      label: "Years of Experience",
      description: "Long-term partnerships built on trust"
    },
    {
      number: "15,000+",
      label: "Successful Placements",
      description: "Successful hires across industries"
    },
    {
      number: "500+",
      label: "Partner Companies",
      description: "Round-the-clock assistance"
    },
     {
      number: "98%",
      label: "Client Satisfaction",
      description: "Round-the-clock assistance"
    }
  ];

  const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We operate with complete transparency and honesty in all our interactions.",
  },
  {
    icon: Heart,
    title: "Empathy",
    description:
      "We understand the human side of recruitment and treat everyone with respect.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for the highest standards in everything we deliver.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description:
      "We continuously evolve our methods to stay ahead of industry trends.",
  },
];

  const services = [
    {
      title: "Executive Search",
      price: "Custom Quote",
      description: "Find senior-level executives and leadership talent for critical roles.",
      features: [
        "C-level positions",
        "Board members",
        "VP & Director roles",
        "Confidential searches"
      ]
    },
    {
      title: "Volume Hiring",
      price: "Starting at $1,200 per hire",
      description: "Scale your team quickly with our bulk recruitment solutions.",
      features: [
        "Multiple positions",
        "Fast turnaround",
        "Streamlined process",
        "Quality assurance"
      ]
    },
    {
      title: "Specialized Roles",
      price: "$1,000 per month",
      description: "Expert recruitment for niche and technical positions.",
      features: [
        "Tech specialists",
        "Healthcare professionals",
        "Finance experts",
        "Industry veterans"
      ]
    }
  ];
  const cards = [
  {
    title: "Our Mission",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-target h-6 w-6 text-teal-600"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    ),
    description:
      "To revolutionize the recruitment industry by creating meaningful connections between talented professionals and forward-thinking companies. We believe that the right match can transform both careers and businesses, driving innovation and growth across industries.",
  },
  {
    title: "Our Vision",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-lightbulb h-6 w-6 text-teal-600"
        aria-hidden="true"
      >
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
        <path d="M9 18h6"></path>
        <path d="M10 22h4"></path>
      </svg>
    ),
    description:
      "To become the world's most trusted recruitment partner, known for our integrity, innovation, and impact. We envision a future where every professional finds their perfect role and every company builds their dream team through our platform.",
  },
];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
   <section className="bg-gradient-to-br from-teal-50 via-white to-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div
          className="text-center max-w-4xl mx-auto"
          style={{ opacity: 1, transform: "none" }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            Connecting Talent with{" "}
            <span className="text-teal-600">Opportunity</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            For over a decade, we've been bridging the gap between exceptional
            talent and outstanding companies, creating success stories that
            transform careers and businesses.
          </p>
        </div>
      </div>
    </section>

      {/* Stats Section */}
     <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              style={{ opacity: 1, transform: "none" }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">
                {stat.value}
              </h3>
              <p className="text-slate-600 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ opacity: 1, transform: "none" }}
              className="flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full bg-white"
            >
              <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <div className="font-semibold text-2xl text-slate-800">
                  {card.title}
                </div>
              </div>
              <div className="px-6">
                <p className="text-slate-600 text-lg leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Navigation Tabs */}
   <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            The principles that guide everything we do and shape our
            relationships with clients and candidates.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full text-center hover:shadow-lg transition-all duration-300 bg-white"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-8 w-8 text-teal-600" />
              </div>

              {/* Title */}
              <h3 className="leading-none font-semibold text-slate-800">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600 px-6">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  
   <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Experienced professionals dedicated to connecting talent with
            opportunity.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div>
            <div className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full bg-white hover:shadow-lg transition-all duration-300">
              <div className="p-6 text-center">
                <img
                  alt="Sarah Johnson"
                  src="/placeholder.svg?height=300&width=300"
                  className="w-32 h-32 rounded-full mx-auto mb-6 bg-teal-100"
                />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Sarah Johnson
                </h3>
                <p className="text-teal-600 font-medium mb-4">
                  CEO &amp; Founder
                </p>
                <p className="text-slate-600 mb-4">
                  15+ years in recruitment with a passion for connecting people
                  with their dream careers.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 bg-teal-100 text-teal-700">
                    Executive Search
                  </span>
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 bg-teal-100 text-teal-700">
                    Tech Recruitment
                  </span>
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 bg-teal-100 text-teal-700">
                    Strategy
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div>
            <div className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full bg-white hover:shadow-lg transition-all duration-300">
              <div className="p-6 text-center">
                <img
                  alt="Michael Chen"
                  src="/placeholder.svg?height=300&width=300"
                  className="w-32 h-32 rounded-full mx-auto mb-6 bg-teal-100"
                />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Michael Chen
                </h3>
                <p className="text-teal-600 font-medium mb-4">
                  Head of Technology
                </p>
                <p className="text-slate-600 mb-4">
                  Former software engineer turned recruiter, specializing in
                  technical talent acquisition.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 bg-teal-100 text-teal-700">
                    Tech Hiring
                  </span>
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 bg-teal-100 text-teal-700">
                    Engineering
                  </span>
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 bg-teal-100 text-teal-700">
                    Product
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div>
            <div className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full bg-white hover:shadow-lg transition-all duration-300">
              <div className="p-6 text-center">
                <img
                  alt="Emily Rodriguez"
                  src="/placeholder.svg?height=300&width=300"
                  className="w-32 h-32 rounded-full mx-auto mb-6 bg-teal-100"
                />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Emily Rodriguez
                </h3>
                <p className="text-teal-600 font-medium mb-4">
                  Director of Operations
                </p>
                <p className="text-slate-600 mb-4">
                  Operations expert ensuring smooth processes and exceptional
                  client experiences.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 bg-teal-100 text-teal-700">
                    Operations
                  </span>
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 bg-teal-100 text-teal-700">
                    Client Success
                  </span>
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 bg-teal-100 text-teal-700">
                    Process Optimization
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Why Choose A1Selector?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            What sets us apart in the competitive world of recruitment and
            staffing.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Industry Expertise */}
          <div className="flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full bg-white">
            <div className="px-6">
              <div className="font-semibold text-slate-800 text-lg">
                Industry Expertise
              </div>
              <div className="text-sm text-slate-600">
                Deep knowledge across tech, finance, healthcare, and other key
                industries.
              </div>
            </div>
            <div className="px-6">
              <ul className="space-y-2">
                {["Specialized recruiters", "Industry insights", "Market knowledge", "Trend awareness"].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-teal-600 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Proven Track Record */}
          <div className="flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full bg-white">
            <div className="px-6">
              <div className="font-semibold text-slate-800 text-lg">
                Proven Track Record
              </div>
              <div className="text-sm text-slate-600">
                Over 15,000 successful placements with a 98% client satisfaction
                rate.
              </div>
            </div>
            <div className="px-6">
              <ul className="space-y-2">
                {["High success rate", "Quality matches", "Long-term relationships", "Repeat clients"].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-teal-600 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Personalized Service */}
          <div className="flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full bg-white">
            <div className="px-6">
              <div className="font-semibold text-slate-800 text-lg">
                Personalized Service
              </div>
              <div className="text-sm text-slate-600">
                Tailored approach for both candidates and employers with
                dedicated support.
              </div>
            </div>
            <div className="px-6">
              <ul className="space-y-2">
                {["Dedicated consultants", "Custom solutions", "Personal attention", "Ongoing support"].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-teal-600 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technology-Driven */}
          <div className="flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full bg-white">
            <div className="px-6">
              <div className="font-semibold text-slate-800 text-lg">
                Technology-Driven
              </div>
              <div className="text-sm text-slate-600">
                Advanced matching algorithms and modern tools for efficient
                recruitment.
              </div>
            </div>
            <div className="px-6">
              <ul className="space-y-2">
                {["AI-powered matching", "Modern platform", "Efficient processes", "Data-driven insights"].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-teal-600 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
     <section className="py-20 bg-teal-600">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Career or Team?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Join thousands of professionals and companies who have found success
            through TalentConnect.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary Button */}
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shadow-xs h-10 rounded-md px-8 py-3 text-lg bg-white text-teal-600 hover:bg-slate-50">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            {/* Secondary Button */}
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 border shadow-xs h-10 rounded-md px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-teal-600 bg-transparent">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>

      <Footer />
    </div>
  );
};

export default About;