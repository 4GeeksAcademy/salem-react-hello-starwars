import { starWarsData } from "./data/starWarsData";

export const initialStore = () => {
  return {
    message: null,
    favorites: [],
    starWarsData: starWarsData, // Add the data to global state
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
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
