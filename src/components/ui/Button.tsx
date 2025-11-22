import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium transition-all duration-200 ease-out rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-white text-blue hover:bg-white/90 focus:ring-blue/20 shadow-sm hover:shadow-md',
    secondary: 'bg-blue text-white hover:bg-blue-dark focus:ring-blue/20 shadow-sm hover:shadow-md',
    outline: 'bg-white/95 backdrop-blur-sm text-blue hover:bg-white focus:ring-blue/20 shadow-sm hover:shadow-md border border-white/20',
    accent: 'bg-orange text-black hover:bg-orange-dark focus:ring-orange/20 shadow-sm hover:shadow-md font-semibold',
  };

  const sizes = {
    sm: 'px-5 py-1.5 text-sm',
    md: 'px-7 py-2.5 text-base',
    lg: 'px-9 py-3.5 text-base',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
