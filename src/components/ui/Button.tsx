import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
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
  const baseStyles = 'inline-flex items-center justify-center font-sans font-semibold transition-all duration-300 ease-in-out rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden';

  const variants = {
    primary: 'bg-gradient-to-br from-blue via-blue to-blue-dark hover:from-blue-dark hover:via-blue hover:to-blue text-white focus:ring-blue shadow-lg hover:shadow-xl hover:scale-105 active:scale-95',
    secondary: 'bg-gradient-to-br from-orange via-orange to-orange-dark hover:from-orange-dark hover:via-orange hover:to-orange text-black focus:ring-orange shadow-lg hover:shadow-xl hover:scale-105 active:scale-95',
    outline: 'border-2 border-blue text-blue hover:bg-blue hover:text-white focus:ring-blue shadow-sm hover:shadow-md',
  };

  const sizes = {
    sm: 'px-6 py-2.5 text-sm',
    md: 'px-8 py-3.5 text-base',
    lg: 'px-10 py-5 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {/* Inner gradient overlay for depth */}
      {!disabled && variant !== 'outline' && (
        <span className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
};
