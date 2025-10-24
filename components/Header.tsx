
import React from 'react';
import { ShieldIcon } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-center space-x-3">
       <ShieldIcon className="w-8 h-8 text-brand-secondary" />
      <h1 className="text-3xl font-bold tracking-tight text-white">
        Code Guardian AI
      </h1>
    </header>
  );
};

export default Header;
