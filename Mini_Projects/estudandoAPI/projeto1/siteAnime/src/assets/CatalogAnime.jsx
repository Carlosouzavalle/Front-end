import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CatalogoAnime = () => {
    // Estados para armazenar os dados, status de carregamento e possíveis erros
    const [animes, setAnimes] = useState([]); // Armazena os dados que você vai obter da Kitsu API.
    const [loading, setLoading] = useState(true); // Indica se os dados ainda estão sendo carregados.
    const [error, setError] = useState(null); // Armazena qualquer erro que ocorra durante a requisição.


    
    // useEffect para realizar a requisição quando o componente for montado
    useEffect(() => {
        // Função assíncrona para buscar os dados da Kitsu API
        const fetchData = async () => {
            try {
                const response = await axios.get('https://kitsu.io/api/edge/anime');
                setAnimes(response.data.data); // Atualiza o estado com os dados recebidos
                setLoading(false); // Define que terminou de carregar
            } catch (err) {
                setError(err); // Captura erros e os armazena no estado
                setLoading(false); // Define que terminou de carregar mesmo em caso de erro
            }
        };

        fetchData(); // Chama a função para buscar os dados
    }, []); // [] significa que essa requisição só será feita quando o componente for montado





    // Exibe uma mensagem de carregamento enquanto os dados estão sendo buscados
    if (loading) return <p>Loading...</p>;
    // Exibe uma mensagem de erro se algo deu errado
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Catálogo de Animes</h1>
            <ul>
                {animes.map(anime => (
                    <li key={anime.id}>
                        <h2>{anime.attributes.titles.en || anime.attributes.titles.en_jp || anime.attributes.titles.ja_jp}</h2>
                        <p>{anime.attributes.synopsis}</p>
                        <img src={anime.attributes.posterImage.small} alt={anime.attributes.titles.en || anime.attributes.titles.en_jp} />
                        <h3>{anime.attributes.favoritesCount}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CatalogoAnime;
