export interface IPokemonItem {
  name: string;
  url: string;
}

export async function fetchPokemonList() {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(
        `Network response was not ok: ${response.status} - ${response.statusText}`
      );
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw error;
  }
}
