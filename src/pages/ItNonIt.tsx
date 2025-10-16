import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/footer";
const ItNonIt = () => {
  const stats = [
    {
      number: "95%",
      label: "Client Retention",
      description: "Long-term partnerships built on trust"
    },
    {
      number: "5k+",
      label: "Placements",
      description: "Successful hires across industries"
    },
    {
      number: "24/7",
      label: "Support",
      description: "Round-the-clock assistance"
    }
  ];

  const services = [
    {
      title: "Comprehensive Recruitment",
      price: "Custom Quote",
      description: "End-to-end hiring solutions for both IT and non-IT roles, tailored to your organizational needs.",
      features: [
        "Permanent, contract & temporary staffing",
        "Executive search & leadership hiring",
        "High-volume campus & bulk hiring",
        "Customized sourcing strategies"
      ]
    },
    {
      title: "Targeted Talent Acquisition",
      price: "Starting at $1,200 per hire",
      description: "Strategic sourcing and screening for niche skill sets across technology, finance, healthcare, and more.",
      features: [
        "Industry-specific candidate pools",
        "Advanced skill and behavioral assessments",
        "Diversity & inclusion hiring",
        "Regional and global talent mapping"
      ]
    },
    {
      title: "Recruitment Process Outsourcing",
      price: "$1,000 per month",
      description: "Full HR outsourcing including recruitment, onboarding, and workforce management across all functions.",
      features: [
        "End-to-end RPO services",
        "Onboarding & training support",
        "Performance monitoring & reporting",
        "Scalable recruitment teams"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 lg:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Recruitment Services
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            Expert hiring solutions for IT and non‑IT sectors.
          </p>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            From niche technical roles to high-volume staffing, we've got you covered.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                {/* <div className="text-muted-foreground">
                  {stat.description}
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-8">
            <Badge variant="default" className="px-4 py-2">Overview</Badge>
            <Badge variant="outline" className="px-4 py-2">Industries</Badge>
            <Badge variant="outline" className="px-4 py-2">Process</Badge>
            <Badge variant="outline" className="px-4 py-2">Pricing</Badge>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </CardTitle>
                  <div className="text-lg font-semibold text-primary mb-4">
                    {service.price}
                  </div>
                  <CardDescription className="text-muted-foreground mb-6">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-muted-foreground">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Workforce?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our recruitment experts today.
          </p>
          <Button variant="default" size="lg">
            Book a Consultation
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ItNonIt;