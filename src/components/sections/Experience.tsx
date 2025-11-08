
const Experience = () => {
  const experiences = [
    {
      company: "Ergode IT services",
      role: "AI Developer Intern | Onsite",
      period: "June 2025 - July 2025",
      accomplishments: [
        "Worked in Boson technologies department to deploy and maintain Gen AI based applications in python and low code systems and research latest gen AI providing services and strategies.",
        "Contributed to the development and feature enhancement of the department's proprietary AI software, and evaluated third-party AI solutions to identify the most cost effective and scalable solutions."
      ]
    },
    {
      company: "Geoinfo Services, Navi Mumbai",
      role: "Software Engineer Intern | Onsite",
      period: "Dec 2023 - Feb 2024",
      accomplishments: [
        "Rebuilt the company website UI and functionality from ruins by navigating and deciphering user manual for turbify website builder, a legacy system-based software by Facebook, which increased viewer engagement by more than 90%.",
        "Created automated Geo-tagging GPS based android app for geo-data embedding using JavaScript and react expo location fetching service, reducing manual editing time by 100% and offering further customization options.",
        "Helped company employees in technical tasks: python, excel, windows OS retrieval and editing."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl shadow-lg border border-border overflow-hidden animate-fade-in hover:shadow-xl transition-shadow"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Header Section */}
              <div className="bg-primary/5 border-b border-border p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{exp.company}</h3>
                    <p className="text-primary font-medium">{exp.role}</p>
                  </div>
                  <span className="bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap self-start">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {exp.accomplishments.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
