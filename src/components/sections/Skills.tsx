import { Code2, Database, Coffee, Terminal, GitBranch, Send, Box, Cloud, BarChart3, Brain, Link, FlaskConical, MessageSquare, Zap, Bot, Search, Smartphone, Globe, Shuffle, Users, Briefcase, Paintbrush } from "lucide-react";

const Skills = () => {
  const skillGroups = [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: Code2 },
        { name: "SQL", icon: Database },
        { name: "Java", icon: Coffee },
        { name: "C", icon: Code2 },
        { name: "JavaScript", icon: Code2 }
      ],
    },
    {
      title: "Dev Tools",
      skills: [
        { name: "Ubuntu Linux", icon: Terminal },
        { name: "Git", icon: GitBranch },
        { name: "Postman", icon: Send },
        { name: "Docker", icon: Box },
        { name: "GCP", icon: Cloud }
      ],
    },
    {
      title: "Technologies",
      skills: [
        { name: "Matplotlib", icon: BarChart3 },
        { name: "Tensorflow", icon: Brain },
        { name: "Langchain", icon: Link },
        { name: "Scikit learn", icon: FlaskConical },
        { name: "NLP", icon: MessageSquare },
        { name: "Power Automate", icon: Zap },
        { name: "Flask", icon: FlaskConical },
        { name: "LLM", icon: Bot },
        { name: "RAG", icon: Search },
        { name: "Android", icon: Smartphone }
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "English", icon: Globe },
        { name: "Logical Approach", icon: Brain },
        { name: "Flexibility", icon: Shuffle },
        { name: "Management", icon: Briefcase },
        { name: "Engagement Skills", icon: Users },
        { name: "Sketching and Painting", icon: Paintbrush }
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        
        <div className="space-y-8">
          {skillGroups.map((group, groupIndex) => (
            <div 
              key={group.title} 
              className="bg-card rounded-xl shadow-lg border border-border overflow-hidden animate-fade-in hover:shadow-xl transition-shadow"
              style={{ animationDelay: `${0.1 * groupIndex}s` }}
            >
              {/* Header Section */}
              <div className="bg-primary/5 border-b border-border p-6">
                <h3 className="text-xl font-bold">{group.title}</h3>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <span
                        key={skill.name}
                        className="bg-secondary text-secondary-foreground px-3 py-2 rounded-full text-sm flex items-center gap-2 hover:scale-105 transition-transform"
                      >
                        <IconComponent className="w-4 h-4" />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
