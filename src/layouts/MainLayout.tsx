import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface MainLayoutProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  children?: ReactNode;
  title?: string;
}

export const MainLayout = ({
  title,
  children,
  className,
  ...rest
}: MainLayoutProps) => {
  return (
    <main
      className={clsx(`bg-[#efefef] h-screen flex flex-col`, className)}
      {...rest}
    >
      {title && <h1 className="text-center p-4 text-2xl font-bold">{title}</h1>}
      {children}
    </main>
  );
};
