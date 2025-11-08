
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "adityachekkala@gmail.com",
      link: "mailto:adityachekkala@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-704-527-2526",
      link: "tel:+917045272526"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dombivli, Thane Dist, Maharashtra India",
      link: ""
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://in.linkedin.com/in/aditya-chekkala-5a86b1278"
    },
    {
      name: "GitHub",
      url: "https://github.com/Ad-Chekk"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
                target={item.label === "Location" ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-bold mb-2">{item.label}</h3>
                <p className="text-muted-foreground">{item.value}</p>
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Connect with me</h3>
            <div className="flex justify-center gap-4">
              {socialLinks.map((link, index) => (
                <Button key={index} variant="outline" asChild>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
