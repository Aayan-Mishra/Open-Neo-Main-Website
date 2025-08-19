import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
  icon?: boolean;
  className?: string;
}

export default function Button({ children, href, variant = 'primary', icon = false, className }: ButtonProps) {
  const baseStyles = "inline-flex items-center px-6 py-3 rounded-lg transition-colors";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "border border-white/20 hover:border-white/40 text-white"
  };

  return (
    <a href={href} className={`${baseStyles} ${variants[variant]} ${className || ''} group`}>
      {children}
      {icon && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
    </a>
  );
}