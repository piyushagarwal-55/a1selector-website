import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/footer";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageSquare,
  Users,
  Building,
  ArrowRight,
  Globe,
  Shield,
  HeadphonesIcon,
  Calendar
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "general"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        inquiryType: "general"
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "hello@talentbridge.com",
      description: "Send us an email anytime",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "123 Business Ave, Suite 100",
      description: "New York, NY 10001",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      detail: "Monday - Friday",
      description: "8:00 AM - 6:00 PM EST",
      color: "from-blue-500 to-blue-600"
    }
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "employer", label: "Employer Services" },
    { value: "jobseeker", label: "Job Seeker Support" },
    { value: "partnership", label: "Partnership" },
    { value: "support", label: "Technical Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/30 via-white to-teal-50/30">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-teal-200 rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-cyan-200 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-emerald-100 text-emerald-700 border-0 px-4 py-2">
              <MessageSquare className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Contact <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">TalentBridge</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Ready to transform your hiring process or advance your career? Let's start a conversation.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-600" />
                <span>Secure & Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-emerald-600" />
                <span>Global Reach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Multiple Ways to Connect
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the method that works best for you. We're here to help with all your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-900 mb-2">
                        {info.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-gray-900 font-semibold mb-1">{info.detail}</p>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Left Side - Form */}
              <div>
                <div className="mb-8">
                  <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-0 px-4 py-2">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Let's Start a Conversation
                  </h2>
                  <p className="text-lg text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours. We're excited to hear from you!
                  </p>
                </div>

                {isSubmitted ? (
                  <Card className="border-emerald-200 bg-emerald-50/50">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-emerald-700 mb-2">Message Sent Successfully!</h3>
                      <p className="text-emerald-600 mb-4">Thank you for reaching out. We'll get back to you soon.</p>
                      <Button 
                        onClick={() => setIsSubmitted(false)}
                        className="bg-emerald-600 hover:bg-emerald-700"
                      >
                        Send Another Message
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50/30">
                    <CardContent className="p-8">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Fields */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                              First Name *
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white/80 backdrop-blur-sm focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 outline-none transition-all duration-300"
                              placeholder="John"
                            />
                          </div>
                          <div>
                            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                              Last Name *
                            </label>
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white/80 backdrop-blur-sm focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 outline-none transition-all duration-300"
                              placeholder="Doe"
                            />
                          </div>
                        </div>

                        {/* Email and Phone */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white/80 backdrop-blur-sm focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 outline-none transition-all duration-300"
                              placeholder="john@company.com"
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white/80 backdrop-blur-sm focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 outline-none transition-all duration-300"
                              placeholder="+1 (555) 123-4567"
                            />
                          </div>
                        </div>

                        {/* Company and Inquiry Type */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                              Company/Organization
                            </label>
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white/80 backdrop-blur-sm focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 outline-none transition-all duration-300"
                              placeholder="Your Company Name"
                            />
                          </div>
                          <div>
                            <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-700 mb-2">
                              Inquiry Type *
                            </label>
                            <select
                              id="inquiryType"
                              name="inquiryType"
                              value={formData.inquiryType}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white/80 backdrop-blur-sm focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 outline-none transition-all duration-300"
                            >
                              {inquiryTypes.map(type => (
                                <option key={type.value} value={type.value}>{type.label}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Subject */}
                        <div>
                          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                            Subject *
                          </label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white/80 backdrop-blur-sm focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 outline-none transition-all duration-300"
                            placeholder="How can we help you?"
                          />
                        </div>

                        {/* Message */}
                        <div>
                          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                            Message *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={6}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white/80 backdrop-blur-sm focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 outline-none transition-all duration-300 resize-none"
                            placeholder="Tell us more about your needs or questions..."
                          />
                        </div>

                        {/* Submit Button */}
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-4 px-8 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 w-5 h-5" />
                              Send Message
                              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Right Side - Additional Info */}
              <div className="space-y-8">
                {/* Quick Response */}
                <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-100">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                        <HeadphonesIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-emerald-800">Quick Response Guaranteed</CardTitle>
                        <CardDescription className="text-emerald-600">We respond within 24 hours</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-emerald-700 leading-relaxed">
                      Our dedicated team is committed to providing quick and helpful responses to all inquiries. 
                      Whether you're looking for talent or seeking new opportunities, we'll get back to you promptly.
                    </p>
                  </CardContent>
                </Card>

                {/* Office Hours */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">Office Hours</CardTitle>
                        <CardDescription className="text-gray-600">When we're available</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Monday - Friday</span>
                      <span className="font-semibold text-gray-900">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Saturday</span>
                      <span className="font-semibold text-gray-900">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Sunday</span>
                      <span className="font-semibold text-gray-900">Closed</span>
                    </div>
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">
                        <strong>Note:</strong> Emergency support available 24/7 for existing clients
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Global Reach */}
                <Card className="border-0 shadow-lg bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-100">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-cyan-800">Global Network</CardTitle>
                        <CardDescription className="text-cyan-600">Worldwide talent solutions</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cyan-700 leading-relaxed mb-4">
                      With offices and partnerships across major cities worldwide, we provide comprehensive 
                      recruitment solutions regardless of your location.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['New York', 'London', 'Singapore', 'Toronto', 'Sydney'].map((city) => (
                        <Badge key={city} className="bg-cyan-100 text-cyan-700 border-0">
                          {city}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;