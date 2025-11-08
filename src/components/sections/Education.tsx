
const Education = () => {
  const educationData = [
    {
      institution: "Mumbai University - Datta Meghe College of Engineering, Airoli, Navi Mumbai",
      degree: "Bachelor of Engineering",
      score: "9.09/10 CGPA",
      field: "CS Engineering (Artificial Intelligence and Data Science) Branch",
      period: "Jun 2021 - May 2025",
      courses: [
        "Object Oriented Programming",
        "DBMS",
        "Data Structures and Algorithms",
        "Computer Networks",
        "Machine Learning",
        "Big Data Mining",
        "Operating Systems",
        "Advanced AI",
        "System Security",
        "Deep Learning",
        "Data Analytics"
      ]
    },
    {
      institution: "Class XII Science Bifocal - Physics Chemistry Maths and Electrical Maintenance",
      degree: "Higher Secondary Certificate",
      score: "90.33%",
      period: "May 2021"
    },
    {
      institution: "Class X under Maharashtra State board of Education",
      degree: "Secondary School Certificate",
      score: "89.00%",
      period: "May 2019"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl shadow-lg border border-border overflow-hidden animate-fade-in hover:shadow-xl transition-shadow"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Header Section */}
              <div className="bg-primary/5 border-b border-border p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{edu.institution}</h3>
                    {edu.field && <p className="text-foreground/70 dark:text-foreground/80 text-sm">{edu.field}</p>}
                  </div>
                  <span className="bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap self-start">
                    {edu.period}
                  </span>
                </div>
              </div>

              {/* Degree and Score Section */}
              <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                  </div>
                  <div className="bg-primary/10 text-primary font-bold px-5 py-2 rounded-full">
                    {edu.score}
                  </div>
                </div>
                
                {/* Courses Section */}
                {edu.courses && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-semibold mb-3 text-foreground">Relevant Courses</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <span 
                          key={i}
                          className="bg-secondary/50 text-secondary-foreground px-3 py-1.5 rounded-lg text-sm hover:bg-secondary transition-colors"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
