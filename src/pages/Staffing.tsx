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
      label: "Avg. Fill Time",
      description: "Successful hires across industries"
    },
    {
      number: "24/7",
      label: "Global Support",
      description: "Round-the-clock assistance"
    }
  ];

  const services = [
    {
      title: "Contract & Temporary Staffing",
      price: "Custom Quote",
      description: "Temporary or contract staffing allows companies to hire professionals for project-based work, reducing burden on full-time staff.",
      features: [
        "Rapid deployment of skilled professionals",
        "Scalable workforce for tight deadlines",
        "Reduced administrative and recruitment costs",
        "Flexible contract durations"
      ]
    },
    {
      title: "Mutual-Benefit Staffing",
      price: "Starting at $1,000 per placement",
      description: "We connect organizations with niche professionals and offer opportunities to job seekers, ensuring mutual value.",
      features: [
        "Access to extensive candidate networks",
        "Opportunities for active and passive candidates",
        "Dedicated recruiter and trainer support",
        "Streamlined hiring process"
      ]
    },
    {
      title: "HR Management Outsourcing",
      price: "$500 per month",
      description: "Outsource your HR recruitment and onboarding to our experts, so you can focus on core business functions.",
      features: [
        "Resume screening and skill assessments",
        "Comprehensive onboarding and training",
        "Performance tracking and reporting",
        "Compliance and documentation management"
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
          Staffing Services
          </h1>
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
Temporary & contract staffing for your critical projects.
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        Fulfill work demands, reduce costs, and strengthen your team.
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
            <Badge variant="default" className="px-4 py-2">Services</Badge>
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