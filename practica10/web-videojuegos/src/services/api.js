const API_KEY = '750f16461d304a25a7108e02a2bb4f92';
const BASE_URL = 'https://api.rawg.io/api';

async function fetchData(endpoint, params = "") {
    const res = await fetch(`${BASE_URL}/${endpoint}?key=${API_KEY}${params}`);
    if (!res.ok) throw new Error(`Error en la petición: ${endpoint}`);
    return await res.json();
    }

    export const gameService = {
    getGames: (page = 1) => 
        fetchData('games', `&ordering=-added&page_size=20&page=${page}&dates=2023-01-01,2025-12-31`),

    searchGames: (query, page = 1) => 
        fetchData('games', `&search=${query}&page=${page}&page_size=20`),

    getGameDetails: (id) => 
        fetchData(`games/${id}`),

    getGamesByCategory: (tipo, id, page = 1) => 
        fetchData('games', `&${tipo}=${id}&page=${page}&page_size=20`),

    getPublishers: (page = 1) => 
        fetchData('publishers', `&page=${page}&page_size=20`),

    getPublisherDetails: async (id, page = 1) => {
        const detalles = await fetchData(`publishers/${id}`);
        const juegos = await fetchData('games', `&publishers=${id}&page=${page}&page_size=20`);
        return { detalles, juegos };
    }
};