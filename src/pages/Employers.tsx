
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { FileText, Search, Users, UserCheck,Download,Star,  Building, Target, Clock ,CircleCheck  } from "lucide-react";
const ItNonIt = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    // Fetch testimonials from backend
    axios
      .get("http://16.171.117.2:3000/testimonials")
      .then((response) => {
        setTestimonials(response.data); // assuming backend returns an array
      })
      .catch((error) => {
        console.error("Error fetching testimonials:", error);
      });
  }, []);
const statsData = [
  {
    icon: <Users className="h-8 w-8 text-teal-600" />,
    value: "10,000+",
    label: "Active Candidates",
  },
  {
    icon: <Building className="h-8 w-8 text-teal-600" />,
    value: "500+",
    label: "Companies Served",
  },
  {
    icon: <Target className="h-8 w-8 text-teal-600" />,
    value: "95%",
    label: "Success Rate",
  },
  {
    icon: <Clock className="h-8 w-8 text-teal-600" />,
    value: "48hrs",
    label: "Average Match Time",
  },
];
    const hiringSteps = [
  {
    number: "01",
    icon: FileText,
    title: "Requirements Analysis",
    description:
      "We work with you to understand your role requirements, company culture, and ideal candidate profile.",
  },
  {
    number: "02",
    icon: Search,
    title: "Candidate Sourcing",
    description:
      "Our team searches through our network and actively recruits top talent that matches your needs.",
  },
  {
    number: "03",
    icon: Users,
    title: "Screening & Vetting",
    description:
      "We conduct thorough interviews and assessments to ensure candidates meet your standards.",
  },
  {
    number: "04",
    icon: UserCheck,
    title: "Presentation & Hire",
    description:
      "We present qualified candidates and support you through the interview and hiring process.",
  },
];
// const testimonials = [
//   {
//     text: `"TalentConnect helped us find our CTO in just 3 weeks. The quality of candidates was exceptional."`,
//     name: "Sarah Johnson",
//     role: "CEO",
//     company: "TechStart Inc",
//   },
//   {
//     text: `"Outstanding service! They understood our culture and found candidates who were perfect fits."`,
//     name: "Michael Chen",
//     role: "HR Director",
//     company: "Growth Corp",
//   },
// ];
const servicesData = [
  {
    icon: <Search className="h-6 w-6 text-teal-600" />,
    title: "Executive Search",
    description: "Find senior-level executives and leadership talent for critical roles.",
    features: [
      "C-level positions",
      "Board members",
      "VP & Director roles",
      "Confidential searches",
    ],
  },
  {
    icon: <Users className="h-6 w-6 text-teal-600" />,
    title: "Volume Hiring",
    description: "Scale your team quickly with our bulk recruitment solutions.",
    features: [
      "Multiple positions",
      "Fast turnaround",
      "Streamlined process",
      "Quality assurance",
    ],
  },
  {
    icon: <Target className="h-6 w-6 text-teal-600" />,
    title: "Specialized Roles",
    description: "Expert recruitment for niche and technical positions.",
    features: [
      "Tech specialists",
      "Healthcare professionals",
      "Finance experts",
      "Industry veterans",
    ],
  },
];

      const redirect = (e) => {
 window.location.href='/employers'
  };

  const Jobredirect = (e) => {
 window.location.href='/jobseekers'
  };
  const stats = [
    {
      number: "10,000+",
      label: "Active Candidates",
      description: "Long-term partnerships built on trust"
    },
    {
      number: "500+",
      label: "Companies Served",
      description: "Successful hires across industries"
    },
    {
      number: "95%",
      label: "Success Rate",
      description: "Round-the-clock assistance"
    },
     {
      number: "48hrs",
      label: "Average Match Time",
      description: "Round-the-clock assistance"
    }
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


  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
    <section className="bg-gradient-to-br from-teal-50 via-white to-slate-50 py-20">
  <div className="container mx-auto px-4">
    <div className="text-center max-w-4xl mx-auto" style={{ opacity: 1, transform: 'none' }}>
      
      <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
        Find Top Talent for Your <span className="text-teal-600">Growing Team</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
        Access our curated network of skilled professionals across tech, finance, healthcare, and more.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {/* Hire Talent Button */}
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all shadow-xs h-10 rounded-md bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg cursor-pointer outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
        >
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
            className="lucide lucide-search h-5 w-5"
            aria-hidden="true"
          >
            <path d="m21 21-4.34-4.34"></path>
            <circle cx="11" cy="11" r="8"></circle>
          </svg>
          Hire Talent
        </button>

        {/* View CVs Button */}
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all border shadow-xs h-10 rounded-md border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 text-lg bg-transparent cursor-pointer outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
        >
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
            className="lucide lucide-building h-5 w-5"
            aria-hidden="true"
          >
            <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
            <path d="M9 22v-4h6v4"></path>
            <path d="M8 6h.01"></path>
            <path d="M16 6h.01"></path>
            <path d="M12 6h.01"></path>
            <path d="M12 10h.01"></path>
            <path d="M12 14h.01"></path>
            <path d="M16 10h.01"></path>
            <path d="M16 14h.01"></path>
            <path d="M8 10h.01"></path>
            <path d="M8 14h.01"></path>
          </svg>
          View CVs
        </button>
      </div>

    </div>
  </div>
</section>


      {/* Stats Section */}
<section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-2">
                {stat.value}
              </h3>
              <p className="text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Navigation Tabs */}
  
<section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16" style={{ opacity: 1, transform: "none" }}>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
           Our Recruitment Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive hiring solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              style={{ opacity: 1, transform: "none" }}
              className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full hover:shadow-lg transition-all duration-300 bg-white"
            >
              {/* Card Header */}
              <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <div className="leading-none font-semibold text-slate-800">
                  {service.title}
                </div>
                <div className="text-sm text-slate-600">{service.description}</div>
              </div>

              {/* Card Content */}
              <div className="px-6">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600">
                      <CircleCheck className="h-4 w-4 text-teal-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all border shadow-xs hover:text-accent-foreground h-9 px-4 py-2 w-full border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


      <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Our Hiring Process
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A streamlined approach to finding the perfect candidates for your
            team.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {hiringSteps.map((step, index) => (
            <div
              key={index}
              className="flex items-start mb-12 last:mb-0"
            >
              {/* Step number */}
              <div className="flex-shrink-0 mr-6">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
              </div>

              {/* Step content */}
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <step.icon className="h-6 w-6 text-teal-600 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-800">
                    {step.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-lg">{step.description}</p>
              </div>
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
            What Employers Say
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Success stories from companies who found their perfect hires through us.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="flex flex-col h-full">
              <div className="flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full bg-white">
                <div className="p-8">
                  {/* Stars */}
                  <div className="flex mb-4">
                    {Array.from({ length: item.star_rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Testimonial */}
                  <p className="text-slate-600 text-lg mb-6 italic">
                    {item.message}
                  </p>

                  {/* Author */}
                  <div>
                    <p className="font-semibold text-slate-800">{item.name}</p>
                    <p className="text-slate-600">{item.role}</p>
                    <p className="text-teal-600 font-medium">{item.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* CTA Section */}
      <Footer />
    </div>
  );
};

export default ItNonIt;