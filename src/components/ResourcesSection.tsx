import React from "react";
import "../style/ResourcesSection.css";

// Import icons (you can use any icon library like react-icons)
import { FaCode, FaRobot, FaLanguage, FaLaptopCode, FaServer, FaTrophy } from "react-icons/fa";

interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="resource-card">
      <div className="resource-icon">{icon}</div>
      <h3 className="resource-title">{title}</h3>
      <p className="resource-description">{description}</p>
    </div>
  );
};

const ResourcesSection: React.FC = () => {
  const resources = [
    {
      title: "DSA",
      description: "Master Data Structures and Algorithms with curated resources.",
      icon: <FaCode className="icon" />,
    },
    {
      title: "AI/ML",
      description: "Explore Artificial Intelligence and Machine Learning concepts.",
      icon: <FaRobot className="icon" />,
    },
    {
      title: "Programming Languages",
      description: "Learn popular programming languages like Python, Java, and C++.",
      icon: <FaLanguage className="icon" />,
    },
    {
      title: "Web Development",
      description: "Build modern websites with HTML, CSS, JavaScript, and frameworks.",
      icon: <FaLaptopCode className="icon" />,
    },
    {
      title: "System Design",
      description: "Understand the principles of designing scalable systems.",
      icon: <FaServer className="icon" />,
    },
    {
      title: "Competitive Programming",
      description: "Sharpen your problem-solving skills with competitive programming.",
      icon: <FaTrophy className="icon" />,
    },
  ];

  return (
    <section className="resources-container">
      <h2 className="section-title">Resources to Learn</h2>
      
      <div className="resources-grid">
        {resources.map((resource, index) => (
          <ResourceCard
            key={index}
            title={resource.title}
            description={resource.description}
            icon={resource.icon}
          />
        ))}
      </div>

      <a 
        href="#" 
        className="resources-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        View all Resources
      </a>
    </section>
  );
};

export default ResourcesSection;