import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  category: string;
}

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Portfolio',
      description: 'Personal portfolio website showcasing development skills and projects.',
      longDescription: 'A high-performance personal portfolio website built with modern web technologies. It features smooth scroll-linked animations, a custom high-performance background, and a responsive design optimized for all devices. It demonstrates expertise in React, Framer Motion, and UI/UX design.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      image: '/images/projects/portfolio.png',
      githubUrl: 'https://github.com/santhoshdinakaran3-star/Portfolio',
      liveUrl: 'http://localhost:8080',
      category: 'Web Development',
    },
    {
      id: 2,
      title: 'CIFAR_10',
      description: 'Image classification project using deep learning and CNNs.',
      longDescription: 'An end-to-end computer vision project implementing a Convolutional Neural Network (CNN) to classify images from the CIFAR-10 dataset. Features include data augmentation, model training with PyTorch/TensorFlow, and performance analysis through confusion matrices and accuracy graphs.',
      technologies: ['Python', 'PyTorch', 'CNN', 'Matplotlib', 'NumPy'],
      image: '/images/projects/cifar10.png',
      githubUrl: 'https://github.com/santhoshdinakaran3-star/CIFAR_10',
      liveUrl: '#',
      category: 'Deep Learning',
    },
    {
      id: 3,
      title: 'Habit Tracker',
      description: 'Daily habit tracking web application to improve productivity.',
      longDescription: 'A comprehensive habit tracking application designed to help users build and maintain healthy routines. Includes features for setting daily goals, tracking progress with interactive charts, and receiving notification reminders. Built with a full-stack architecture for persistent data storage.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      image: '/images/projects/habit-tracker.png',
      githubUrl: 'https://github.com/santhoshdinakaran3-star/habit-tracker',
      liveUrl: '#',
      category: 'Full Stack',
    },
    {
      id: 4,
      title: 'Chat Perso',
      description: 'Real-time personal chat application for instant messaging.',
      longDescription: 'A real-time messaging platform enabling instant communication between users. Utilizing WebSocket technology through Socket.io, the application supports private chat rooms, message history, and user status indicators, providing a seamless and responsive chat experience.',
      technologies: ['Socket.io', 'React', 'Node.js', 'Express', 'Tailwind CSS'],
      image: '/images/projects/chat-perso.png',
      githubUrl: 'https://github.com/santhoshdinakaran3-star/chat-perso',
      liveUrl: '#',
      category: 'Real-time Apps',
    },
    {
      id: 5,
      title: 'Code Vis',
      description: 'Interactive code visualization tool for developers.',
      longDescription: 'A powerful tool designed to visualize code execution and structure. It helps developers understand complex algorithms and data structures through interactive diagrams and real-time visualization of variable states and execution flow. Features a built-in code editor and multiple visualization modes.',
      technologies: ['React', 'D3.js', 'Monaco Editor', 'Canvas API', 'TypeScript'],
      image: '/images/projects/code-vis.png',
      githubUrl: 'https://github.com/santhoshdinakaran3-star/Code-vis',
      liveUrl: '#',
      category: 'Developer Tools',
    },
    {
      id: 6,
      title: 'Inter-Department Library Management System',
      description: 'Full Stack Web Application',
      longDescription: 'Dynamic library management website with login/signup, animated book search, and MySQL backend integration. Features include user authentication, book catalog management, search functionality with animations, and comprehensive database operations for managing library resources across multiple departments.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'PHP'],
      image: '/images/projects/library-management.png',
      githubUrl: '#',
      liveUrl: '#',
      category: 'Full Stack',
    },
    {
      id: 7,
      title: 'Predictive Modeling – Firearm Sales in U.S.',
      description: 'Data Science & Machine Learning Project',
      longDescription: 'Predictive analytics model to forecast U.S. firearm sales using state-wise handgun & long gun adjustments, time-based features, and regression algorithms. Includes performance evaluation with R², RMSE, MAE, and feature importance analysis. The model analyzes historical sales data to identify trends and make accurate predictions for future firearm sales patterns.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'NumPy', 'Matplotlib'],
      image: '/images/projects/firearm-sales.png',
      githubUrl: '#',
      liveUrl: '#',
      category: 'Data Science',
    },
    {
      id: 8,
      title: 'Zentix - AI Resume Analyzer',
      description: 'AI-driven ATS resume analyzer providing instant compatibility scores and optimizations.',
      longDescription: 'Zentix allows you to upload your resume and a target job description, and instantly receive an AI-driven compatibility score. Built specifically to tackle tricky Applicant Tracking Systems (ATS), it features optimized REST APIs for reduced latency and a fully responsive interface. Demonstrates integration of AI models with a modern React frontend and FastAPI backend.',
      technologies: ['React', 'FastAPI', 'AI', 'Tailwind CSS'],
      image: '/images/projects/zentix.png',
      githubUrl: 'https://github.com/santhoshdinakaran3-star/AtsResume',
      liveUrl: 'https://atsfriendresume.netlify.app/',
      category: 'AI Application',
    },
  ];
  const techIcons: { [key: string]: string } = {
    'React': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
    'TypeScript': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    'Tailwind CSS': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg',
    'Framer Motion': 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg',
    'Vite': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg',
    'Python': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    'PyTorch': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg',
    'Node.js': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
    'Express': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
    'MongoDB': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
    'Socket.io': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg',
    'MySQL': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
    'PHP': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
    'HTML': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
    'CSS': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
    'JavaScript': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    'Pandas': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg',
    'NumPy': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg',
    'Matplotlib': 'https://cdn.worldvectorlogo.com/logos/matplotlib-1.svg',
    'Scikit-learn': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
    'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
  };

  const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
      <motion.div
        className="relative w-full max-w-4xl bg-gradient-hero glass rounded-lg p-8 max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-destructive/20 text-destructive hover:bg-destructive/30 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <div className="flex gap-4">
              <a
                href={project.githubUrl}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition-colors"
                data-cursor-hover
              >
                <Github className="w-4 h-4" />
                Code
              </a>
              <a
                href={project.liveUrl}
                className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                data-cursor-hover
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </div>
          </div>

          <div>
            <span className="inline-block px-3 py-1 text-sm bg-accent/20 text-accent rounded-full mb-4">
              {project.category}
            </span>
            <h3 className="text-3xl font-bold text-primary mb-4">{project.title}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {project.longDescription}
            </p>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 text-primary rounded-lg text-sm hover:bg-primary/20 transition-colors"
                  >
                    {techIcons[tech] && (
                      <img src={techIcons[tech]} alt={tech} className="w-4 h-4" />
                    )}
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary text-glow-primary mb-8 sm:mb-10 lg:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  rotateY: 5, 
                  rotateX: 5,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                onClick={() => setSelectedProject(project)}
                data-cursor-hover
              >
                <div className="bg-gradient-hero rounded-lg overflow-hidden glass glow-soft group-hover:glow-primary transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <span className="inline-block px-2 py-1 text-xs bg-accent/20 text-accent rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center gap-1.5 px-2 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] sm:text-xs rounded-md"
                        >
                          {techIcons[tech] && (
                            <img src={techIcons[tech]} alt={tech} className="w-3 h-3" />
                          )}
                          {tech}
                        </div>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-muted/20 text-muted-foreground text-[10px] sm:text-xs rounded-md">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
