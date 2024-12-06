import axios from "axios"

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
});

export const fetchPokemonByName = async (name) => {
    try {
        const response = await api.get(`/pokemon/${name}`);
        return {
            name: response.data.name,
            image: response.data.sprites.other.home.front_default,
            types: response.data.types.map((type) => type.type.name)
        }
    } catch (error) {
        throw new Error("Pokemon not found");
    }
};

export default api;