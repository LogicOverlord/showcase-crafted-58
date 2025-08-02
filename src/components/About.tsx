import { Code, Palette, Zap, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const skills = [
    'React', 'TypeScript', 'Next.js', 'Node.js', 'Python', 'PostgreSQL',
    'TailwindCSS', 'Figma', 'AWS', 'Docker', 'GraphQL', 'MongoDB'
  ];

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following industry best practices.'
    },
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Creating beautiful, responsive interfaces with attention to user experience and accessibility.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, efficiency, and seamless user interactions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams using agile methodologies and modern development workflows.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full-stack developer with 5+ years of experience creating 
            digital solutions that make a difference. I love turning complex problems 
            into simple, beautiful, and intuitive designs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Info */}
          <div className="animate-slide-in-left">
            <Card className="glass glow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">My Journey</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Started my journey in web development 5 years ago, driven by curiosity 
                    and passion for creating digital experiences. Since then, I've worked 
                    with startups and established companies, delivering high-quality solutions.
                  </p>
                  <p>
                    I specialize in full-stack development with a focus on modern JavaScript 
                    frameworks, cloud technologies, and creating scalable applications that 
                    grow with business needs.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing 
                    to open source projects, or sharing knowledge with the developer community.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <div className="animate-slide-in-right">
            <Card className="glass glow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="px-3 py-1 text-sm glass animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="glass glow-card text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;