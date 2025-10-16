import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail, Phone, Building2, FileText } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/footer";

const RecruitingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    // Fake API simulation
    setTimeout(() => {
      setLoading(false);
      setStatus("success");
    }, 1500);
  };

  return (
    <div><Navigation />
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center px-6 py-16">
      
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
        
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Contact Us
        </h2>
        <p className="text-center text-gray-500 mb-8">
         Get in touch with our team. We're here to help with all your recruitment needs.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Two-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  id="firstName"
                  placeholder="Jane"
                  className="pl-10"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  id="lastName"
                  placeholder="Doe"
                  className="pl-10"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="email">Email</Label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="jane@example.com"
                  className="pl-10"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <div className="relative mt-1">
                <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  id="phone"
                  placeholder="+1 (555) 000-0000"
                  className="pl-10"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Company & Role */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="company">Company</Label>
              <div className="relative mt-1">
                <Building2 className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  id="company"
                  placeholder="Your Company Name"
                  className="pl-10"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="role">Role to Hire</Label>
              <div className="relative mt-1">
                <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  id="role"
                  placeholder="Software Engineer, HR Manager..."
                  className="pl-10"
                  value={formData.role}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message">Additional Details</Label>
            <Textarea
              id="message"
              rows={5}
              placeholder="Describe the skills, experience, and other requirements..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* Button + Status */}
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium rounded-lg transition-all"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Request"}
          </Button>

          {status === "success" && (
            <p className="text-green-600 text-center mt-2 font-medium">
              ✅ Your request has been sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center mt-2 font-medium">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default RecruitingForm;
