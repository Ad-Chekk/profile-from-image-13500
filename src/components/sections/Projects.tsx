import { ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "@/components/ThemeProvider";
import stockPortfolioBg from "@/assets/stock-portfolio-bg.png";
import stockPortfolioBgLight from "@/assets/stock-portfolio-bg-light.jpg";
import echosiftBg1 from "@/assets/echosift-bg-1.png";
import echosiftBg2 from "@/assets/echosift-bg-2.png";
import echosiftBgLight from "@/assets/echosift-bg-light.jpg";
import discordBotBgDark from "@/assets/discord-bot-bg-dark.jpg";
import discordBotBgLight from "@/assets/discord-bot-bg-light.jpg";
import sih2025Bg from "@/assets/sih-2025-bg.png";

const Projects = () => {
  const { theme } = useTheme();
  const projects = [
    {
      title: "Stock Portfolio Optimization Webapp",
      description: "Takes user's portfolio data and analyzes stock's performance of past 5 years and fluctuation of various stocks along with analysing time series patterns. Aims at providing more analytical tools than other trading platforms. (ps. project link might take time to load)",
      technologies: ["Python", "Pandas", "Plotly", "Yahoo Finance Dataset","Transformer", "LSTM"],
      link: "https://equitx-ease.onrender.com/Default_Dashboard"
    },
    {
      title: "EchoSift: AI Data Extraction framework",
      description: " Function:-Built an NLP-based web content analyzer that extracts, cleans, and interprets text from websites using Transformers (BART, RoBERTa) for summarization and question answering. Achieved over 92% answer relevance, processed 3,000-word articles with sub-1s response time, and flexibly eliminates 3–60% boilerplate using custom filters. Integrated metadata capture (IP address, response time, content length).",
      technologies: ["Python", "BS4", "LLM's", "NLP", "Pipeline","Transformer", "BERT"],
      link: "https://github.com/Ad-Chekk/EchoAI"
    },
    {
      title: "AI Discord Server ChatBot",
      description: "Provided an interactive, customizable bot to chat with globally and privately with text summarizer, sentiment analysis, language translator, wikipedia retrival and basic notification feature.",
      technologies: ["Python","Transformer", "NLTK", "DISCORD", "BART"],
      link: "https://github.com/Ad-Chekk/AI-discord-server-bot-"
    },
    {
      title: "GeoTag Android App",
      description: "An Android app to capture photos with real-time GPS coordinates, overlay geolocation metadata and user notes on images, and view geo-tagged pictures within the app. Ideal for travelers, researchers, and field data collectors",
      technologies: ["Java","Fused Location client", "Android Studio", "gradle", "mobile app"],
      link: "https://github.com/Ad-Chekk/GEO_tag_Android"
    },
    {
      title: "Machine Learning Models repository",
      description: "a centralized repository where I explore and test a variety of machine learning and deep learning models. This collection showcases hands-on experiments with different datasets and architectures, intended for learning, experimentation, and showcasing to recruiters and collaborators.",
      technologies: ["Reinforcement Learning","RNN", "Perceptron Learning Algo", "SVM Classifier", "Auto-encoders"],
      link: "https://github.com/Ad-Chekk/ML_models"
    }

  ];

  const achievements = [
    {
      title: "Smart India Hackathon Grand Finalist 2024 IIT Kharagpur 36-Hr, Team-id: 820",
      description: "Got selected and presented CyberFeed analyzer product to National Technical Research Organization.",
      additionalPoint: "Received opportunity to represent IIT KGP Software edn Live on TV with the Prime Minister of India.",
      date: "11 Dec 2024",
      link: "#"
    },
    {
      title: "AI Project Team CyTech Lead | Mumbai Hacks 24-Hrs Hackathon",
      description: "Led a team of 4 in hackathon to build 'PoliMeta' (policy feedback AI project) using LLaMa | Devfolio.",
      date: "26 Oct 2024",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl shadow-lg border border-border overflow-hidden animate-fade-in hover:shadow-xl transition-shadow flex flex-col"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Image Section - Full Width Header */}
              {(index === 0 || index === 1 || index === 2) && (
                <div 
                  className="relative overflow-hidden h-48"
                >
                  {index === 0 && (
                    <div 
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url(${theme === 'light' ? stockPortfolioBgLight : stockPortfolioBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        filter: `blur(1.5px) brightness(${theme === 'light' ? '0.8' : '0.5'})`
                      }}
                    />
                  )}
                  {index === 1 && (
                    <div 
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url(${theme === 'light' ? echosiftBgLight : echosiftBg2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        filter: `blur(1.5px) brightness(${theme === 'light' ? '0.8' : '0.5'})`
                      }}
                    />
                  )}
                  {index === 2 && (
                    <div 
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url(${theme === 'light' ? discordBotBgLight : discordBotBgDark})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        filter: `blur(1.5px) brightness(${theme === 'light' ? '0.8' : '0.5'})`
                      }}
                    />
                  )}
                </div>
              )}

              {/* Content Section with Title and Description */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-secondary/50 text-secondary-foreground text-xs px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project <ExternalLink className="ml-1 h-3.5 w-3.5" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mt-20 mb-12 text-center">Key Achievements</h2>
        
        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl shadow-lg border border-border overflow-hidden animate-fade-in hover:shadow-xl transition-shadow"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Header Section */}
              <div className="border-b border-border p-6 bg-primary/5">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold">{achievement.title}</h3>
                    {index === 0 && (
                      <p className="text-xs text-muted-foreground mt-1">Sponsored by Central Govt Ministry of education</p>
                    )}
                  </div>
                  <span className="text-sm px-3 py-1 rounded-full whitespace-nowrap self-start bg-primary/10 text-primary">
                    {achievement.date}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {achievement.description && (
                  <p className="text-muted-foreground mb-2">• {achievement.description}</p>
                )}
                {achievement.additionalPoint && (
                  <p className="text-muted-foreground">• {achievement.additionalPoint}</p>
                )}
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
