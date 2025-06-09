import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  liveLink?: string;
  image?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  githubLink,
  liveLink,
  image,
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
      {image && (
        <div className="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
          {/* You can add an Image component here if you have project images */}
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Project Image
          </div>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="GitHub Repository"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1 text-sm"
            >
              Live Demo <FiExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
