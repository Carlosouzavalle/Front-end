'use client'
import React, { useState, useMemo } from 'react';

function UseMemos({ items = [] }: { items?: string[] }) { // Definindo o tipo de `items` como `string[]`
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  // UseMemo agora vai funcionar sem problemas mesmo se `items` estiver vazio
  const filteredItems = useMemo(() => {
    if (!items || items.length === 0) return []; // Retorna uma lista vazia caso não haja itens
  
    const safeQuery = query?.toLowerCase() ?? ''; // Query segura
    return items.filter((item) =>
      typeof item === 'string' && item.toLowerCase().includes(safeQuery)
    );
  }, [items, query]);

  // Controle da exibição das sugestões
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Digite para filtrar"
        className="border p-2"
      />

      {/* Mostrar as sugestões apenas se houver alguma */}
      {showSuggestions && filteredItems.length > 0 && (
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      {/* Exibir uma mensagem caso não haja sugestões */}
      {showSuggestions && filteredItems.length === 0 && (
        <p>Nenhum item encontrado</p>
      )}
    </div>
  );
}

export default UseMemos;
