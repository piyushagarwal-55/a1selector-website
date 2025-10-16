import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/footer";

const ItNonIt = () => {
  const stats = [
    {
      number: "95%",
      label: "Success Rate",
      description: "Long-term partnerships built on trust"
    },
    {
      number: "18 Days",
      label: "Average Time to Hire",
      description: "Successful hires across industries"
    },
    {
      number: "24/7",
      label: "Global Support",
      description: "Support Available"
    }
  ];

  const services = [
    {
      title: "Service/Enterprise RPO",
      price: "Custom Quote",
      description: "End-to-end recruitment lifecycle management for all departments and locations within your organization.",
      features: [
        "Dedicated recruiters for every department",
        "Hiring for executive, permanent & temp roles",
        "Tech-enabled sourcing and screening",
        "Full-cycle recruitment support"
      ]
    },
    {
      title: "Short-term or Project-based RPO",
      price: "Starting at $1,500",
      description: "Tailored RPO for time-bound or project-specific hiring needs.",
      features: [
        "Rapid deployment of recruiters",
        "Industry-specific candidate pipelines",
        "Scalable talent solutions",
        "Ideal for urgent hiring spikes"
      ]
    },
    {
      title: "Recruitment Process Analysis",
      price: "$500 per audit",
      description: "In-depth audit of your current recruitment function to align with modern hiring trends.",
      features: [
        "End-to-end process review",
        "Benchmarking against industry standards",
        "Insights on automation and efficiency",
        "Roadmap for improvements"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 lg:py-32">
        <div className="container mx-auto px-6 text-center">
         <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
          Recruitment Process Outsourcing
          </h1>
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
Strategic, end-to-end hiring solutions designed to save your time, reduce recruitment costs, and elevate your hiring outcomes.
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
            <Badge variant="default" className="px-4 py-2">RPO Services</Badge>
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
            Book a Demo
          </Button>
        </div>
      </section>
       <Footer />
    </div>
  );
};

export default ItNonIt;