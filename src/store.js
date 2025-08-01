import { starWarsData, getStarWarsData } from "./data/starWarsData";

export const initialStore = () => {
  return {
    message: null,
    favorites: [],
    starWarsData: starWarsData, // Start with fallback data
    isLoading: false,
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "set_loading":
      return {
        ...store,
        isLoading: action.payload,
      };

    case "set_star_wars_data":
      return {
        ...store,
        starWarsData: action.payload,
        isLoading: false,
      };

    case "add_favorite":
      const character = action.payload;
      // Check if already in favorites
      if (store.favorites.find((fav) => fav.id === character.id)) {
        return store; // Already in favorites, don't add again
      }
      return {
        ...store,
        favorites: [...store.favorites, character],
      };

    case "remove_favorite":
      const characterId = action.payload;
      return {
        ...store,
        favorites: store.favorites.filter((fav) => fav.id !== characterId),
      };

    default:
      throw Error("Unknown action.");
  }
}
