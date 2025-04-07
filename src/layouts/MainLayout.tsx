import { ReactNode } from 'react';
import { clsx } from 'clsx';

// Constants
import { appInformation } from '../constants';

interface MainLayoutProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  children?: ReactNode;
  title?: string;
  isShowVersion?: boolean;
}

export const MainLayout = ({
  title,
  children,
  className,
  isShowVersion,
  ...rest
}: MainLayoutProps) => {
  return (
    <main
      className={clsx(`bg-[#efefef] h-screen flex flex-col`, className)}
      {...rest}
    >
      <header className="p-4">
        {title && <h1 className="text-center text-2xl font-bold">{title}</h1>}
        {isShowVersion && (
          <p className="text-center text-sm">{`Version: ${appInformation.version}`}</p>
        )}
      </header>

      {children}
    </main>
  );
};
