"use client"

import { useEffect } from 'react';

export default function TestComponent() {
  // Este código será executado apenas no lado do servidor
  if (typeof window === 'undefined') {
    console.log('Rodando no servidor');
  }

  // Este código será executado apenas no lado do cliente
  useEffect(() => {
    console.log('Rodando no cliente');
  }, []);

  return <div>Meu Componente</div>;
}
