import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  category,
  image,
  description,
  index = 0
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl shadow-lg"
    >
      <div className="relative h-80 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
        
        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
          <span className="text-white text-m font-medium mb-2">{category}</span>
          <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-300 transition-colors duration-300">{title}</h3>
          <p className="text-white/80 mb-4 line-clamp-2">{description}</p>
          
          <Link 
            to={`/projects/${id}`}
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors duration-300"
          >
            <span>View Project</span>
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight size={16} />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;