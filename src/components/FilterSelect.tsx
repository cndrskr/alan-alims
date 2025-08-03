'use client';

import { useState, useRef, useEffect } from 'react';

interface FilterSelectProps<T extends string> {
  value: T;
  onChange: (value: T) => void;
  options: { value: T; label: string }[];
  placeholder?: string;
}

export function FilterSelect<T extends string>({ value, onChange, options, placeholder = "Выберите..." }: FilterSelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === value);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (newValue: T) => {
    onChange(newValue);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="google-input w-full text-left flex items-center justify-between"
      >
        <span className={selectedOption ? "google-text-primary" : "google-text-secondary"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg 
          className={`h-5 w-5 google-text-secondary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 google-card-elevated max-h-60 overflow-auto animate-scale-in">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleChange(option.value)}
              className={`block w-full px-4 py-3 text-left transition-colors duration-150 ${
                option.value === value 
                  ? 'google-text-primary bg-primary-light' 
                  : 'google-text-secondary hover:bg-surface-variant'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 