import { Button } from "@/components/ui/button";
import { Search, Download, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const redirect = () => {
    window.location.href='/employers'
  };

  const Jobredirect = () => {
    window.location.href='/jobseekers'
  };

  const handleDropdownEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-1 flex items-center justify-between py-0">
 <div className="relative flex items-center">

<div className="relative w-[80px] h-[80px] overflow-visible ">

    <img
      src="/logo2.jpg"
      alt="Logo"
     className="absolute inset-0 w-full h-full object-contain pointer-events-none scale-[0.8] rounded-lg"
    />
  </div>

  {/* TEXT */}
  <a
    href="/"
    className="ml-2 text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 
               bg-clip-text text-transparent tracking-wide"
  >
    A1&nbsp;&nbsp;Selectors
  </a>

</div>


        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Our Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => handleDropdownEnter('services')}
            onMouseLeave={handleDropdownLeave}
          >
            <motion.a
              href="#services"
              className={`${isScrolled ? 'text-gray-700' : 'text-black'} hover:text-emerald-600 transition-colors font-medium cursor-pointer flex items-center gap-1`}
              whileHover={{ scale: 1.05 }}
            >
              Our Services
              <svg className="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.a>
            
            <AnimatePresence>
              {activeDropdown === 'services' && (
                <motion.div 
                  className="absolute left-0 mt-2 w-48 bg-white shadow-xl rounded-lg z-50 border border-gray-200"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <ul className="flex flex-col py-2">
                    <li>
                      <a 
                        href="/services/contract-hiring" 
                        className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-600 transition-colors text-gray-700"
                        onMouseEnter={() => handleDropdownEnter('services')}
                      >
                        Contract Hiring
                      </a>
                    </li>
                    <li>
                      <a 
                        href="/services/it-non-it" 
                        className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-600 transition-colors text-gray-700"
                        onMouseEnter={() => handleDropdownEnter('services')}
                      >
                        IT/NON-IT Services
                      </a>
                    </li>
                    <li>
                      <a 
                        href="/services/rpo" 
                        className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-600 transition-colors text-gray-700"
                        onMouseEnter={() => handleDropdownEnter('services')}
                      >
                        RPO
                      </a>
                    </li>
                    <li>
                      <a 
                        href="/services/staffing" 
                        className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-600 transition-colors text-gray-700"
                        onMouseEnter={() => handleDropdownEnter('services')}
                      >
                        Staffing
                      </a>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* For Talent Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => handleDropdownEnter('talent')}
            onMouseLeave={handleDropdownLeave}
          >
            <motion.a
              href="#talent"
              className={`${isScrolled ? 'text-gray-700' : 'text-black'} hover:text-emerald-600 transition-colors font-medium cursor-pointer flex items-center gap-1`}
              whileHover={{ scale: 1.05 }}
            >
              For Talent
              <svg className="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.a>
            
            <AnimatePresence>
              {activeDropdown === 'talent' && (
                <motion.div 
                  className="absolute left-0 mt-2 w-40 bg-white shadow-xl rounded-lg z-50 border border-gray-200"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <ul className="flex flex-col py-2">
                    <li>
                      <a 
                        href="/jobs" 
                        className="block px-4 py-3 hover:bg-emerald-50 hover:text-emerald-600 transition-colors text-gray-700"
                        onMouseEnter={() => handleDropdownEnter('talent')}
                      >
                        Find Jobs
                      </a>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.a 
            href="/companies" 
            className={`${isScrolled ? 'text-gray-700' : 'text-black'} hover:text-emerald-600 transition-colors font-medium`}
            whileHover={{ scale: 1.05 }}
          >
            For Companies
          </motion.a>
          
          <motion.a 
            href="/about" 
            className={`${isScrolled ? 'text-gray-700' : 'text-black'} hover:text-emerald-600 transition-colors font-medium`}
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          
          <motion.a 
            href="/blog" 
            className={`${isScrolled ? 'text-gray-700' : 'text-black'} hover:text-emerald-600 transition-colors font-medium`}
            whileHover={{ scale: 1.05 }}
          >
            Blog
          </motion.a>
          
          <motion.a 
            href="/contact" 
            className={`${isScrolled ? 'text-gray-700' : 'text-black'} hover:text-emerald-600 transition-colors font-medium`}
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={redirect} 
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-300"
            >
              <Search className="w-4 h-4 mr-2" />
              Hire Talent
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              onClick={Jobredirect} 
              size="sm"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg"
            >
              <Download className="w-4 h-4 mr-2" />
              Get Hired
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
          >
            <div className="container mx-auto px-6 py-4 space-y-4">
              <div className="space-y-2">
                <a href="#services" className="block text-gray-700 hover:text-emerald-600 font-medium py-2">Our Services</a>
                <div className="pl-4 space-y-1 border-l-2 border-emerald-100">
                  <a href="/services/contract-hiring" className="block text-gray-600 hover:text-emerald-600 py-1">Contract Hiring</a>
                  <a href="/services/it-non-it" className="block text-gray-600 hover:text-emerald-600 py-1">IT/NON-IT Services</a>
                  <a href="/services/rpo" className="block text-gray-600 hover:text-emerald-600 py-1">RPO</a>
                  <a href="/services/staffing" className="block text-gray-600 hover:text-emerald-600 py-1">Staffing</a>
                </div>
              </div>
              
              <div className="space-y-2">
                <a href="#talent" className="block text-gray-700 hover:text-emerald-600 font-medium py-2">For Talent</a>
                <div className="pl-4 space-y-1 border-l-2 border-emerald-100">
                  <a href="/jobs" className="block text-gray-600 hover:text-emerald-600 py-1">Find Jobs</a>
                </div>
              </div>
              
              <a href="/companies" className="block text-gray-700 hover:text-emerald-600 font-medium py-2">For Companies</a>
              <a href="/about" className="block text-gray-700 hover:text-emerald-600 font-medium py-2">About Us</a>
              <a href="/blog" className="block text-gray-700 hover:text-emerald-600 font-medium py-2">Blog</a>
              <a href="/contact" className="block text-gray-700 hover:text-emerald-600 font-medium py-2">Contact</a>
              
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <Button variant="outline" size="sm" onClick={redirect} className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white">
                  <Search className="w-4 h-4 mr-2" />
                  Hire Talent
                </Button>
                <Button onClick={Jobredirect} size="sm" className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                  <Download className="w-4 h-4 mr-2" />
                  Get Hired
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;