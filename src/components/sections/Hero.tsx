import { ArrowDown, Github, Linkedin, Phone, Lightbulb } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "../ThemeProvider";
import { useEffect, useRef } from "react";

const Hero = () => {
  const { theme } = useTheme();
  const sectionRef = useRef(null);

  // Mouse responsive gradient logic
  useEffect(() => {
    const section = sectionRef.current;

    const handleMouseMove = (e) => {
      if (!section) return;

      const { clientX, clientY, currentTarget } = e;
      const { offsetWidth, offsetHeight } = currentTarget;

      const x = (clientX / offsetWidth) * 100;
      const y = (clientY / offsetHeight) * 100;

      section.style.setProperty("--mx", `${x}%`);
      section.style.setProperty("--my", `${y}%`);
    };

    section?.addEventListener("mousemove", handleMouseMove);
    return () => section?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }

        .mouse-gradient {
          background-position: var(--mx, 50%) var(--my, 50%);
          transition: background-position 0.1s ease-out;
        }

        /* slide animations */
        .slide-left {
          animation: slideLeft 1s ease-out forwards;
          opacity: 0;
        }
        @keyframes slideLeft {
          0% { opacity: 0; transform: translateX(-60px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        .slide-right {
          animation: slideRight 1s ease-out forwards;
          opacity: 0;
        }
        @keyframes slideRight {
          0% { opacity: 0; transform: translateX(60px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        .line-grow {
          animation: lineGrow 1s ease-out forwards;
          opacity: 0;
        }
        @keyframes lineGrow {
          0% { opacity: 0; height: 0%; }
          100% { opacity: 1; height: 85%; }
        }
      `}</style>

      <section
        id="about"
        ref={sectionRef}
        className="mouse-gradient min-h-screen flex items-center pt-20 pb-20 relative transition-all duration-300"
        style={{
          background:
            theme === "dark"
              ? "linear-gradient(50deg, #070707, #101935, #51386bff)"
              : "linear-gradient(50deg, #8aa1a4ff, #749ea0, #254249ff)",
          backgroundSize: "400% 400%",
          animation: "gradientMove 10s ease infinite",
        }}
      >
        <div className="container mx-auto px-6">
          {/* MAIN GRID LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.2fr_1fr] gap-10 items-center max-w-6xl mx-auto">

            {/* LEFT SIDE — NAME + BUTTONS */}
            <div className="slide-left text-left">
              <h1 className="text-4xl sm:text-6xl font-bold mb-4 whitespace-nowrap">
                ADITYA CHEKKALA
              </h1>


              <h3 className="text-xl sm:text-3xl text-foreground/80 mb-8">
                Data-centric Engineering Professional
              </h3>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4">
                <Button asChild className="gap-2">
                  <a href="#projects">
                    <Lightbulb className="w-4 h-4" />
                    View Projects
                  </a>
                </Button>

                <Button
                  variant="outline"
                  asChild
                  className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <a href="#contact">
                    <Phone className="w-4 h-4" />
                    Contact Me
                  </a>
                </Button>

                <Button asChild className="gap-2">
                  <a
                    href="https://github.com/Ad-Chekk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>

                <Button asChild className="gap-2">
                  <a
                    href="https://in.linkedin.com/in/aditya-chekkala-5a86b1278"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            {/* CENTER — VERTICAL LINE */}
            <div className="hidden md:flex justify-center h-full">
              <div className="flex flex-col items-center h-full pt-4">
                <div className="w-3 h-3 bg-black rounded-sm"></div>
                <div className="w-[2.5px] bg-black line-grow"></div>
                <div className="w-3 h-3 bg-black rounded-sm"></div>
              </div>
            </div>

            {/* RIGHT SIDE — DESCRIPTION */}
            <div className="slide-right text-left">
              <p className="text-lg sm:text-xl leading-relaxed text-foreground/90">
                Detail-oriented and metric-focused engineering fresher with a
                strong foundation in algorithms, mathematics, and data
                extraction. Interested in leveraging technology to develop quick,
                efficient, scalable solutions using Artificial Intelligence and
                Automation.
              </p>
            </div>

          </div>

          <div className="flex justify-center mt-16">
            <a href="#skills" className="animate-bounce">
              <ArrowDown className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
