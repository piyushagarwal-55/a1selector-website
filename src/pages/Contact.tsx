import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/footer";
import { FileText, Search, Users, UserCheck,Download,Star ,Shield, Heart, Award, TrendingUp,CheckCircle2 ,ArrowRight,Calendar, Clock, User } from "lucide-react";

const blog = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="bg-gradient-to-br from-teal-50 via-white to-gray-50 py-20">
  <div className="container">
    <div className="max-w-4xl mx-auto text-center" style={{ opacity: 1, transform: 'none' }}>
      <h1 className="text-4xl font-bold text-gray-900 mb-8 sm:text-5xl">
        Contact Us
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Get in touch with our team. We're here to help with all your recruitment needs.
      </p>
    </div>
  </div>
</section>
      <section className="py-16 px-8 bg-white">
  <div className="container">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Email Card */}
      <div style={{ opacity: 1, transform: 'none' }}>
        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center h-full hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-8 w-8 text-teal-600">
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-900 font-medium mb-1">hello@talentbridge.com</p>
            <p className="text-sm text-gray-600">Send us an email anytime</p>
          </div>
        </div>
      </div>

      {/* Phone Card */}
      <div style={{ opacity: 1, transform: 'none' }}>
        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center h-full hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-8 w-8 text-teal-600">
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-900 font-medium mb-1">+1 (555) 123-4567</p>
            <p className="text-sm text-gray-600">Mon-Fri from 8am to 6pm</p>
          </div>
        </div>
      </div>

      {/* Office Card */}
      <div style={{ opacity: 1, transform: 'none' }}>
        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center h-full hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin h-8 w-8 text-teal-600">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Office</h3>
            <p className="text-gray-900 font-medium mb-1">123 Business Ave, San Francisco, CA 94105</p>
            <p className="text-sm text-gray-600">Come say hello at our HQ</p>
          </div>
        </div>
      </div>

      {/* Working Hours Card */}
      <div style={{ opacity: 1, transform: 'none' }}>
        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center h-full hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-8 w-8 text-teal-600">
                <path d="M12 6v6l4 2"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
            <p className="text-gray-900 font-medium mb-1">Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p className="text-sm text-gray-600">Weekend support available</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
<section className="py-20 bg-gray-50">
  <div className="container">
    <div className="max-w-4xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-12" style={{ opacity: 1, transform: 'none' }}>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
        <p className="text-lg text-gray-600">
          Fill out the form below and we'll get back to you within 24 hours
        </p>
      </div>

      {/* Card / Form Container */}
      <div style={{ opacity: 1, transform: 'none' }}>
        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
          
          {/* Card Header */}
          <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
            <div className="leading-none font-semibold">Get in Touch</div>
            <div className="text-muted-foreground text-sm">
              Whether you're an employer looking for talent or a job seeker exploring opportunities, we'd love to hear from you.
            </div>
          </div>

          {/* Card Content / Form */}
          <div className="px-6 space-y-6">
            <form>
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="flex items-center gap-2 text-sm font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="John"
                    required
                    className="border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="lastName" className="flex items-center gap-2 text-sm font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Doe"
                    required
                    className="border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    required
                    className="border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="+1 (555) 000-0000"
                    required
                    className="border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="space-y-2 mt-4">
                <label htmlFor="company" className="flex items-center gap-2 text-sm font-medium">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Your company name"
                  className="border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                />
              </div>

              {/* Subject */}
              <div className="space-y-2 mt-4">
                <label htmlFor="subject" className="flex items-center gap-2 text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="How can we help you?"
                  required
                  className="border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                />
              </div>

              {/* Message */}
              <div className="space-y-2 mt-4">
                <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  placeholder="Tell us more about your needs..."
                  required
                  className="border-input min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 text-sm font-medium shadow-xs h-10 rounded-md px-6 w-full bg-teal-600 hover:bg-teal-700 mt-6 text-white cursor-pointer"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>


 


       <Footer />
    </div>
  );
};

export default blog;