type AbilityInfo = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

export interface IPokemon {
  name: string;
  id: number;
  height: number;
  ability: AbilityInfo[];
}

export async function fetchPokemonData(searchInput: string) {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${searchInput}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(
        `Network response was not ok: ${response.status} - ${response.statusText}`
      );
    }
    const data = await response.json();
    const PokemonData: IPokemon = {
      name: data.species.name,
      id: data.id,
      height: data.height,
      ability: data.abilities,
    };

    return PokemonData;
  } catch (error) {
    throw error;
  }
}
