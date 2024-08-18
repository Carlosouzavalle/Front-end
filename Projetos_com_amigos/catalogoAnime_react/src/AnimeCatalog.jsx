import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AnimeCatalog = () => {
    const [animes, setAnimes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = searchTerm.trim() 
                    ? await axios.get(`https://api.jikan.moe/v4/anime?q=${searchTerm}`)
                    : await axios.get('https://api.jikan.moe/v4/top/anime');
                setAnimes(response.data.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        const delayDebounceFn = setTimeout(() => {
            fetchData();
        }, 500); // Debounce de 500ms

        return () => clearTimeout(delayDebounceFn); // Limpa o timeout se o termo de pesquisa mudar

    }, [searchTerm]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="wrapper p-4">
            <div className='flex content-center items-center'>
                <h1 className="my-4 pr-10 text-2xl font-bold mb-4">Catálogo de Animes</h1>
                <input
                    className='p-4 border border-gray-300 rounded'
                    type="search"
                    id="search"
                    placeholder='Digite o nome do anime'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {animes.map((anime) => (
                    <li className="grid bg-white p-8 rounded shadow-md" key={anime.mal_id}>
                        <img className="w-full h-65 object-cover mb-4 rounded" src={anime.images.jpg.image_url} alt={anime.title} />
                        <h2 className="text-lg font-semibold mb-2">{anime.title}</h2>
                        <h4 className="text-sm text-gray-500">Score: {anime.score}</h4>
                        <h4>Episodios: {anime.episodes}</h4>
                        <a className='p-3 bg-blue-200 text-center' href={anime.url} target='_blank' rel="noopener noreferrer">Visite</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AnimeCatalog;
