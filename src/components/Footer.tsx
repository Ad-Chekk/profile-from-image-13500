import { useTheme } from "./ThemeProvider";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  
  return (
    <footer 
      className="py-8 border-t border-border relative"
      style={{
        background: theme === 'dark' 
          ? 'linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url("/lovable-uploads/7e230941-3b14-4221-8b4c-f549130001d2.png")'
          : 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/lovable-uploads/281885ab-8d65-448f-ac77-6ad522402f4f.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <p className="text-foreground">
          © {currentYear} Aditya Anshuman Chekkala. All rights reserved.
        </p>
        <p className="text-sm text-foreground/80 mt-2">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
