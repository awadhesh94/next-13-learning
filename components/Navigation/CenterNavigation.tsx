import React from 'react';
import Link from 'next/link';
import { NavigationsProps } from '../../types/navigation';

const CenterNavigation: React.FC<NavigationsProps> = ({ navigations }) => {
  return (
    <nav className="md:my-11 my-5 animate-fade-in">
      <ul className="flex navigations-center justify-center gap-4">
        {navigations.map((navigation) => (
          <Link
            key={navigation.title}
            href={navigation.path}
            className="text-base font-light duration-500 text-grayDark hover:text-biege"
          >
            {navigation.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default CenterNavigation;
