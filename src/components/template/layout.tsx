import React, { ReactNode } from 'react';

import { Header } from '../parts/header';
import { Footer } from '../parts/footer';

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-4xl w-full mx-auto">{children}</main>
      <Footer />
    </div>
  );
};
