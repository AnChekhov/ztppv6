import React from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'lime' | 'outline' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  to?: string; 
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'lime', 
  className = '', 
  to,
  ...props 
}) => {
  const baseStyle = "px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    lime: "bg-tpp-primary text-tpp-dark hover:shadow-[0_0_20px_rgba(216,251,83,0.4)] hover:-translate-y-1",
    outline: "border-2 border-tpp-primary text-tpp-primary hover:bg-tpp-primary hover:text-tpp-dark",
    ghost: "text-slate-600 hover:text-tpp-secondary hover:bg-slate-100"
  };

  const combinedClassName = `${baseStyle} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
