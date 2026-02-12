import React from 'react';
import Link from 'next/link';

interface NavigationItem {
  label: string;
  href: string;
}

interface NavigationProps {
  items: NavigationItem[];
  className?: string;
  onItemClick?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  items,
  className = '',
  onItemClick,
}) => {
  return (
    <nav className={className}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onItemClick}
          className="text-gray-700 dark:text-gray-300 hover:text-orange-primary dark:hover:text-orange-primary transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export const navigationItems: NavigationItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact', href: '/#contact' },
];
