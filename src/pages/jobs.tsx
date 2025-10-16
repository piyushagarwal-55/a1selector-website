import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { FileText, Search, Users, UserCheck, Download, Star, Shield, Heart, Award, TrendingUp, CheckCircle2, ArrowRight,MapPin, Clock, DollarSign, Bookmark } from "lucide-react";

const Jobs = () => {
    const [query, setQuery] = useState("");
    const [location, setLocation] = useState("");
    const [jobType] = useState("Job Type");
    const [experience] = useState("Experience");
    const [salary, setSalary] = useState(0);
    const [title, setTitle] = useState("");
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [category, setCategory] = useState("");
    

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
    description: "We're looking for an experienced frontend developer to join our growing team...",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    remote: true,
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Data Scientist",
    company: "Analytics Pro",
    location: "New York, NY",
    type: "Full-time",
    salary: "$100k - $140k",
    description: "Join our data science team to build predictive models and drive insights...",
    tags: ["Python", "Machine Learning", "SQL", "TensorFlow"],
    remote: false,
    posted: "1 day ago",
  },
  {
    id: 3,
    title: "Product Manager",
    company: "StartupXYZ",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110k - $150k",
    description: "Lead product strategy and work with cross-functional teams...",
    tags: ["Product Strategy", "Agile", "Analytics", "Leadership"],
    remote: true,
    posted: "3 days ago",
  },
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
        <div className="min-h-screen bg-background">
            <Navigation />
            {/* CTA Section */}
   <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Find Your Dream Job
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover opportunities from top companies across various industries
            and locations.
          </p>
        </div>

        {/* Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
            <div className="p-6">
              {/* Inputs row */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                {/* Job title input */}
                <div className="md:col-span-2">
                  <div className="relative">
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
                      className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400"
                    >
                      <path d="m21 21-4.34-4.34"></path>
                      <circle cx="11" cy="11" r="8"></circle>
                    </svg>
                    <input
                      className="flex w-full rounded-md border border-input bg-transparent px-3 py-1 pl-10 h-10 text-base shadow-xs outline-none"
                      placeholder="Job title, keywords, or company"
                    />
                  </div>
                </div>

                {/* Location input */}
                <div>
                  <div className="relative">
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
                      className="lucide lucide-map-pin absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <input
                      className="flex w-full rounded-md border border-input bg-transparent px-3 py-1 pl-10 h-10 text-base shadow-xs outline-none"
                      placeholder="Location"
                    />
                  </div>
                </div>

                {/* Search button */}
                <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 h-10 shadow-xs">
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
                    className="lucide lucide-search mr-2 h-4 w-4"
                  >
                    <path d="m21 21-4.34-4.34"></path>
                    <circle cx="11" cy="11" r="8"></circle>
                  </svg>
                  Search Jobs
                </button>
              </div>

              {/* Filters row */}
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center justify-between gap-2 w-40 rounded-md border px-3 py-2 text-sm shadow-xs">
                  Job Type
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
                    className="lucide lucide-chevron-down size-4 opacity-50"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>

                <button className="flex items-center justify-between gap-2 w-40 rounded-md border px-3 py-2 text-sm shadow-xs">
                  Experience
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
                    className="lucide lucide-chevron-down size-4 opacity-50"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>

                <button className="flex items-center justify-between gap-2 w-40 rounded-md border px-3 py-2 text-sm shadow-xs">
                  Salary Range
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
                    className="lucide lucide-chevron-down size-4 opacity-50"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>

                <button className="inline-flex items-center gap-2 border border-teal-600 text-teal-600 hover:bg-teal-50 rounded-md px-4 py-2 h-9">
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
                    className="lucide lucide-funnel mr-2 h-4 w-4"
                  >
                    <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                  </svg>
                  More Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-12 px-4">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-slate-600">Showing {jobs.length} jobs</p>
          <button
            type="button"
            className="flex items-center justify-between gap-2 w-48 border px-3 py-2 rounded-md text-sm shadow-xs bg-transparent"
          >
            <span>Sort by: Most Recent</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 opacity-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>

        {/* Jobs List */}
        <div className="space-y-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="flex flex-col gap-6 rounded-xl border py-6 shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="p-6">
                {/* Title + Remote */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-slate-800 hover:text-teal-600 cursor-pointer">
                        {job.title}
                      </h3>
                      {job.remote && (
                        <span className="bg-green-100 text-green-700 text-xs font-medium rounded-md px-2 py-0.5">
                          Remote
                        </span>
                      )}
                    </div>
                    <p className="text-teal-600 font-medium mb-2">
                      {job.company}
                    </p>

                    {/* Location, Type, Salary */}
                    <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" /> {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" /> {job.type}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" /> {job.salary}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 mb-4">{job.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs border rounded-md px-2 py-0.5 text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bookmark + Date */}
                  <div className="flex flex-col items-end gap-2 ml-6">
                    <button className="text-slate-400 hover:text-teal-600">
                      <Bookmark className="h-4 w-4" />
                    </button>
                    <p className="text-sm text-slate-500">{job.posted}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium px-4 py-2 rounded-md shadow-xs">
                    Apply Now
                  </button>
                  <button className="border border-teal-600 text-teal-600 hover:bg-teal-50 text-sm font-medium px-4 py-2 rounded-md">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

            <Footer />
        </div>
    );
};

export default Jobs;