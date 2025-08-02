import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading development of enterprise-scale web applications serving 100K+ users. Mentoring junior developers and establishing best practices for the development team.',
      achievements: [
        'Reduced application load time by 40% through optimization',
        'Led migration to microservices architecture',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker', 'Kubernetes']
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2020 - 2022',
      type: 'Full-time',
      description: 'Developed and maintained multiple client projects from conception to deployment. Worked closely with design team to implement pixel-perfect interfaces.',
      achievements: [
        'Built 5+ production applications from scratch',
        'Improved code quality by implementing automated testing',
        'Collaborated with cross-functional teams of 10+ members'
      ],
      technologies: ['Next.js', 'TypeScript', 'Python', 'MongoDB', 'Firebase']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      location: 'New York, NY',
      period: '2019 - 2020',
      type: 'Full-time',
      description: 'Focused on creating responsive and accessible web interfaces for various client projects. Specialized in modern JavaScript frameworks and performance optimization.',
      achievements: [
        'Delivered 20+ client projects on time and budget',
        'Improved accessibility scores by 30% across all projects',
        'Trained team on modern CSS techniques and best practices'
      ],
      technologies: ['React', 'Vue.js', 'SASS', 'JavaScript', 'Webpack']
    },
    {
      title: 'Junior Web Developer',
      company: 'WebSolutions Inc',
      location: 'Los Angeles, CA',
      period: '2018 - 2019',
      type: 'Full-time',
      description: 'Started my professional journey developing websites and learning industry best practices. Gained experience in both frontend and backend technologies.',
      achievements: [
        'Completed 15+ website projects',
        'Learned agile development methodologies',
        'Contributed to open source projects'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress', 'MySQL']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      location: 'California, USA',
      period: '2014 - 2018',
      description: 'Focused on software engineering, algorithms, and data structures. Graduated with honors.',
      gpa: '3.8/4.0'
    }
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional Developer',
    'MongoDB Certified Developer',
    'Certified Kubernetes Administrator'
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey through the tech industry, building innovative solutions 
            and growing as a developer.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="glass glow-card animate-slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold gradient-text mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-4 text-muted-foreground mb-2">
                      <span className="font-medium">{exp.company}</span>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:items-end gap-2">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <Badge variant="secondary">{exp.type}</Badge>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">
                  {exp.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education & Certifications */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="glass glow-card animate-slide-in-left">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold gradient-text mb-6">Education</h3>
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary/30 pl-4">
                  <h4 className="text-lg font-semibold mb-1">{edu.degree}</h4>
                  <div className="flex items-center gap-4 text-muted-foreground mb-2">
                    <span className="font-medium">{edu.school}</span>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{edu.description}</p>
                  <Badge variant="secondary">GPA: {edu.gpa}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="glass glow-card animate-slide-in-right">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold gradient-text mb-6">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-3 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors"
                  >
                    <span className="text-sm font-medium">{cert}</span>
                    <ExternalLink size={16} className="text-muted-foreground" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;