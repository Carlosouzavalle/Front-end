import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Adicione elementos <head> aqui, se necessário */}
      </head>
      <body>{children}</body>
    </html>
  );
}
