
import { ArrowDown, Github, Linkedin, Phone, Lightbulb } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "../ThemeProvider";

const Hero = () => {
  const { theme } = useTheme();
  
  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center pt-20 pb-20 relative transition-all duration-300"
      style={{
        background: theme === 'dark' 
          ? 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/lovable-uploads/7e230941-3b14-4221-8b4c-f549130001d2.png")'
          : 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/lovable-uploads/hero-light-bg-seamless.jpg")',
        backgroundSize: theme === 'dark' ? 'cover' : 'auto',
        backgroundPosition: 'center',
        backgroundRepeat: theme === 'dark' ? 'no-repeat' : 'repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 animate-[slide-in-right_0.5s_ease-out]">
            Aditya Chekkala
          </h1>
          <h2 className="text-xl sm:text-3xl text-foreground/80 mb-8 animate-fade-in" 
              style={{ animationDelay: "0.3s" }}>
            <span className="inline-block hover:transform hover:scale-105 transition-transform duration-300">
              Data-centric Engineering Professional
            </span>
          </h2>
          <p className="text-lg sm:text-xl mb-10 animate-fade-in leading-relaxed max-w-3xl text-foreground/90" 
             style={{ animationDelay: "0.6s" }}>
            <span className="inline-block hover:text-primary transition-colors duration-300">
              Detail-oriented and metric-focused engineering fresher with a strong foundation in 
              algorithms, mathematics, and data extraction. Interested in leveraging technology 
              to develop quick, efficient, scalable solutions using Artificial Intelligence and Automation.
            </span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" 
               style={{ animationDelay: "0.9s" }}>
            <Button asChild className="gap-2">
              <a href="#projects">
                <Lightbulb className="w-4 h-4" />
                View Projects
              </a>
            </Button>
            <Button variant="outline" asChild className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors">
              <a href="#contact">
                <Phone className="w-4 h-4" />
                Contact Me
              </a>
            </Button>
            <Button asChild className="gap-2">
              <a href="https://github.com/Ad-Chekk" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button asChild className="gap-2">
              <a href="https://in.linkedin.com/in/aditya-chekkala-5a86b1278" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center mt-16 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <a href="#skills" className="animate-bounce">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
