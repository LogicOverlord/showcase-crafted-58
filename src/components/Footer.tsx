import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <span>© {currentYear} Portfolio. Made with</span>
          <Heart className="text-red-500 animate-pulse" size={16} />
          <span>using React & TailwindCSS</span>
        </div>
        
        <div className="mt-4">
          <p className="text-sm text-muted-foreground">
            Designed and developed with passion for creating amazing digital experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;