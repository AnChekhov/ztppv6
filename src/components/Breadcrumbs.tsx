import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  isDark?: boolean;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, isDark = false }) => {
  return (
    <nav className="flex mb-8 text-sm overflow-x-auto whitespace-nowrap scrollbar-hide relative z-20">
      <ol className="flex items-center space-x-2">
        <li>
          <Link 
            to="/" 
            className={`${isDark ? 'text-slate-400 hover:text-yellow-400' : 'text-slate-500 hover:text-blue-600'} transition-colors flex items-center gap-1.5`}
          >
            <Home size={14} />
            <span>Главная</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <ChevronRight size={14} className={isDark ? 'text-slate-600' : 'text-slate-300'} />
            {item.path ? (
              <Link 
                to={item.path} 
                className={`${isDark ? 'text-slate-400 hover:text-yellow-400' : 'text-slate-500 hover:text-blue-600'} transition-colors`}
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-yellow-400 font-semibold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
