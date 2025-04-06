import { ReactNode } from 'react';

interface MainLayoutProps {
  children?: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="bg-primary">
      <p>Lorem ipsum dolor sit.</p>
      {children}
    </div>
  );
};
